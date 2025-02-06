import { Component } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.css'],
})
export class JsonEditorComponent {
  jsonInput: string = '';
  formattedJson: string = '';
  selectedFormat: string = 'Text'; // Default: Text
  jsonObject: any = {}; // JSON object for tree view

  formatJson() {
    try {
      const parsed = JSON.parse(this.jsonInput);
      this.formattedJson = JSON.stringify(parsed, null, 2);
      this.jsonObject = parsed;
    } catch (error) {
      alert('Invalid JSON!');
    }
  }

  convertOutputFormat(format: string) {
    if (format === 'Tree') {
      try {
        this.jsonObject = JSON.parse(this.formattedJson);
      } catch (error) {
        alert('Invalid JSON format!');
      }
    }
  }

  clearValue() {
    this.formattedJson = '';
    this.jsonObject = {};
  }

  copyValue() {
    navigator.clipboard.writeText(this.formattedJson);
    alert('Copied to clipboard!');
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }
}
