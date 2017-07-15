import styles from '../src/css/style.scss';
import html from './index.html';
import React from "react";
import ReactDOM from "react-dom";
import sticky from "./js/sticky.js";
import parall from "./js/parall.js"
import seedContral from "./js/scrollSpeed.js"

class Selection_b extends React.Component {
    render() {
        return(
            <div id="selectionBar">
                <div class="selection">Intro</div>
                <div class="selection">Join us</div>
                <div class="selection">Q & A</div>
                <div class="selection">Partners</div>
                <div class="selection">Team</div>
                <div class="selection">Contact</div>
            </div>
        );
    }
}
class Top extends React.Component {
    render() {
        return(
            <div class="navbar">
                <div class="logo_sqr">
                    <p class="date"><b>10/</b>29.30</p>
                    <div class="line"></div>
                    <p className="localtion">交大工程四館</p>
                </div>
                <div class="title">
                    <h1>MEI-CHU</h1>
                    <h1>HACKATHON</h1>
                </div>
            </div>
        );
    }
}
class Intro extends React.Component {
    render() {
        return(
            <div>
                <div class="content_1">
                    <div class="partical">
                        <h1>什麼是黑客松(Hackathon)？</h1>
                        <b>Hackathon顧名思義，就像是工程界的馬拉松</b>
                        <p>在一兩天內，日以繼夜地用最短的時間，將腦海中的創意構想，
                        實作成系統的雛型(prototype)，然後發表讓大家觀摩或給予建議。
                        參加的團隊組成不限於程式設計師，還包括：美術設計、專案經理……等等。
                        最後作品的成敗否還不僅考驗團隊成員的技術熟練度也包含：
                        團隊的合作精神以及對需求的觀察力和構思的創新度等等。</p>
                    </div>
                </div>
                <div class="content_1">
                    <div class="partical">
                        <h1>梅竹黑客松有什麼不一樣？</h1>
                        <p>目前坊間的類似活動，分為兩種：「傳統黑客松」以及「企業自行舉辦的黑客松」
                        傳統黑客松由參加隊伍發想提案，擁有近乎絕對的自由，但提供的協助與引導少，
                        不利經驗較少的學生團隊，完成作品的門檻提高，構想容易偏離現實考量，落入為創新而創新的迷思；</p>
                        <p>反之，企業自行舉辦的黑客松多半聚焦在自家公司所遇到的瓶頸，出題的範圍比較侷限，
                        所提供的工具也以主辦企業本身自家的技術為主。有鑑於前兩者各有利弊，「梅竹黑客松」應運而生，
                        這次活動的開發主題皆由活躍於業界的企業所建議，開發主題的大方向與市場接軌
                        同時來自不同企業，各自提供獨家技術與資源，輔助參加者開發作品，
                        兼顧發想的自由空間與提案本身的市場可行性。參賽者可以發揮所長，
                        藉著企業的協助實現創意，並能和企業先進面對面交流想法。
                        而負責決定主題與引導的企業，不僅能挖掘人才，也同時藉此刺激自身一同創新思考。
                        </p>
                    </div>
                </div>
                <div class="content_1">
                    <div class="partical">
                        <h1>參加梅竹黑客松的好處</h1>
                        <p>此活動是與企業合作出資源(硬體或API等)的方式進行，參加者能與企業在第一線接觸交流，並且提升其技術力。
                        只要完整參與兩天一夜的活動，一律授予梅竹黑客松專屬紀念品和活動參與證書！
                        另外，主辦單位將據依當天參與者的整體表現，選出幾組表現優秀隊伍 (視報名人數情況調整)額外頒授獎勵。
                        除此之外，主辦單位亦將甄選出UI/UX表現優秀的隊伍另外頒予獎勵。</p>
                    </div>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Intro/>,document.getElementById('intro'))
ReactDOM.render( <Top/>, document.getElementById("top"));
ReactDOM.render( <Selection_b/>, document.getElementById("Bar"));
