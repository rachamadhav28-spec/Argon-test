# Architecture Overview

1. **Mobile Client**: Single-file HTML5 + JSZip + GitHub REST client.
2. **Path Router**: Maps extracted ZIP entries to destination repo folders.
3. **Sequential Uploader**: Commits 20 to 100 files one by one.
