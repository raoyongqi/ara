import { ipcMain } from 'electron';
import path from 'path';  // 引入 path 模块来处理路径
import os from 'os'; // 引入 os 模块来处理操作系统相关的路径
import fs from 'fs'; // 引入 fs 模块来处理文件系统操作
import { exec } from 'child_process'; // 引入 child_process 来执行 ffmpeg 命令
import { useLogger } from '../common/logger';
const { logger } = useLogger('silly');


// 初始化 IPC 通信

    export function initBridge() {

}
