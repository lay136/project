import React, { Component } from 'react'
import Simditor from 'simditor'

//用jQ携带登录信息
import $ from 'jquery'


import 'simditor/styles/simditor.css'


class RichEditor extends Component {
	constructor(props) {
        super(props)
        this.state = {
            isLoaded:false
        }
        this.toolbar = [
            'title',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontScale',
            'color',
            'ol',
            'ul',
            'blockquote',
            'code',
            'table',
            'link',
            'image',
            'hr',
            'indent',
            'outdent',
            'alignment',
        ]
        //发送请求,携带登录信息
        $.ajaxSetup({
            xhrFields:{
                withCredentials:true
            }
        })
    }
    componentDidMount() {
        this.editor = new Simditor({
            textarea: this.textarea,
            toolbar: this.toolbar,
            upload:{
                url:this.props.url,
                fileKey:'upload'
            }
        })
        this.editor.on('valuechanged',()=>{
            this.setState({isLoaded:true},()=>{
                this.props.getValues(this.editor.getValue())
            })
        })
    }
	render() {
	        return (
	            <textarea ref={(textarea)=>{this.textarea=textarea}} ></textarea>
	        )
	    }
}


export default RichEditor
