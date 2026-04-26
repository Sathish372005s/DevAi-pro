import { create } from "zustand";

export const usechatstore = create((set,get)=>({
  chats:[],
  activechatid : null,
  aimsg :"this from the ai",
  editmsgid:null,
  delemsgid:null,
  iseditingmsg:false,
  isdeleting:false,

  createchat : () =>{
    const newchat = {
      id : Date.now().toString(),
      title:"newchat",
      messages:[]
    }

    set((state) => ({
      chats : [...state.chats,newchat],
      activechatid:newchat.id
    }))
  },

  setactivechatid: (chatid) =>{
    set((state)=>({
      activechatid:chatid
    }))
  },

  deletechatid : (chatid) =>{
    set(state =>{
      const filtered = state.chats.filter(c =>c.id != chatid)
      return {
        chats:filtered,
        activechatid : filtered.length ? filtered[0].id :null
      }
    })
  },

  updatechat : (chatid,newtitle) =>{
    set((state)=>({
      chats:state.chats.map(c => c.id == chatid ? {...c,title:newtitle} : c)
    }))
  },

  

  addchat : (text, sender = "you") =>{
    const {activechatid} =get()
    if(!activechatid){
      return "there is no chat "
    }
    let newmessage ={
      id:Date.now(),
      textmsg : text,
      sender: sender,
      createdAt: Date.now()
    };

    set(state => ({
      chats: state.chats.map(c => c.id == activechatid ? {...c,messages:[...c.messages,newmessage]} : c)
    }))

  },

  startedit : (msgid) =>{
    set({
      editmsgid:msgid,
      iseditingmsg:true
    })
  },

  editmessage: (msgid,newtext) =>{
    const {activechatid} = get()
    set(state => ({
      chats : state.chats.map(c => c.id == activechatid ? {...c,messages:c.messages.map(m => m.id == msgid ? {...m,textmsg:newtext} : m)} : c),
      iseditingmsg:false
    }))
  },

  stopedit:()=>{
    set({
      editmsgid : null,
      iseditingmsg : false
    })
  },

  startdelete : (msgid) =>{
    set({
      delemsgid:msgid,
      isdeleting:true
    })
  },

  stopdelete : () =>{
    set({
      delemsgid:null,
      isdeleting:false
    })
  },

  deletemsg : (msgid) =>{
    set(state => ({
      chats : state.chats.map(c => c.id == state.activechatid ? {...c,messages:c.messages.filter(m => m.id != msgid)} : c),
      isdeleting:false
    }))
  }

}))

