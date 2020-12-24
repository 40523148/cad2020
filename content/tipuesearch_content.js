var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Topics', 'text': '', 'tags': '', 'url': 'Topics.html'}, {'title': '更改網誌', 'text': '1 建立一個倉儲(公開) \n 2 Setting中設為master branch \n 3 clone 網址到隨身碟( https://127.0.0.1:9443 這種，上一步產生的) \n *網站有了，增加內容 \n 4再資料夾(tmp)中建(cad2020) \n 5 git clone 這個網址 \n 6 cd cad2020\xa0 \n 7 git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 8到資料夾，找到up_dir，把內容Ctrl A到\\cad2020 \n (第9步起就是更改網頁) \n 9 python wsgi.py (啟動python) \n 10然後複製因為前一步產生的新網址，Ctrl C到Google看看 \n 11修改後一定要記得generate page \n (回到cmd) \n 12 cd.. \n 13 git add . (add和點點中間一定要記得空白) \n 14 git commit -m "你要附註的東西" \n 15 git push,帳號密碼 \n', 'tags': '', 'url': '更改網誌.html'}, {'title': 'HW1', 'text': '練習一 \n http://mde.tw/cad2020/downloads/Solidworks%20%E9%9B%B6%E4%BB%B6%E7%B9%AA%E5%9C%96%E7%B7%B4%E7%BF%921.pdf \n \n \n 01 \n https://cad.onshape.com/documents/588f7c02a86df4bbf4f06cbd/w/cd43f2d5891b854802129283/e/cb2fdb7a67dd10ed62d3acff \n \n 02 \n https://cad.onshape.com/documents/63b5fbb9fa0708c497d8c9a1/w/524843f974c944f488c434d6/e/8ccd69c4e8771c8f176b31db \n \n 03 \n https://cad.onshape.com/documents/c2d3a9d408e7679dee0a33a0/w/3cdc5bb1c8dfc4212729739d/e/cb5f70fd530ee962274a773f \n \n 04 \n https://cad.onshape.com/documents/b3a44ff36ebaaf9c1acbfdb9/w/ffa975ac1fb5ae525edbd388/e/176ede0b09f5754c55c56672 \n \n 05 \n https://cad.onshape.com/documents/f8ae4583ef3f1fc7c66526d3/w/8f743929cd8a2cb361fea348/e/f24c11c899ee11347c20f5c7 \n \n 06 \n https://cad.onshape.com/documents/aaaff9d52742993334e76585/w/0dc1fd86f0f5fb60df10702c/e/54b8ddc871b2fd626268054f \n \n 07 \n https://cad.onshape.com/documents/34cc02b845cb9a408428af70/w/fc886b488d1be6b2f4dfe953/e/93fb74829a928499fe2f2fa1 \n \n 08 \n https://cad.onshape.com/documents/7074fb3bb377bb841ac36b66/w/00e3b2b1d51c14ce0ba58ffd/e/ea5707eef9dfcdb8fe0b2039 \n \n 09 \n https://cad.onshape.com/documents/36072d51131a59c20f9e1669/w/95a5410dda15dcab6233fcae/e/789e3cd2fa6616c49e74fe02 \n \n 10 \n https://cad.onshape.com/documents/893ef1af2126be45fb2e3c32/w/b0fa387a8d3a47fd79aa7e5e/e/e130697cfc829c2503c4ceb4 \n \n 11 \n https://cad.onshape.com/documents/75aa181e5f05caef462ad530/w/5df88d34e4cfac8ccc899ac1/e/f7e43adaa1a1322c5fba0669 \n \n 12 \n https://cad.onshape.com/documents/16f7666bdd527cd637207b01/w/12c8dafc5a4aa9280712cb0c/e/287da730ba262e453070fbc4 \n \n 13 \n https://cad.onshape.com/documents/de47d3f290097db43c317acb/w/45c2eb11203258632cbdb6db/e/c0373594dd0f926a4b3408f7 \n \n 14 \n https://cad.onshape.com/documents/1bda508d4e05c719ba475880/w/71f292d44fe9566cac9fcc18/e/ed677c6f527a55552ec8ea7b \n \n 15 \n https://cad.onshape.com/documents/274c6473d5ddaa1df5906b06/w/2bc6a0912e2ad9986ece20d3/e/1d5421e1ceef3cb6950c70e6 \n \n 16 \n https://cad.onshape.com/documents/e2924405d939295f57b2a0a3/w/114841a876628a8dcfc16cae/e/5ba4251b099f447c826aeee9 \n \n 17 \n https://cad.onshape.com/documents/69f946d798b4e6857ef4b4d4/w/6c66e297669e64bf5b95f19c/e/d7552c81db28d3ef6e5c471d \n \n 18 \n https://cad.onshape.com/documents/9b9bc8944515b6485fdd2c89/w/0c338eba9e595ccdfd913f3b/e/3f2d2980732506e7f7f6369f \n \n 19 \n https://cad.onshape.com/documents/20ad55509944ef3c3b55850f/w/ee6007b72fffc994cd723d4e/e/b7d994ba89a7f609ca2ee137 \n \n 20 \n https://cad.onshape.com/documents/96bace00589febf1347777c9/w/3878702cf784d0ab8943f1c9/e/9e78d3ce0e50903cf274d7ce \n \n 21 \n https://cad.onshape.com/documents/49a36505a536ff3133810d6c/w/249e4eb417ea7b5e5453bd99/e/a539b39951d24aadcfd89a95 \n \n 22 \n https://cad.onshape.com/documents/9b281c86a328e528e75f2b0f/w/6bb80cc1566e55b6e7822ee4/e/d3e29aca53668f48c0bbc34c \n \n 23 \n https://cad.onshape.com/documents/847408f8df822468e663f1fa/w/352808b747969c1183f14b52/e/a6f21f04ee4ea44866d38e1d \n \n \n \n \n 練習二 \n http://mde.tw/cad2020/downloads/Solidworks%20%E9%9B%B6%E4%BB%B6%E7%B9%AA%E5%9C%96%E7%B7%B4%E7%BF%922.pdf \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'Engineering 工程', 'text': 'Engineer \xa0工程師 \n Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines, complex systems, structures, gadgets and materials to fulfill functional objectives and requirements while considering the limitations imposed by practicality, regulation, safety and cost. \n 工程師，作為工程從業者，是專業人員，他們在研究實用性，法規，安全性和成本的限制的同時，發明，設計，分析，建造和測試機器，複雜的系統，結構，小工具和材料，以實現功能目標和要求。 \n \n The word engineer (Latin ingeniator) is derived from the Latin words ingeniare ("to create, generate, contrive, devise") and ingenium ("cleverness"). \n 工程師（Latin engeniator）一詞源自拉丁語ingeniare（“創造，生成，嘗試，設計”）和ingenium（“聰明”）。 \n The foundational qualifications of an engineer typically include a four-year bachelor\'s degree in an engineering discipline, or in some jurisdictions, a master\'s degree in an engineering discipline plus four to six years of peer-reviewed professional practice (culminating in a project report or thesis) and passage of engineering board examinations. \n 工程師的基本資格通常包括工程學科的四年制學士學位，或在某些轄區，工程學科的碩士學位以及四到六年的同行評審專業實踐（最終形成項目報告或論文） ）並通過工程委員會考試。 \n The work of engineers forms the link between scientific discoveries and their subsequent applications to human and business needs and quality of life. \n 工程師的工作構成了科學發現及其對人類和企業需求以及生活質量的後續應用之間的聯繫。 \n The following paragraph cited from "An Introduction to Mechanical Engineering, Third Edition Jonathan Wickert and Kemper E. Lewis", pp. 4-5, 2013 \n 以下段落引自“機械工程概論，第三版Jonathan Wickert和Kemper E. Lewis”，第4-5頁，2013年 \n \n The word "engineering" derives from the Latin root ingeniere, meaning to design or to devise, which also forms the basis of the word "ingenious." \n “工程”一詞源自拉丁語詞根創新，意為設計或設計，這也構成了“精髓”一詞的基礎。 \n \n Those meanings are quite appropriate summaries of the traits of a good engineer. \n 這些含義是對優秀工程師特質的恰當概括。 \n \n At the most fundamental level, engineers apply their knowledge of mathematics, science, and materials—as well as their skills in communications and business—to develop new and better technologies. \n 在最基本的層面上，工程師運用其在數學，科學和材料方面的知識以及他們在通信和商務方面的技能，來開發新的更好的技術。 \n \n Rather than experiment solely through trial and error, engineers are educated to use mathematics, scientific principles, and computer simulations as tools to create faster, more accurate, and more economical designs. \n 不僅要通過反複試驗來進行實驗，還應教育工程師使用數學，科學原理和計算機模擬作為工具來創建更快，更準確和更經濟的設計。 \n \n In that sense, the work of an engineer differs from that of a scientist, who would normally emphasize the discovery of physical laws rather than apply those phenomena to develop new products. \n 從這個意義上講，工程師的工作不同於科學家的工作，科學家通常會強調發現物理定律，而不是將這些現象應用於開發新產品。 \n \n Engineering is essentially a bridge between scientific discovery and product applications. \n 工程本質上是科學發現與產品應用之間的橋樑。 \n \n Engineering does not exist for the sake of furthering or applying mathematics, science, and computation by themselves. \n 工程本身並不是為了進一步發展或應用數學，科學和計算而設計的。 \n Rather, engineering is a driver of social and economic growth and an integral part of the business cycle. \n 而是，工程技術是社會和經濟增長的驅動力，也是商業周期的組成部分。 \n With that perspective, the U.S. Department of Labor summarizes the engineering profession as follows: \n 從這一角度出發，美國勞工部將工程專業總結如下： \n \n Engineers apply the theories and principles of science and mathematics to research and develop economical solutions to technical problems. \n 工程師運用科學和數學的理論和原理來研究和開發技術問題的經濟解決方案。 \n Their work is the link between perceived social needs and commercial applications. \n 他們的工作是感知的社會需求與商業應用之間的聯繫。 \n \n Engineers design products, machinery to build those products, plants in which those products are made, and the systems that ensure the quality of the products and the efficiency of the workforce and manufacturing process. \n 工程師設計產品，製造這些產品的機械，製造這些產品的工廠以及確保產品質量以及勞動力和製造過程效率的系統。 \n \n Engineers design, plan, and supervise the construction of buildings, highways, and transit systems. \n 工程師設計，規劃和監督建築物，公路和運輸系統的建設。 \n They develop and implement improved ways to extract, process, and use raw materials, such as petroleum and natural gas. \n 他們開發並實施了改進的方法來提取，加工和使用石油和天然氣等原材料。 \n They develop new materials that both improve the performance of products and take advantage of advances in technology. \n 他們開發新的材料，既可以改善產品的性能，又可以利用技術的進步。 \n They harness the power of the sun, the Earth, atoms, and electricity for use in supplying the Nation’s power needs, and create millions of products using power. \n 他們利用太陽，地球，原子和電力的力量來滿足國家的電力需求，並利用電力創造數百萬種產品。 \n They analyze the impact of the products they develop or the systems they design on the environment and on people using them. \n 他們分析開發的產品或設計的系統對環境和使用它們的人的影響。 \n Engineering knowledge is applied to improving many things, including the quality of healthcare, the safety of food products, and the operation of financial systems. \n 工程知識可用於改善許多方面，包括醫療保健質量，食品安全性和金融系統的運作。 \n \n cited from Figure 2.4 - Flowchart of the prototypical mechanical design process ( "An Introduction to Mechanical Engineering, Third Edition Jonathan Wickert and Kemper E. Lewis", pp. 41, 2013) \n 引用自圖2.4-原型機械設計過程的流程圖（ “機械工程概論，第三版Jonathan Wickert和Kemper E. Lewis”，2013年，第41頁） \n \n', 'tags': '', 'url': 'Engineering 工程.html'}, {'title': 'Terminology 術語', 'text': 'Entrepreneurship \xa0創業精神 \n Requirements Development \xa0 ( Requirements DevelopmentRequirements Development Steps.pdf ) \n 需求開發(Requirements DevelopmentRequires Development Steps.pdf) \n \n ( System Engineering Process Overiew ) (系統工程概論) \n Recognize needs\xa0 認識需求 \n Recognizing the Need for Information ( source ) \n 認識到對信息的需求（來源 ） \n Education requires the ability to adapt, problem solve, and think critically about challenges that arise in your classes and career. \n 教育需要具有適應能力，解決問題的能力，並能認真思考在課程和職業中出現的挑戰。 \n  An educated person can recognize an opportunity to learn and make the most of it. \n 受過良好教育的人可以認識到學習和充分利用的機會。 An important skill to acquire is the ability to acknowledge when you don’t know something and decide what to do about it. \n 要獲得的一項重要技能是能夠在不了解某項內容時進行確認並決定如何處理。 \n In other words, it’s valuable to approach an assignment by asking, \n 換句話說，通過詢問 \xa0\xa0\xa0 “What do I already know about this?” \xa0\xa0\xa0 “What do I want to know?” \xa0\xa0\xa0 “How do I find the information I need?” \xa0\xa0\xa0 “我已經知道了什麼？”來完成任務很有價值。 \xa0\xa0\xa0 “我想知道什麼？” \xa0\xa0\xa0 “我如何找到所需的信息？” Beyond that, you’ll be able to ask, \n 除此之外，您還可以問： \xa0\xa0\xa0 “Where will I find the best information to fit my needs?” \xa0\xa0\xa0 “How will I know it when I see it?” \xa0\xa0\xa0 “What do I do with it once I have it?” \n \xa0\xa0\xa0 “我在哪裡可以找到最適合我需要的信息？” \xa0\xa0\xa0 “看到後我怎麼知道？” \xa0\xa0\xa0 “一旦擁有它我該怎麼辦？” All of these questions together are a part of a concept called “Information Literacy,” which you’ll learn about, practice, and apply as you work through these six modules. \n 所有這些問題都是“信息素養”概念的一部分，當您通過這六個模塊學習時，您將學習，實踐和應用這些知識。 \n In this first module, you’ll learn how to recognize the need for information and how to plan for a successful inquiry. \n 在第一個模塊中，您將學習如何識別信息需求以及如何計劃成功的詢問。 \n Understanding these concepts will prepare you to approach later modules – about finding and using information – with a clear sense of purpose. \n 理解這些概念將使您以明確的目的來準備以後的模塊（有關查找和使用信息）。 \n \xa0 \n Identify problems \xa0 找出問題 \n \n Define requirements\xa0 定義要求 \n \n Conceptual Design\xa0 概念設計 \n \n Generate innovative concepts\xa0 產生創新概念 \n \n Brainstorming\xa0 集思廣益 \n \n The 5W+H methods (What, Why, When, Who, Where + How) \n 5W + H方法（什麼，為什麼，何時，誰，在哪里以及如何做） \n \n Reverse thinking\xa0 逆向思維 \n \n Using analogies\xa0 使用類比 \n \n Social Listening\xa0 社會傾聽 \n \n Role playing\xa0 角色扮演 \n \n Mind mapping\xa0 思維導圖 \n \n Concept generating \xa0 概念產生 \n \n TRIZ \xa0 (Teoriya Resheniya Izobretatelskikh Zadatch, Theory of Inventive Problem Solving) \n TRIZ （Teoriya Resheniya Izobretatelskikh Zadatch，創造性解決問題的理論） \n \n Select best concepts\xa0 選擇最佳概念 \n \n Detailed Design\xa0 詳細設計 \n \n Prduct layout :\xa0A product layout is where the equipment, tools, and machines are located according to how a product is made. \n 產品佈局 ：產品佈局是根據產品的製造方式放置設備，工具和機器的位置。 \n \n Material selection\xa0 材料選擇 \n \n System simulation\xa0 系統仿真 \n \n Prototype and tesing\xa0 原型和測試 \n \n Design documentation\xa0 設計文件 \n \n Production\xa0 生產 \n \n Type of Manufacturing\xa0 製造類型 \n \n Production volume\xa0 生產量 \n Supplier selection 供應商選擇 \n Intro_to_engineering.pdf \n Kinematics_ kinetics_dynamics_inertia.pdf \n Intro_to_mechanics.pdf \n engineering_mechanics.pdf \n Intro_to_kinematics_and_dynamics.pdf \n Engineering (工程) \n involves the design and analysis of machines \n 涉及機器的設計和分析 \n Engineering (工程): 牽涉機器的設計與分析 \n Machine (機器) \n deal with the conversion of energy from one source to another using the basic principles of science \n 使用科學的基本原理處理能量從一種來源到另一種來源的轉化 \n Machine (機器):\xa0 牽涉運用科學基本原理將能量從源頭轉化為另一種(作用) \n Mechanics (力學) \n a branch of physical science that deals with energy and forces and their effect on bodies\xa0(Merriam-Webster Dictionary) \n 物理學的一個分支，涉及能量和力及其對人體的影響（Merriam-Webster詞典） \n      Mechanics(力學):  物理學的一個分支, 牽涉(研究)能量及作用力對物體所造成的影響 \n contains three major subbranches: kinematics, statics, and kinetics \n 包含三個主要子分支：運動學，靜力學和動力學 \n Mechanics (力學): 包括三個主要分支- 運動學, 靜力學與動理學 \n Kinematics (運動學) \n deals with the study of relative motion \n 處理相對運動的研究 \n Kinematics(運動學):\xa0 涉及相對運動的研究 \n a branch of dynamics that deals with aspects of motion apart from considerations of mass and force\xa0(Merriam-Webster Dictionary) \n 動力學的分支，除了質量和力的考慮之外，還處理運動的各個方面（Merriam-Webster詞典） \n Kinematics (運動學): 動力學的一個分支, 涉及運動有關的探討, \xa0 但並不涉及質量與力 \n Statics (靜力學) \n Statics(靜力學):\xa0 study of forces and moments apart from motion\xa0\xa0 研究運動以外的力和力矩 \n Statics (靜力學):\xa0 研究力, 力矩與運動(之間的關係) \n Kinetics (動理學) \n Kinetics (動理學):\xa0 deals with the result of forces and moments on bodies\xa0\xa0 研究運動以外的力和力矩 \n Kinetics (動理學):\xa0 研究力與力矩對物體造成的結果 \n a branch of science that deals with the effects of forces upon the motions of material bodies or with changes in a physical or chemical system (Merriam-Webster Dictionary) \n 科學的一個分支，涉及力對物質運動或物理或化學系統變化的影響（Merriam-Webster詞典） \n Kinetics(動理學):\xa0 科學的一個分支, 涉及力對物質運動以及物理或化學系統變化所造成的影響 \n Dynamics (動力學) = Kinematics (運動學) + Kinetics (動理學) \n Dynamics(動力學):\xa0 deals with the study of motion caused by forces and torque\xa0\xa0 研究由力和扭矩引起的運動 \n Dynamics(動力學):\xa0 研究力與扭矩所造成的運動 \n a branch of mechanics\xa0 that deals with forces and their relation primarily to the motion but sometimes also to the equilibrium\xa0 of bodies\xa0(Merriam-Webster Dictionary) \n 力學的一個分支，\xa0 主要處理力及其與運動的關係，有時還涉及 物體 的平衡\xa0 （Merriam-Webster詞典） \n Dynamics(動力學):  力學的一個分支, 主要處理力及其與運動的關係, 有時並涉及物體的平衡 \n Mechanism design (機構設計) \n the desired motion is known and the task is to determine the type of mechanism along with the required forces and torques to produce the desired motion \n 已知所需的運動, (設計)任務是確定機構的類型以及所需的力和扭矩得以產生所需的運動', 'tags': '', 'url': 'Terminology 術語.html'}]};