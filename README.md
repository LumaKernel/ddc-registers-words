# ddc-registers-words

[![Doc](https://img.shields.io/badge/doc-%3Ah%20ddc--registers--words-orange.svg?style=flat-square)](doc/ddc-file.txt)

Registers Words Completion for ddc.vim

## Required

- [denops.vim](https://github.com/vim-denops/denops.vim)
- [ddc.vim](https://github.com/Shougo/ddc.vim)

## Configuration

```vim
call ddc#custom#patch_global('sources', ['registers-words'])
call ddc#custom#patch_global('sourceOptions', {
    \ 'registers-words': {
    \   'mark': 'R',
    \ }})
call ddc#custom#patch_global('sourceParams', {
    \ 'registers-words': {
    \   'registers': '/"012',
    \ }})
```
