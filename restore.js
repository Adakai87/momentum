// ============================================================
// Life Tracker データ復元スクリプト
// 使い方:
//   1. https://life-taracker.web.app をブラウザで開く
//   2. F12 → コンソール タブ
//   3. このファイルの中身を全部コピーして貼り付けてEnter
//   4. ページをリロードしてからGoogleログインする
// ============================================================

(function() {
  const ts = Date.now();

  const data = {
    lft_daily: [{"id":"mnbnkeqplvks669ll7k","createdAt":"2026-03-29T11:05:15.169Z","title":"またやり直す1週間 - DAY315","date":"2026-03-21","mood":"🔥","body":"目標を新しく望愛と立てた。833日後にアメリカに行く。住むんだ。2年後だ。\n博報堂面接対策・Claude Code開発・タスク処理を並行して進める。"}],
    lft_work: [],
    lft_job: [{"id":"mnbnkeqpkbbgzpc8f3c","createdAt":"2026-03-29T11:05:15.169Z","company":"Google","position":"ビジネス職","status":"不採用","date":"2026-03-14","body":"二次面接まで進んだ。本当に行けると思っていただけに悔しい。でも必ず再挑戦する。Googleで働くという目標は変わらない。"},{"id":"mnbnkeqpo12fvf4sa5o","createdAt":"2026-03-29T11:05:15.169Z","company":"博報堂","position":"営業・マーケティング","status":"面接中","date":"2026-03-21","body":"小河原さんのリファラルで受験。4月に入る前に決め切る。Google二次面接の経験を活かして万全の準備で臨む。泥を塗らない。"}],
    lft_life: [{"id":"mnbnkeqp3l8g9g67nrw","createdAt":"2026-03-29T11:05:15.169Z","title":"望愛との833日カウントダウン","category":"人間関係","status":"取り組み中","date":"2026-03-22","body":"一緒にアメリカ移住を目指す。毎週計画を更新して、2人で準備を進める。"},{"id":"mnbnkeqpvyeocnd9izl","createdAt":"2026-03-29T11:05:15.169Z","title":"毎日英語学習30分","category":"習慣","status":"継続中","date":"2026-03-22","body":"TOEIC 900点に向けてリスニング・単語・文法を毎日継続。"},{"id":"mnbnkeqpi4er6wnbp0h","createdAt":"2026-03-29T11:05:15.169Z","title":"渡米に向けた貯金計画","category":"財務","status":"計画中","date":"2026-04-01","body":"2年で必要な資金を計算し、毎月の目標額を設定する。博報堂入社後に見直し。"}],
    lft_goal: [{"id":"mnbnkeqphiprep9x9er","createdAt":"2026-03-29T11:05:15.169Z","title":"博報堂 内定・入社","area":"キャリア","horizon":"今期","deadline":"2026-04-30","progress":50,"body":"小河原さんのリファラルで受験中。4月までに決め切る。面接対策を徹底し、Googleの経験を糧に。"},{"id":"mnbnkeqpcymizmttrvm","createdAt":"2026-03-29T11:05:15.169Z","title":"TOEIC 900点取得","area":"自己成長","horizon":"今年","deadline":"2026-12-31","progress":55,"body":"現在800点台。12月の試験で900点を目標。毎日30分継続。渡米・海外事業部への必須条件。"},{"id":"mnbnkeqppjsm2608g3h","createdAt":"2026-03-29T11:05:15.169Z","title":"博報堂 海外事業部に異動","area":"キャリア","horizon":"中期","deadline":"2027-04-01","progress":20,"body":"博報堂入社後の次のステップ。TOEIC900点が前提条件。グローバルキャリアの重要な通過点。"},{"id":"mnbnkeqp430mcm62r99","createdAt":"2026-03-29T11:05:15.169Z","title":"望愛とアメリカに移住","area":"ライフ設計","horizon":"長期","deadline":"2028-07-01","progress":5,"body":"2年後にアメリカに住む。望愛と立てた大きなマイルストーン。TOEIC・海外事業部・英語力・資金が準備の柱。"}],
    lft_dream: [{"id":"mnbnkeqpgbyqfm56zli","createdAt":"2026-03-29T11:05:15.169Z","title":"アメリカに住む","category":"長期ビジョン","status":"行動中","body":"望愛と833日後に渡米する計画。ただの夢じゃない。TOEIC・キャリア・貯金、全てがここに向かっている。"},{"id":"mnbnkeqpmvyrck2lm18","createdAt":"2026-03-29T11:05:15.169Z","title":"Google入社","category":"長期ビジョン","status":"考え中","body":"二次面接まで行った。次こそ必ず。今この瞬間、Google社員だったらどういう選択をする？"},{"id":"mnbnkeqp2kkpht4gxax","createdAt":"2026-03-29T11:05:15.169Z","title":"AI秘書システムを完成させる","category":"スキル","status":"行動中","body":"Claude×n8nで自分の業務を全自動化。Context Brain、Task Router、Worker Departmentsの体制を作る。身の回りのことを全部自動化したい。"},{"id":"mnbnkeqpz6hqsa2is1","createdAt":"2026-03-29T11:05:15.169Z","title":"TORIHADAでGMになる","category":"仕事","status":"行動中","body":"今の職場での最重要KPI。受注を稼ぎに行く。次のステージへの自信をつける。"}]
  };

  Object.entries(data).forEach(([key, val]) => {
    localStorage.setItem(key, JSON.stringify(val));
    localStorage.setItem('lft_ts_' + key, String(ts));
  });

  // seededフラグをリセット（再シードされないように）
  localStorage.setItem('lft_seeded', '1');
  localStorage.setItem('lft_seeded_life', '1');

  console.log('✅ データを復元しました。ページをリロードしてからGoogleログインしてください。');
  alert('✅ データ復元完了！\nページをリロードしてからGoogleログインしてください。');
})();
