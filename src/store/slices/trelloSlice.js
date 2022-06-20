import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buttons: [{
        name:'button',
        id:1
    }],
}

const trelloSlice = createSlice({
    name:'trello',
    initialState,
    reducers:{
        addButton(state, action){
            state.buttons.pop()
            state.buttons.push(action.payload)
        },
        addbt(state,action){
            state.buttons.push(action.payload)
        },
        delButton(state, action){
            state.buttons = state.buttons.filter(item=>{
                if(item.id !== action.payload.id){
                    return [item]
                }
            })
        },
        addTitle(state,action){
            state.buttons.find(item=>{
                if(item.id === action.payload.id){
                    item.title = action.payload.title
                }
            })
        },
        changeTitle(state, action){
            state.buttons.find(item=>{
                if(item.id === action.payload.id){
                    item.changeTitle = !item.changeTitle
                }
            })
        },
        addToList(state,action){
            state.buttons.find(item=>{
                if(item.id===action.payload.id){
                    item.lists.push(action.payload.list)
                }
            })
        },
        delList(state, action){
            state.buttons.find(item=>{
                if(item.id === action.payload.columnId){
                    item.lists = item.lists.filter(el=>{
                        if(el.id !== action.payload.listId){
                            return [el]
                        }
                    })
                }
            })
        },
        addDescription(state,action){
            state.buttons.find(item=>{
                if(item.id === action.payload.columnId){
                    item.lists.find(el=>{
                        if(el.id === action.payload.listId){
                            el.description = action.payload.descriptions
                        }
                    })
                }
            })
        },
        showModal(state,action){
            state.buttons.find(item=>{
                if(item.id === action.payload.columnId){
                    item.lists.find(el=>{
                        if(el.id === action.payload.listId){
                            el.showModal = !el.showModal
                        }
                    })
                }
            })
        }
    }
})

export const trelloActions = trelloSlice.actions
export default trelloSlice