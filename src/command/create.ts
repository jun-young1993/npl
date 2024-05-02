import readlineInterface from "../lib/cli/readlineInterface";
import Console from "../lib/consoleColor/consol-color";
const Create = async () => {
	Console.info("++++++++++++++++++++++");
	Console.info("+[CREATE NPM PROJECT]+");
	Console.info("++++++++++++++++++++++");

	const packageJson = {
		name: "no name",
		version: "1.0.0",

	}

	readlineInterface.question(`project name?(${packageJson.name})`,(projectName) => {
		packageJson.name = projectName;
		
		readlineInterface.question(`project version`)
		readlineInterface.question('project path?(.):',(projectPath) => {
			readlineInterface.question('bye?:',(result) => {
				// await console.log(result);
			});
		});
	})

	

}

export default Create;