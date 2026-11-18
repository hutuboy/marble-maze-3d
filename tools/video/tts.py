# 生成七段中文配音（edge-tts），并用 imageio-ffmpeg 测量时长，
# 每段视频时长 = max(分镜下限, 配音时长 + 1s 呼吸)。仅开发期使用。
import asyncio
import json
import re
import subprocess
from pathlib import Path

import edge_tts
import imageio_ffmpeg

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "out"
AUDIO = OUT / "audio"
AUDIO.mkdir(parents=True, exist_ok=True)

FF = imageio_ffmpeg.get_ffmpeg_exe()
SPEC = json.loads((ROOT / "narration.json").read_text(encoding="utf-8"))


def duration(path: Path) -> float:
    p = subprocess.run([FF, "-i", str(path), "-f", "null", "-"],
                       capture_output=True, text=True)
    m = re.search(r"Duration:\s*(\d+):(\d+):(\d+\.\d+)", p.stderr)
    h, mi, s = m.groups()
    return int(h) * 3600 + int(mi) * 60 + float(s)


async def main():
    plan = {}
    for seg in SPEC["segments"]:
        mp3 = AUDIO / f"{seg['id']}.mp3"
        for attempt in range(4):  # edge-tts 偶发 NoAudioReceived，重试
            try:
                await edge_tts.Communicate(seg["text"], SPEC["voice"]).save(str(mp3))
                break
            except Exception:
                if attempt == 3:
                    raise
                await asyncio.sleep(4)
        a = duration(mp3)
        d = max(seg["min"], round(a + 1.0, 2))
        plan[seg["id"]] = {"audio": round(a, 2), "dur": d}
        print(f"{seg['id']} audio={a:.2f}s video={d:.2f}s")
    (OUT / "durations.json").write_text(json.dumps(plan, ensure_ascii=False, indent=2), encoding="utf-8")
    print("total", round(sum(v["dur"] for v in plan.values()), 2), "s")


asyncio.run(main())