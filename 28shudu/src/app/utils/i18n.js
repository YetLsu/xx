'use strict';

import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    name: 'Sudoku Master',
    continue: 'Continue ',
    restart: 'Restart  ',
    newgame: 'New Game ',
    weekrank: 'Week Rank',
    norecord: 'No records yet',
    onlinerank: 'Online Rank',
    rank: 'You are at %{rank}',

    ok: 'Got it',
    congrats: 'Congrats',
    nosolve: 'No solve after this move',
    success: 'You solve this game in\n',
    fail: 'You lose this game for more then 3 wrong moves',
    errormove: 'Wrong move for %{error} times, you will lose for more than 3 times',
    newrecord: 'New record! You solve this game in\n',

    uploadrecord: 'Send you record to the server?',
    uploadmessage: 'You have to upload your record to view the online rank',
    reject: 'Reject',
    grant: 'Grant',
    loading: 'loading……',
    error: 'Error',
    uplaoderror: 'Upload failed',
    queryerror: 'Query failed',

    share: 'Share',
    sharemessage: 'Sudoku Master - for pure sudoku pleasure',
    sharefailed: 'Share faild',

    rate: 'Rate this app',
    ratemessage: 'Your rate is my great hornor',
    cancel: 'Cancel',
    confirm: 'Confrim',
  },
  zh: {
    name: 'Sudoku Master',
    continue: '继续 ',
    restart: '重新开始  ',
    newgame: '新游戏 ',
    weekrank: '排名',
    norecord: '暂无记录',
    onlinerank: '排行榜',
    rank: '你的排名 %{rank}',

    ok: '好的',
    congrats: '恭喜',
    nosolve: '提示',
    success: '成功\n',
    fail: '你失败了 3 次',
    errormove: '错误了 %{error} 次,  超过3次就失败！',
    newrecord: '新纪录！\n',

    uploadrecord: '上传你的记录?',
    uploadmessage: '你必须上传记录查看排名！',
    reject: '拒绝',
    grant: '允许',
    loading: '加载中……',
    error: '错误',
    uplaoderror: '上传失败',
    queryerror: '查询失败',

    share: '分享',
    sharemessage: 'Sudoku Master - 娱乐大师',
    sharefailed: '分享失败',

    rate: '评分',
    ratemessage: '给个评价吧',
    cancel: '取消',
    confirm: '确定',
  }
 
};

export default I18n;