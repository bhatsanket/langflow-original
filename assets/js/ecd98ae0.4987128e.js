"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1456],{5882:(e,t,n)=>{n.r(t),n.d(t,{CH:()=>l,assets:()=>a,chCodeConfig:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=n(4848),i=n(8453),o=n(4754);const s={title:"Quickstart",sidebar_position:2,slug:"/getting-started-quickstart"},c=void 0,d={id:"Getting-Started/getting-started-quickstart",title:"Quickstart",description:"Prerequisites",source:"@site/docs/Getting-Started/getting-started-quickstart.md",sourceDirName:"Getting-Started",slug:"/getting-started-quickstart",permalink:"/getting-started-quickstart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quickstart",sidebar_position:2,slug:"/getting-started-quickstart"},sidebar:"defaultSidebar",previous:{title:"Install Langflow",permalink:"/getting-started-installation"},next:{title:"Basic Prompting",permalink:"/starter-projects-basic-prompting"}},a={},l={annotations:o.hk,Code:o.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Prerequisites",id:"b5f154a3a1d242c7bdf57acf0a552732",level:2},{value:"Create the basic prompting flow",id:"create-the-basic-prompting-flow",level:2},{value:"Run the Basic Prompting flow",id:"ef0e8283bfb646f99bbb825462d8cbab",level:2},{value:"Modify the prompt for a different result",id:"dcea9df0cd51434db76717c78b1e9a94",level:2},{value:"Next steps",id:"63b6db6cb571489c86b3ae89051f1a4f",level:2}];function g(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return l||f("CH",!1),l.Code||f("CH.Code",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,r.jsx)(t.h2,{id:"b5f154a3a1d242c7bdf57acf0a552732",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.python.org/downloads/release/python-3100/",children:"Python 3.10 to 3.12"})," installed"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://pypi.org/project/pip/",children:"pip"}),"\xa0or\xa0",(0,r.jsx)(t.a,{href:"https://pipx.pypa.io/stable/installation/",children:"pipx"})," installed"]}),"\n",(0,r.jsxs)(t.li,{children:["Before installing Langflow, we recommend creating a virtual environment to isolate your Python dependencies with ",(0,r.jsx)(t.a,{href:"https://docs.python.org/3/library/venv.html",children:"venv"})," or ",(0,r.jsx)(t.a,{href:"https://anaconda.org/anaconda/conda",children:"conda"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"create-the-basic-prompting-flow",children:"Create the basic prompting flow"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["From the Langflow dashboard, click\xa0",(0,r.jsx)(t.strong,{children:"New Flow"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Select\xa0",(0,r.jsx)(t.strong,{children:"Basic Prompting"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["The\xa0",(0,r.jsx)(t.strong,{children:"Basic Prompting"}),"\xa0flow is created."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(4005).A+"",width:"2874",height:"966"})}),"\n",(0,r.jsxs)(t.p,{children:["This flow allows you to chat with the\xa0",(0,r.jsx)(t.strong,{children:"OpenAI"}),"\xa0component through the\xa0",(0,r.jsx)(t.strong,{children:"Prompt"}),"\xa0component."]}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["To examine the flow's ",(0,r.jsx)(t.strong,{children:"Prompt"}),"\xa0component, click on the ",(0,r.jsx)(t.strong,{children:"Template"}),"\xa0field of the ",(0,r.jsx)(t.strong,{children:"Prompt"})," component."]}),"\n"]}),"\n",(0,r.jsx)(l.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"Answer the user as if you were a pirate.",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"User: {user_input}",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"Answer:",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,r.jsxs)(t.p,{children:["The\xa0",(0,r.jsx)(t.strong,{children:"Template"}),"\xa0instructs the LLM to accept ",(0,r.jsx)(t.code,{children:"{user_input}"})," and\xa0",(0,r.jsx)(t.code,{children:"Answer the user as if you were a pirate."}),"."]}),"\n",(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["To create an environment variable for the\xa0",(0,r.jsx)(t.strong,{children:"OpenAI"}),"\xa0component, in the\xa0",(0,r.jsx)(t.strong,{children:"OpenAI API Key"}),"\xa0field, click the\xa0",(0,r.jsx)(t.strong,{children:"Globe"}),"\xa0button, and then click\xa0",(0,r.jsx)(t.strong,{children:"Add New Variable"}),"."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["In the\xa0",(0,r.jsx)(t.strong,{children:"Variable Name"}),"\xa0field, enter\xa0",(0,r.jsx)(t.code,{children:"openai_api_key"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["In the\xa0",(0,r.jsx)(t.strong,{children:"Value"}),"\xa0field, paste your OpenAI API Key (",(0,r.jsx)(t.code,{children:"sk-..."}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["Click\xa0",(0,r.jsx)(t.strong,{children:"Save Variable"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"ef0e8283bfb646f99bbb825462d8cbab",children:"Run the Basic Prompting flow"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["To open the ",(0,r.jsx)(t.strong,{children:"Playground"})," pane, click ",(0,r.jsx)(t.strong,{children:"Playground"}),".\nThis is where you can interact with your AI."]}),"\n",(0,r.jsx)(t.li,{children:"Type a message and press Enter. The bot should respond in a markedly piratical manner!"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"dcea9df0cd51434db76717c78b1e9a94",children:"Modify the prompt for a different result"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["To modify your prompt results, in the\xa0",(0,r.jsx)(t.strong,{children:"Prompt"}),"\xa0template, click the\xa0",(0,r.jsx)(t.strong,{children:"Template"}),"\xa0field. The\xa0",(0,r.jsx)(t.strong,{children:"Edit Prompt"}),"\xa0window opens."]}),"\n",(0,r.jsxs)(t.li,{children:["Change\xa0",(0,r.jsx)(t.code,{children:"Answer the user as if you were a pirate"}),"\xa0to a different character, perhaps\xa0",(0,r.jsx)(t.code,{children:"Answer the user as if you were Hermione Granger."})]}),"\n",(0,r.jsx)(t.li,{children:"Run the workflow again. The response will be very different."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"63b6db6cb571489c86b3ae89051f1a4f",children:"Next steps"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"Well done! You've built your first prompt in Langflow. \ud83c\udf89"}),"\n",(0,r.jsx)(t.p,{children:"By dragging Langflow components to your workspace, you can create all sorts of interesting behaviors. Here are a couple of examples:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/starter-projects-memory-chatbot",children:"Memory Chatbot"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/starter-projects-blog-writer",children:"Blog Writer"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/starter-projects-document-qa",children:"Document QA"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4005:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/starter-flow-basic-prompting-40917cdcd3e69dcb5ed1a611df982d06.png"}}]);