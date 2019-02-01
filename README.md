### initailize
- yarn add -D tslint tslint-react tslint-config-prettier
- tslint --init (if you don't have tslint.json on local, but need tslint installed global)

### tslint.json config
```
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:latest",
        "tslint-config-prettier"
    ],
    "jsRules": {},
    "rules": {},
    "rulesDirectory": []
}
```

### install graphql-yoga 
- yarn add graphql-yoga

### config tsconfig.json
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": [
      "dom",
      "es2017",
      "esnext.asynciterable"
    ],
    "sourceMap": true,
    "outDir": "./dist",
    "moduleResolution": "node",

    "removeComments": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": false
  },
  "exclude": ["node_modules"],
  "include": ["./src/**/*.tsx", "./src/**/*.ts"]
}
```

### scripts adding to package.json
- start, build

### install 
- yarn add -D @types/ws
- yarn add -D @types/aws-lambda

### port change
- environment use (export PORT=whatever)

### tsconfig.json edit
- // "noUnusedParameters": true,