/**
 * /* eslint-disable jsx-a11y/iframe-has-title
 *
 * @format
 */

/** @format */
import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
function App() {
  return (
    <>
      <body>
        <div style={{ textAlign: "center" }}>
          <img width={"50%"} src="img/logo.png" alt=""></img>
          <p style={{ fontSize: "1vw" }}>
            東京都○○区のsample歯科クリニックでは、歯の健康を第一に考えた治療を行っています
          </p>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
          <div style={{width:'33.333%'}}>
            <p>お知らせ</p>
          </div>
          <div style={{width:'33.333%'}}>
            <p>
              診療科目
            </p>
          </div>
          <div style={{width:'33.33%'}}>
            <p>院長あいさつ</p>
          </div>
        </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
          <div style={{width:'33.333%'}}>
            <p>当院の特徴
            </p>
          </div>
          <div style={{width:'33.333%'}}>
            <p>
            院内ブログ
            </p>
          </div>
          <div style={{width:'33.33%'}}>
            <p>アクセス</p>
          </div>
          </div>
        </div>
        <div>
          <img src="img/main-img.jpg" width={"100%"} alt=""></img>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2vw" }}>
            新型コロナウイルス(COVID-19)感染症に対する当院の取り組みはこちら
          </h1>
        </div>
        <div style={{ display: "flex", paddingLeft: "5%", paddingRight: "5%" }}>
          <div style={{ width: "40%" }}>
            <img
              src="img/logo.png"
              alt=""
              width={"90%"}
              style={{ paddingLeft: "1%", paddingRight: "1%" }}
            ></img>
            <h2 style={{ margin: "0", fontSize: "1vw" }}>CLINIC NAME</h2>
            <h2 style={{ margin: "0", fontSize: "1vw" }}>TEL:0000-00-0000</h2>
            <h3 style={{ margin: "0", fontSize: "1vw" }}>〒000-0000 東京都</h3>
          </div>
          <div style={{ width: "60%" }}>
            <table style={{ width: "100%", height: "100%" }}>
              <tbody style={{ fontSize: "3vw" }}>
                <tr style={{ padding: "2" }}>
                  <th>受付時間</th>
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                  <th>日</th>
                </tr>
                <tr>
                  <td>08:00～12:00</td>
                  <td>〇</td>
                  <td>〇</td>
                  <td>〇</td>
                  <td>〇</td>
                  <td>〇</td>
                  <td>〇</td>
                  <td>ー</td>
                </tr>
                <tr>
                  <td>13:00〜17:00</td>
                  <td>〇</td>
                  <td>〇</td>
                  <td>〇</td>
                  <td>ー</td>
                  <td>ー</td>
                  <td>〇</td>
                  <td>ー</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ textAlign: "center", width: "100%", paddingTop: "2%" }}>
          <Stack direction="row" spacing={2} style={{ textAlign: "center", justifyContent:'center'}}>
            <Button variant="outlined">ネットでのご予約はこちらから</Button>
          </Stack>
        </div>
        <div style={{ textAlign: "center", paddingTop: "5%" }}>
          <img src="img/teeth.png" alt="" width={"50"}></img>
          <h2 style={{ fontSize: "5vw", margin: "0" }}>お知らせ</h2>
          <div
            style={{ fontSize: "2vw", paddingLeft: "10%", paddingRight: "10%" }}
          >
            <h3>2022.00.00 院長が学会出席のため午後休診いたします。</h3>
            <hr style={{ color: "smokewhite" }}></hr>
            <h3>2022.00.00 ○○日～○○日は夏季休暇でお休みいたします。</h3>
            <hr style={{ color: "smokewhite" }}></hr>
            <h3>2022.00.00 〇月の院内だよりが発行されました。</h3>
            <hr style={{ color: "smokewhite" }}></hr>
          </div>
        </div>

        <div style={{ textAlign: "center", paddingTop: "5%" }}>
          <img src="img/teeth.png" alt="" width={"50"}></img>
          <h2 style={{ margin: "0" }}>診療科目</h2>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{width:"33.33%"}}>
              <img src="img/teeth.png" alt="" width={"30"}></img>
              <p sytle={{ margin: "0" }}>一般歯科</p>
              <Button variant="contained" size="small">
                詳細
              </Button>
            </div>
            <div style={{width:"33.33%"}}>
              <img src="img/teeth.png" alt="" width={"30"}></img>
              <p sytle={{ margin: "0" }}>矯正歯科</p>
              <Button variant="contained" size="small">
                詳細
              </Button>
            </div>
            <div style={{ width:"33.33%" }}>
              <img src="img/teeth.png" alt="" width={"30"}></img>
              <p sytle={{ margin: "0" }}>診療内科</p>
              <Button variant="contained" size="small">
                詳細
              </Button>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingTop: "5%" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width:"33.33%" }}>
              <img src="img/teeth.png" alt="" width={"30"}></img>
              <p sytle={{ margin: "0" }}>診療科目</p>
              <Button variant="contained" size="small">
                詳細
              </Button>
            </div>
            <div style={{ width:"33.33%" }}>
              <img src="img/teeth.png" alt="" width={"30"}></img>
              <p sytle={{ margin: "0" }}>診療科目</p>
              <Button variant="contained" size="small">
                詳細
              </Button>
            </div>
            <div style={{ width:"33.33%" }}>
              <img src="img/teeth.png" alt="" width={"30"}></img>
              <p sytle={{ margin: "0" }}>診療科目</p>
              <Button variant="contained" size="small">
                詳細
              </Button>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingTop: "15%" }}>
          <img src="img/teeth.png" alt="" width={"50"}></img>
          <h2 style={{ margin: "0" }}>院長ごあいさつ</h2>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              paddingTop: "5%",
            }}
          >
            <div style={{ width: "45%" }}>
              <img src="img/docter.jpg" alt="" width={"100%"}></img>
            </div>
            <div style={{ width: "45%", textAlign: "center" }}>
              <h3 style={{ margin: "0" }}>タイトル</h3>
              <p>文章</p>
              <p style={{ left: "100%" }}>院長/○○ ○○</p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <h4 style={{ margin: "0" }}>経歴</h4>
          <hr></hr>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "33.333%" }}>
              <h5 style={{ margin: "0" }}>平成××年</h5>
              <hr></hr>
              <div style={{ fontSize: "1vw", margin: "0" }}>
                <p>○○大学歯学部卒業</p>
                <p>○○歯学部付属病院 勤務</p>
              </div>
            </div>
            <div style={{ width: "33.333%" }}>
              <h5 style={{ margin: "0" }}>平成××年</h5>
              <hr></hr>
              <div style={{ fontSize: "1vw", margin: "0" }}>
                <p>医療法人○○医院 勤務</p>
              </div>
            </div>
            <div style={{ width: "33.333%" }}>
              <h5 style={{ margin: "0" }}>平成××年</h5>
              <hr></hr>
              <div style={{ fontSize: "1vw", margin: "0" }}>
                <p>○○クリニック 勤務</p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <h4 style={{ margin: "0" }}>資格</h4>
              <hr></hr>
              <div style={{ fontSize: "1vw", margin: "0" }}>
                <ul sytle={{ margin: "0", paddingInline: "0" }}>
                  <li>歯科医師</li>
                  <li>博士(歯学)</li>
                  <li>日本摂食嚥下リハビリテーション学会認定士</li>
                </ul>
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <h4 style={{ margin: "0" }}>所属</h4>
              <hr></hr>
              <div style={{ fontSize: "1vw", margin: "0" }}>
                <ul sytle={{ margin: "0", paddingInline: "0" }}>
                  <li>日本矯正歯科学会 会員</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingTop: "5%" }}>
          <img src="img/teeth.png" alt="" width={"50"}></img>
          <h2 style={{ margin: "0px" }}>当院の特徴</h2>
          <div
            style={{
              display: "flex",
              paddingRight: "5%",
              paddingLeft: "5%",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "50%" }}>
              <h4>特徴１</h4>
              <p>特徴１の詳細</p>
            </div>
            <div style={{ width: "50%" }}>
              <img src="img/features.jpg" alt="" width={"100%"}></img>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingTop: "10%" }}>
          <div
            style={{
              display: "flex",
              paddingRight: "5%",
              paddingLeft: "5%",
              justifyContent: "center",
            }}
          >
            <div
              style={{ width: "50%", paddingLeft: "1%", paddingRight: "1%" }}
            >
              <img src="img/features.jpg" alt="" width={"100%"}></img>
              <h4>特徴２</h4>
              <p>特徴２の詳細</p>
            </div>

            <div
              style={{ width: "50%", paddingLeft: "1%", paddingRight: "1%" }}
            >
              <img src="img/features.jpg" alt="" width={"100%"}></img>
              <h4>特徴２</h4>
              <p>特徴２の詳細</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingTop: "5%" }}>
          <img src="img/teeth.png" alt="" width={"50"}></img>
          <h2 style={{ margin: "0" }}>院内ブログ</h2>
          <div
            style={{
              display: "flex",
              paddingRight: "5%",
              paddingLeft: "5%",
              paddingTop: "5%",
            }}
          >
            <div style={{ width: "50%" }}>
              <img src="img/blog.png" alt="" width={"100%"}></img>
            </div>
            <div style={{ width: "50%", textAlign: "center" }}>
              <h4 style={{ margin: "0" }}>
                <a href="https://github.com/JUNYA-727">ブログのタイトル</a>
              </h4>
              <p style={{ fontSize: "1vw" }}>2022/00/00 投稿者:○○</p>
              <p>内容</p>
              <Button variant="outlined" endIcon={<NavigateNextIcon />}>
                続きへ
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            paddingRight: "5%",
            paddingLeft: "5%",
            paddingTop: "5%",
          }}
        >
          <div style={{ width: "50%" }}>
            <img src="img/illust.png" alt="" width={"100%"}></img>
          </div>
          <div style={{ width: "50%", textAlign: "center" }}>
            <h4 style={{ margin: "0" }}>
              <a href="https://github.com/JUNYA-727">ブログのタイトル</a>
            </h4>
            <p style={{ fontSize: "1vw" }}>2022/00/00 投稿者:○○</p>
            <p>内容</p>
            <Button variant="outlined" endIcon={<NavigateNextIcon />}>
              続きへ
            </Button>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            paddingTop: "10%",
            paddingRight: "5%",
            paddingLeft: "5%",
          }}
        >
          <img src="img/teeth.png" alt="" width={"50"}></img>
          <h2 style={{ margin: "0" }}>アクセス</h2>
        </div>
        <div
          style={{
            width: "90%",
            paddingBottom: "5%",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          <iframe
            src={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.82803038088!2d139.76493611590251!3d35.68123618019429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1655461276582!5m2!1sja!2sjp"
            }
            width="100%"
            height="300vh"
            title="map"
          ></iframe>
          <div
            style={{
              textAlign: "center",
              paddingTop: "5%",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TrainIcon fontSize="large"></TrainIcon>
              <h5 style={{ marginTop: "auto", marginBottom: "auto" }}>
                電車でお越しの方は
              </h5>
            </div>
            <p style={{ margin: "0" }}>××××線 ○○駅下車 徒歩７分</p>
            <p style={{ margin: "0" }}>××××線 ○○駅下車 徒歩７分</p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "5%",
              }}
            >
              <DirectionsBusIcon fontSize="large"></DirectionsBusIcon>
              <h5 style={{ marginTop: "auto", marginBottom: "auto" }}>
                バスでお越しの方は
              </h5>
            </div>
            <p style={{ margin: "0" }}>
              ×××××駅東口発 都営バス ×××××駅行き ×××××停留所下車
              (乗車時間約20分) 徒歩2分
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "5%",
              }}
            >
              <DirectionsCarIcon fontSize="large"></DirectionsCarIcon>
              <h5 style={{ marginTop: "auto", marginBottom: "auto" }}>
                車でお越しの方は
              </h5>
            </div>
            <p style={{ margin: "0" }}>
              駐車場3台完備、もしくは近隣コインパーキング割引券あり
              ×××××ICから×××××線 ×××××町出口から5分
            </p>
          </div>
        </div>
        <div
          style={{
            paddingLeft: "5%",
            paddingRight: "5%",
            display: "flex",
            paddingTop: "5%",
            paddingBottom: "10%",
          }}
        >
          <div style={{ width: "50%", margin: "auto" }}>
            <img src="img/logo.png" alt="" width={"100%"}></img>
          </div>
          <div style={{ width: "50%", textAlign: "center" }}>
            <h4 style={{ margin: "0" }}>○○歯科クリニック</h4>
            <h4 style={{ margin: "0" }}>TEL:0000-00-0000</h4>
            <h4 style={{ margin: "0" }}>東京都○○区○○00-0</h4>
          </div>
        </div>
        <div style={{ backgroundColor: "gray" }}>
          <div
            style={{
              display: "flex",
              paddingLeft: "5%",
              paddingRight: "5%",
              textAlign: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <div style={{ width: "33.33% " }}>
              <p>お知らせ</p>
            </div>
            <div style={{ width: "33.33%" }}>
              <p>診療科目</p>
            </div>
            <div style={{ width: "33.33%" }}>
              <p>院長ご挨拶</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              paddingLeft: "5%",
              paddingRight: "5%",
              textAlign: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            <div style={{ width: "33.33%" }}>
              <p>当院の特徴</p>
            </div>
            <div style={{ width: "33.33%" }}>
              <p>院内ブログ</p>
            </div>
            <div style={{ width: "33.33%" }}>
              <p>アクセス</p>
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              margin: "0",
              color: "white",
              fontSize: "1vw",
            }}
          >
            ©2022 ○○歯科クリニック
          </p>
        </div>
      </body>
    </>
  );
}

export default App;
