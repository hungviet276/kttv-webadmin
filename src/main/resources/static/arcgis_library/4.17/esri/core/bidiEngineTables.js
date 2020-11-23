// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,f){Object.defineProperty(f,"__esModule",{value:!0});f.UnicodeTable=f.PrimaryTable=f.TBBASE=f.TYPES_NAMES=f.UBAT_BN=f.UBAT_RLO=f.UBAT_LRO=f.UBAT_PDF=f.UBAT_RLE=f.UBAT_LRE=f.UBAT_NSM=f.UBAT_ET=f.UBAT_ES=f.UBAT_CS=f.UBAT_WS=f.UBAT_AL=f.UBAT_S=f.UBAT_B=f.UBAT_ON=f.UBAT_AN=f.UBAT_EN=f.UBAT_R=f.UBAT_L=f.impTabRtl=f.impTabLtr=f.ArabicAlefBetIntervalsEnd=f.ArabicAlefBetIntervalsBegine=f.FETo06Table=f.StandAlonForm=f.InitialForm=f.MedialForm=f.FinalForm=f.IsolatedForm=
f.BaseForm=f.LamAlefMedialTableFE=f.LamAlefInialTableFE=f.AlefTable=f.SwapTable=void 0;f.SwapTable=[["(",")"],[")","("],["\x3c","\x3e"],["\x3e","\x3c"],["[","]"],["]","["],["{","}"],["}","{"],["\u00ab","\u00bb"],["\u00bb","\u00ab"],["\u2039","\u203a"],["\u203a","\u2039"],["\u207d","\u207e"],["\u207e","\u207d"],["\u208d","\u208e"],["\u208e","\u208d"],["\u2264","\u2265"],["\u2265","\u2264"],["\u2329","\u232a"],["\u232a","\u2329"],["\ufe59","\ufe5a"],["\ufe5a","\ufe59"],["\ufe5b","\ufe5c"],["\ufe5c",
"\ufe5b"],["\ufe5d","\ufe5e"],["\ufe5e","\ufe5d"],["\ufe64","\ufe65"],["\ufe65","\ufe64"]];f.AlefTable=["\u0622","\u0623","\u0625","\u0627"];f.LamAlefInialTableFE=["\ufef5","\ufef7","\ufef9","\ufefb"];f.LamAlefMedialTableFE=["\ufef6","\ufef8","\ufefa","\ufefc"];f.BaseForm="\u0627\u0628\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064a\u0625\u0623\u0622\u0629\u0649\u0644\u0645\u0646\u0647\u0648\u064a\u0625\u0623\u0622\u0629\u0649\u06cc\u0626\u0624".split("");
f.IsolatedForm="\ufe8d\ufe8f\ufe95\ufe99\ufe9d\ufea1\ufea5\ufea9\ufeab\ufead\ufeaf\ufeb1\ufeb5\ufeb9\ufebd\ufec1\ufec5\ufec9\ufecd\ufed1\ufed5\ufed9\ufedd\ufee1\ufee5\ufee9\ufeed\ufef1\ufe87\ufe83\ufe81\ufe93\ufeef\ufbfc\ufe89\ufe85\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80\ufe89\ufe85".split("");f.FinalForm="\ufe8e\ufe90\ufe96\ufe9a\ufe9e\ufea2\ufea6\ufeaa\ufeac\ufeae\ufeb0\ufeb2\ufeb6\ufeba\ufebe\ufec2\ufec6\ufeca\ufece\ufed2\ufed6\ufeda\ufede\ufee2\ufee6\ufeea\ufeee\ufef2\ufe88\ufe84\ufe82\ufe94\ufef0\ufbfd\ufe8a\ufe86\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80\ufe8a\ufe86".split("");
f.MedialForm="\ufe8e\ufe92\ufe98\ufe9c\ufea0\ufea4\ufea8\ufeaa\ufeac\ufeae\ufeb0\ufeb4\ufeb8\ufebc\ufec0\ufec4\ufec8\ufecc\ufed0\ufed4\ufed8\ufedc\ufee0\ufee4\ufee8\ufeec\ufeee\ufef4\ufe88\ufe84\ufe82\ufe94\ufef0\ufbff\ufe8c\ufe86\ufe71\ufe72\ufe74\ufe77\ufe79\ufe7b\ufe7d\ufe7f\ufe80\ufe8c\ufe86".split("");f.InitialForm="\ufe8d\ufe91\ufe97\ufe9b\ufe9f\ufea3\ufea7\ufea9\ufeab\ufead\ufeaf\ufeb3\ufeb7\ufebb\ufebf\ufec3\ufec7\ufecb\ufecf\ufed3\ufed7\ufedb\ufedf\ufee3\ufee7\ufeeb\ufeed\ufef3\ufe87\ufe83\ufe81\ufe93\ufeef\ufbfe\ufe8b\ufe85\ufe70\ufe72\ufe74\ufe76\ufe78\ufe7a\ufe7c\ufe7e\ufe80\ufe8b\ufe85".split("");
f.StandAlonForm="\u0621\u0622\u0623\u0624\u0625\u0627\u0629\u062f\u0630\u0631\u0632\u0648\u0649".split("");f.FETo06Table="\u064b\u064b\u064c\u061f\u064d\u061f\u064e\u064e\u064f\u064f\u0650\u0650\u0651\u0651\u0652\u0652\u0621\u0622\u0622\u0623\u0623\u0624\u0624\u0625\u0625\u0626\u0626\u0626\u0626\u0627\u0627\u0628\u0628\u0628\u0628\u0629\u0629\u062a\u062a\u062a\u062a\u062b\u062b\u062b\u062b\u062c\u062c\u062c\u062c\u062d\u062d\u062d\u062d\u062e\u062e\u062e\u062e\u062f\u062f\u0630\u0630\u0631\u0631\u0632\u0632\u0633\u0633\u0633\u0633\u0634\u0634\u0634\u0634\u0635\u0635\u0635\u0635\u0636\u0636\u0636\u0636\u0637\u0637\u0637\u0637\u0638\u0638\u0638\u0638\u0639\u0639\u0639\u0639\u063a\u063a\u063a\u063a\u0641\u0641\u0641\u0641\u0642\u0642\u0642\u0642\u0643\u0643\u0643\u0643\u0644\u0644\u0644\u0644\u0645\u0645\u0645\u0645\u0646\u0646\u0646\u0646\u0647\u0647\u0647\u0647\u0648\u0648\u0649\u0649\u064a\u064a\u064a\u064a\ufef5\ufef6\ufef7\ufef8\ufef9\ufefa\ufefb\ufefc\u061f\u061f\u061f".split("");
f.ArabicAlefBetIntervalsBegine=["\u0621","\u0641"];f.ArabicAlefBetIntervalsEnd=["\u063a","\u064a"];f.impTabLtr=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]];f.impTabRtl=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]];f.UBAT_L=0;f.UBAT_R=1;f.UBAT_EN=2;f.UBAT_AN=3;f.UBAT_ON=4;f.UBAT_B=5;f.UBAT_S=6;f.UBAT_AL=7;f.UBAT_WS=8;f.UBAT_CS=9;f.UBAT_ES=10;f.UBAT_ET=11;f.UBAT_NSM=12;f.UBAT_LRE=13;f.UBAT_RLE=14;f.UBAT_PDF=15;f.UBAT_LRO=16;
f.UBAT_RLO=17;f.UBAT_BN=18;f.TYPES_NAMES="UBAT_L UBAT_R UBAT_EN UBAT_AN UBAT_ON UBAT_B UBAT_S UBAT_AL UBAT_WS UBAT_CS UBAT_ES UBAT_ET UBAT_NSM UBAT_LRE UBAT_RLE UBAT_PDF UBAT_LRO UBAT_RLO UBAT_BN".split(" ");f.TBBASE=100;c=f.UBAT_L;var e=f.UBAT_R,k=f.UBAT_EN,l=f.UBAT_AN,a=f.UBAT_ON,q=f.UBAT_B,r=f.UBAT_S,b=f.UBAT_AL,m=f.UBAT_WS,n=f.UBAT_CS,p=f.UBAT_ES,h=f.UBAT_ET,d=f.UBAT_NSM,t=f.UBAT_LRE,u=f.UBAT_RLE,v=f.UBAT_PDF,w=f.UBAT_LRO,x=f.UBAT_RLO,g=f.UBAT_BN;f.PrimaryTable=[f.TBBASE+0,c,c,c,c,f.TBBASE+1,
f.TBBASE+2,f.TBBASE+3,e,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,f.TBBASE+4,a,a,a,c,a,c,a,c,a,a,a,c,c,a,a,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,c,c,a,a,c,c,a,a,c,c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,
a,a,a,a,a,c,c,c,f.TBBASE+5,b,b,f.TBBASE+6,f.TBBASE+7];f.UnicodeTable=[[g,g,g,g,g,g,g,g,g,r,q,r,m,q,g,g,g,g,g,g,g,g,g,g,g,g,g,g,q,q,q,r,m,a,a,h,h,h,a,a,a,a,a,p,n,p,n,n,k,k,k,k,k,k,k,k,k,k,n,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,g,g,g,g,g,g,q,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,n,a,h,h,h,h,a,a,a,a,c,a,a,g,a,a,h,h,k,k,a,c,a,a,a,k,c,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,
a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,c,c,c,c,c,c,c],[c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,c,c,c,c,c,c,c,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,c,a,a,a,a,a,a,a,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,e,d,e,d,d,e,d,d,e,d,a,a,a,a,a,a,a,a,e,
e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,a,a,a,a,a,e,e,e,e,e,a,a,a,a,a,a,a,a,a,a,a],[l,l,l,l,a,a,a,a,b,h,h,b,n,b,a,a,d,d,d,d,d,d,d,d,d,d,d,b,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,l,l,l,l,l,l,l,l,l,l,h,l,l,b,b,b,d,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,l,a,d,d,d,d,d,d,b,b,d,d,a,d,d,d,d,b,b,k,k,k,k,k,k,k,k,k,k,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,b,b,d,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,d,d,d,d,d,d,d,d,d,d,d,b,a,a,a,a,a,a,a,a,a,a,a,a,a,a,e,e,e,e,e,
e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,d,d,d,d,d,d,d,d,d,e,e,a,a,a,a,e,a,a,a,a,a],[m,m,m,m,m,m,m,m,m,m,m,g,g,g,c,e,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,m,q,t,u,v,w,x,n,h,h,h,h,h,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,n,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,m,g,g,g,g,g,a,a,a,a,a,g,g,g,g,g,g,k,c,a,a,k,k,k,k,k,k,p,p,a,a,a,c,k,k,k,k,k,k,k,k,k,k,p,p,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,a,a,a,a,a,
a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,a,a,a,a,a,e,d,e,e,e,e,e,e,e,e,e,e,p,e,e,e,e,e,e,e,e,e,e,e,e,e,a,e,e,e,e,e,a,e,a,e,e,a,e,e,a,e,e,e,e,e,e,e,e,e,e,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,d,d,d,d,d,d,d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,n,a,n,a,a,n,a,a,a,a,a,a,a,a,a,h,a,a,p,p,a,a,a,a,a,h,h,a,a,a,a,a,b,b,b,b,b,a,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,
b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,a,a,g],[a,a,a,h,h,h,a,a,a,a,a,p,n,p,n,n,k,k,k,k,k,k,k,k,k,k,n,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,a,a,a,a,a,a,a,a,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,
c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,a,a,a,c,c,c,c,c,c,a,a,c,c,c,c,c,c,a,a,c,c,c,c,c,c,a,a,c,c,c,a,a,a,h,h,a,a,a,h,h,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a]]});