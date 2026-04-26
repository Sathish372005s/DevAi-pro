import { create } from "zustand";

export const usechatstore = create((set,get)=>({
  chats:[],
  activechatid : null,

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

  //store for the chat is finished

  addchat : (text) =>{
    const {activechatid} =get()
    if(!activechatid){
      return "there is no chat "
    }
    let newmessage ={
      id:Date.now(),
      textmsg : text,
      createdat : new Date
    };

    set(state => ({
      chats: state.chats.map(c => c.id == activechatid ? {...c,messages:[...c.messages,newmessage]} : c)
    }))

  }

}))


