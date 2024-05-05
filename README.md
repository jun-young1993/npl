# npl
> npm publish manager

# install
```shell
npm install -global npm-fuse
```

# Usage
```shell
$ nf --help

[Usage]
   npm-fuse 1.0.0

   $ npm-fuse <option>
   $ nf <option>

[Options]
   --create                      create new project 
                                 $ nf --create
   --config                      get npm-fuse config list
                                 $ nf --config
   --config --set <key=value>    update npm-fuse config list
                                 $ nf --config --set path=/myProjects/source

```

## --create
> - Creating a TypeScript development environment
>  - It will be generated at the config.path directory.
> - Generating symbolic links for the project symbols created in the current project
>  - By using npm link and creating symbolic links for the generated project, you can directly import and use the source.

