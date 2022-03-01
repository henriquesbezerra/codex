"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicExamplesProvider = void 0;
const vscode = require("vscode");
const path = require("path");
class BasicExamplesProvider {
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        const elements = [
            {
                id: "notify-1",
                label: "Hello World # 01",
                description: "Notificação de Informação",
                collapsibleState: vscode.TreeItemCollapsibleState.None,
                iconPath: path.join(__filename, '..', '..', '..', 'resources', 'info.svg'),
                command: {
                    title: "Mensagem de olá mundo",
                    command: "basic-examples.helloWorld"
                },
                tooltip: "Dispara uma notificação do tipo InformationMessage",
                contextValue: "valorContextual",
                accessibilityInformation: {
                    label: "Hello World # 01",
                    role: "link"
                },
            },
            {
                id: "notify-2",
                label: "Error World # 01",
                description: "Notificação de Error",
                collapsibleState: vscode.TreeItemCollapsibleState.None,
                iconPath: path.join(__filename, '..', '..', '..', 'resources', 'error.svg'),
                command: {
                    title: "Mensagem de error",
                    command: "basic-examples.errorWorld"
                },
                tooltip: "Dispara uma notificação do tipo InformationMessage",
                contextValue: "valorContextual",
                accessibilityInformation: {
                    label: "Hello World # 01",
                    role: "link"
                },
            }
        ];
        // if (!element) {
        // vscode.window.showInformationMessage('Extensão inciada');
        return Promise.resolve(elements);
        // }
        // return Promise.resolve([]);
    }
}
exports.BasicExamplesProvider = BasicExamplesProvider;
//# sourceMappingURL=BasicExamplesProvider.js.map