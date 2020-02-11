<p>    
    <h1 align="center">Cargo</h1>
</p>

What is it
---------------------------------

* **Cargo** —  Build System and package manager!
* **cargo.toml** —   This file is in the ['TOML'] (https://github.com/toml-lang/toml) (Tom’s Obvious, Minimal Language) format, which is Cargo’s configuration format.



Folder Structure
---------------------------------

* **Basic Folder Structure**

```bash
project_name/
   ├── src
   │   ├── main.rs
   ├── Cargo.toml
   └── ...

```

* **Builded Folder Structure**

```bash
project_name/
   ├── src
   │   ├── main.rs
   ├── Cargo.lock
   ├── Cargo.toml
   ├── target
       └── debug
           ├── build
           ├── deps
           ├── examples
           ├── project_name (executable)
           └── native
```


* **Released Folder Structure**

```bash
project_name/
   ├── src
   │   ├── main.rs
   ├── Cargo.lock
   ├── Cargo.toml
   └── target
        ├── debug
        |   ├── build
        |   ├── deps
        |   ├── examples
        |   ├── project_name (executable)
        |   └── native
        |
        └── release
            ├── build
            ├── deps
            ├── examples
            ├── hello_world
            └── native
```


Commands
---------------------------------

* **New Project** - cargo new < project_name > [params] : Start a new project
    * **params:**

        --bin : Binary Project

        --vcs (none|...?) : Define a control version

* **Cargo Build** - cargo build, generate a file Cargo.lock with dependencies of current version a folder called targe with our executable
    * **params:**

        --release : Build project without default debug mode and more optmized

* **Cargo Run** - cargo run, run a project, with identify any changes this command rebuild project
    * **params:**

        --release : Build project without default debug mode and more optmized

---------------------------------

Project dependencies
---------------------------------

To add dependencies with need add dependence name and version in Cargo.toml file, in section [dependencies]

Example: 

```Bash
[dependencies]
time = "0.1.12"
```

* Indicates a version with ~  or  ^ 

    * (~) tild indicate any version between minimum release especified and next release
    ```Bash
    [dependencies]
    time = "~0.1.12"
    ```
    * (^) circ, ignores minor and patch version, using just major version bigger then version especified.
        - For: "^1.2.3" : Any version Bigger or equal 1.2.3 and less than 2.0.0
        - For: "^1.2" : Any version Bigger or equal 1.2.0 and less than 2.0.0
        - For: "^1" : Any version Bigger or equal 1.0.0 and less than 2.0.0

    ```Bash
    [dependencies]
    time = "^0.1.12"
    ```