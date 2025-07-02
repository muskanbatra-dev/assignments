# What are Monorepos?

A single Repository that contains all your Frontend, Backend and Devops Code.

## Why monorepos?

you can and you should if your

1. If your services are highly decoupled
2. Services dont depend upon each other

for eg - a codebase which has a golang service and js service

### shared code reuse

### Enhanced Collaboration

### Optimized ci/cd pipeline

## Build System vs Build System Orchestrator vs Monorepo Framework

1. Build System

A build system automates the process of transforming source code written by developers into binary code that can be executed by a computer

For Javascript and Typescript projects, this process can include transpilation(converting JS to TS), bundling (combinig multiple files into fewer files), minification(reducing file size) and more. A build System might also handle running tests linting and deploying applications.

2.  Monorepo Framework
    A monorepo framework provides tools and conventions for managing projects that conatin multiple packages or applications within a single repository(monorepo). This includes dependency management between packages , workspace configuration.

3.  Build System Orchestrator
    common
    backend
    frontend

i get that frontend depends upon common and backend depends upon common
i will let you orchestrate when you run turbo build
dependency management during builds
caching during builds

TurboRepo acts more like a build system orchestrator rather than a direct build system itself.It dosent directly perform tasks like transpilation , bundling minification or running tests. Instead , Turborepo allows you to define tasks in your monorepo that call other tools(which are actually build systems) to perform these actions.

These tools can include anything from tsc , vite etc
