const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('namua', {
  pickMedia: kind => ipcRenderer.invoke('pick-media', kind),
  saveProject: data => ipcRenderer.invoke('save-project', data),
  loadProject: () => ipcRenderer.invoke('load-project'),
  generateProxy: data => ipcRenderer.invoke('generate-proxy', data),
  analyzeWaveform: path => ipcRenderer.invoke('analyze-waveform', path),
  chooseExportPath: () => ipcRenderer.invoke('choose-export-path'),
  exportHyperframes: data => ipcRenderer.invoke('export-hyperframes', data),
  onTaskLog: cb => ipcRenderer.on('task-log', (_e, msg) => cb(msg))
});
