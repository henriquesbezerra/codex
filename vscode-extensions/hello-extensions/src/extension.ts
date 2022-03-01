// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import path = require('path');
import * as vscode from 'vscode';
import { Uri } from 'vscode';
import { BasicExamplesProvider } from './providers/BasicExamplesProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "hello-extensions" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('basic-examples.helloWorld', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World ! from hello-extensions!');
  });
  let disposable01 = vscode.commands.registerCommand('basic-examples.errorWorld', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showErrorMessage('Error World! Mesagem de erro padrão');
  });

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable01);

  // const folders = vscode?.workspace?.workspaceFolders;
  // let pathUri: Uri | any = null;
  // if (folders?.length) {
  //   pathUri = folders[0].uri;
  // }

  vscode.window.registerTreeDataProvider('basic-examples', new BasicExamplesProvider);


  // vscode.window.createTreeView('basic-extensions', {
  //   treeDataProvider: new NodeDependenciesProvider(pathUri.path)
  // });
}

// this method is called when your extension is deactivated
export function deactivate() { }
