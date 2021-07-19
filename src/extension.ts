import * as vscode from "vscode";
import { SidebarProvider } from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "vsfactro-sidebar",
      sidebarProvider
    )
  );

  let disposable = vscode.commands.registerCommand(
    "vsfactro-time-management.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello from Factro - Time Management!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
