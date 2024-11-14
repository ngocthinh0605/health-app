import MemoIcon from 'assets/icons/icon_memo.svg';
import ChallengeIcon from 'assets/icons/icon_challenge.svg';
import NewsIcon from 'assets/icons/icon_info.svg';

export const NAVIGATION_ITEMS = [
  { label: '自分の記録', path: '/my-record', icon: MemoIcon },
  { label: 'チャレンジ', path: '/challenge', icon: ChallengeIcon },
  { label: 'お知らせ', path: '/news', icon: NewsIcon, count: 1 },
];
