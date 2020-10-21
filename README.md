# i18n-src-gen

i18n-src-gen is a sourcecode generator for files that were created using i18n. It generates files using templates. Up to now it only handles xlf files as input.

### Commandline Parameters
- `--src=xxx` will load the given file.
- `--srcdir=xxx` will load all files within the given directory.
- `--srcmask=xxx` will load all files that match the given filemask. the filemask is interpreted as regexp.
- `--outfile=xxx` defines the file that has to be created.
- `--tplfile=xxx` defines the templatefile that is used to generate the output file.

All files that are defined with the src-parameters are processed. They are converted from xlf to json and then the contents are placed in the outputfile according to the templatefile.

