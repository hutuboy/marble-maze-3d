# 开发期小工具：按 marks 边界抽取指定相对时刻的最近帧，供目检。仅开发期使用。
import json
import shutil
import sys
from pathlib import Path

OUT = Path(__file__).resolve().parent / "out"
frames = json.loads((OUT / "frames.json").read_text(encoding="utf-8"))
marks = {m["id"]: m for m in json.loads((OUT / "marks.json").read_text(encoding="utf-8"))}

# 用法: python pick.py s2:-1 s3:-1 s5:8 ...
for arg in sys.argv[1:]:
    sid, off = arg.split(":")
    want = marks[sid]["end"] + float(off)
    best = min(frames, key=lambda x: abs(x["t"] - want))
    dst = OUT / f"pick-{sid}{off.replace('-', 'm').replace('.', '_')}.jpg"
    shutil.copy(OUT / "frames" / best["file"], dst)
    print(dst.name, "rel", round(best["t"] - marks[sid]["start"], 1))