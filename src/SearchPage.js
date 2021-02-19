import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwngkp7kwIiAIhrp2byhrbK5Tmz07HzDgQ18DF--h=s88-c-k-c0x00ffffff-no-rj"
        channel="白雪みしろShirayuki Mishiro"
        verified
        subs="138K"
        noOfVideos="390"
        description="です。 バーチャルメイドとして、ご主人様を癒せるように、日々頑張りたいです…！ 漫画家 佃煮のりおが個人 ..."
      />
      <hr />
      <VideoRow
        views="15K"
        subs="138K"
        description="です！ ご主人様を日々癒せるように頑張ります…！ 仲良くして下さいね♪ ⛄Super chatについて ・配信中に ..."
        timestamp="Streamed 1 day ago"
        channel="白雪みしろShirayuki Mishiro"
        title="【西園チグサ】西園の～に！元気いっぱい対談コラボ♥【白雪みしろ】#チグみしろ"
        image="https://i.ytimg.com/vi/lRZYEwt9VMw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrUgJhAgwbIvJmmrOeAL7sQRUVJg"
      />
      <VideoRow
        views="87K"
        subs="138K"
        description="歌動画2つめ、心を込めて歌いました。 みしろを見てくださったたくさんの方に聴いていただきたいです。"
        timestamp="2 weeks ago"
        channel="白雪みしろShirayuki Mishiro"
        title="flos/ by 白雪みしろ【歌ってみた】"
        image="https://i.ytimg.com/vi/ZWCOrTT6ckw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVtLsdhBEofWvL81SinB2kfwjSbA"
      />
      <VideoRow
        views="132K"
        subs="138K"
        description="活動一周年記念の初歌ってみた動画です！ いつも応援してくださっているご主人様へ心を込めて… ぜひ、たくさん聴いてくださる ..."
        timestamp="2 months ago"
        channel="白雪みしろShirayuki Mishiro"
        title="白い雪のプリンセスは / by 白雪みしろ【歌ってみた】"
        image="https://i.ytimg.com/vi/4aw22YtB2hg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPoT8cGcIDXkqJBNTUT6S0dGEXfA"
      />
      <VideoRow
        views="16K"
        subs="138K"
        description="です！ ご主人様を日々癒せるように頑張ります…！ 仲良くして下さいね♪ ⛄Super chatについて ・配信中に ..."
        timestamp="Streamed 2 weeks ago"
        channel="白雪みしろShirayuki Mishiro"
        title="【歌】歌枠♪好き勝手いっぱい歌っちゃいます！【#白雪みしろ／のりプロ所属】"
        image="https://i.ytimg.com/vi/17v8S4gHH0Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8Sdawr9kT93Rk7vcTDa9NFwO1Lw"
      />
      <VideoRow
        views="14K"
        subs="138K"
        description="です！ ご主人様を日々癒せるように頑張ります…！ 仲良くして下さいね♪ ⛄Super chatについて ・配信中に ..."
        timestamp="Streamed 1 week ago"
        channel="白雪みしろShirayuki Mishiro"
        title="【マイクラ】ダイヤ50個採るまで耐久！まっすぐ進みましょう…！【#白雪みしろ／のりプロ所属】"
        image="https://i.ytimg.com/vi/IqbXdFsmR7k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMie8mLlRBxBXEQDDUx-NUOmAGpg"
      />
      <VideoRow
        views="38K"
        subs="138K"
        description="配信タグ：#めあしろ ⛄神楽めあ様⛄ https://www.youtube.com/channel/UCWCc8tO-uUl_7SJXIKJACMw 「のりプロ」B2タペストリー受注 ..."
        timestamp="Streamed 8 months ago"
        channel="白雪みしろShirayuki Mishiro"
        title="【神楽めあ】何が起こるか分からない！予測不能の対談コラボ【白雪みしろ】#めあしろ"
        image="https://i.ytimg.com/vi/ufwuJ4N-mmc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTYwalYiXQgqiLgjTvgnuByUQ5qg"
      />
    </div>
  );
}

export default SearchPage;
