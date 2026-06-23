import os, datetime

for folder in ['D:/impres/живопись', 'D:/impres/графика']:
    print(f'=== {os.path.basename(folder)} ===')
    files = os.listdir(folder)
    for f in sorted(files, key=lambda x: os.path.getmtime(folder + '/' + x), reverse=True):
        mtime = datetime.datetime.fromtimestamp(os.path.getmtime(folder + '/' + f))
        size = os.path.getsize(folder + '/' + f)
        print(f'  {mtime.strftime("%H:%M:%S")} {size:>8}  {f}')
    print()

# Also check for text files or new docs
for folder in ['D:/impres/живопись', 'D:/impres/графика', 'D:/impres/app']:
    for f in os.listdir(folder):
        if any(f.lower().endswith(ext) for ext in ['.txt', '.doc', '.docx', '.rtf', '.md']):
            mtime = datetime.datetime.fromtimestamp(os.path.getmtime(folder + '/' + f))
            print(f'TEXT: {folder}/{f}  {mtime.strftime("%H:%M:%S")}')
