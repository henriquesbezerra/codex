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
                id: "32",
                description: "Opcação número 1",
                collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
                iconPath: path.join(__filename, '..', '..', 'resources', 'code-solid.svg'),
                command: {
                    title: "Mensagem de ola mundo",
                    command: "hello-extensions.helloWorld"
                },
                label: "label",
                tooltip: "Tooltip",
                contextValue: "valorContextual",
                accessibilityInformation: {
                    label: "labe",
                    role: "role"
                },
            }
        ];
        if (!element) {
            vscode.window.showInformationMessage('Extensão inciada');
            return Promise.resolve(elements);
        }
        return Promise.resolve([]);
    }
}
exports.BasicExamplesProvider = BasicExamplesProvider;
//# sourceMappingURL=HelloExtensionsProvider.js.map