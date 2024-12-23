# UI Module Template
Шаблон для модуля [микросервисной архитектуры](https://webpack.js.org/concepts/module-federation/)

--- 

| Dependency  | Version   | 
|-------------|:-----------:|
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  | 5.4.3    |
| ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)      | 5.89.0   |
| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)   | 16.20.2  |
| ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)        | 18.2.0   |

---

## Installation

### Starting project

1. **Clone repository**:

   ```bash
   git clone --single-branch --branch module git@gitlab.ru.auchan.com:enterprise-development-team/archive/templates/ui-module-template.git
	 ```

2. **Install dependencies**:

   ```bash
   npm i
   ```

3. **Start module**:

   ```bash
   npm run start
   ```

### Usage

1. **Change module name in [buildPlugins](./config/build/buildPlugins.ts)**:
	```ts
	const NAME = "<ExampleRemoteModule>";
	```

2. **Change module name in [package.json](./package.json)**:
	```json
	  "name": "<some-module-name>"
	```

3. **Change module name in orchestrator env**:
	```.env
	REMOTE_MODULE_EXAMPLE=<ExampleRemoteModule>@http://localhost:3025/<ExampleRemoteModule>.js
	```


### Other Scripts

1. **run analyzer**:

	 ```bash
   npm run analyze
   ```

2. **run ESlint**:
	
	```bash
	npm run lint
	```

3. **run Check**:

	```bash
	npm run check
	```