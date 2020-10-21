# i18n-src-gen

i18n-src-gen is a sourcecode generator for files that were created using i18n. It generates files using templates. Up to now it only handles xlf files as input.

### Commandline Parameters
- `--tplfile=xxx` defines the templatefile that is used to generate the output file. If not defined then the file assets/templates/messages.ts.tpl is used.
- `--src=xxx` will load the given file.
- `--srcdir=xxx` will load all files within the given directory.
- `--srcmask=xxx` will load all files that match the given filemask. the filemask is interpreted as regexp.
- `--outfile=xxx` defines the file that has to be created. If not defined then messages.ts will be created.

All files that are defined with the src-parameters are processed. They are read from xlf and the outputfile is generated according to the template file. 

