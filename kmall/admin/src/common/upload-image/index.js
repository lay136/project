import React, { Component } from 'react'
import { Upload, Icon, Modal } from 'antd'


class UploadImage extends Component {
	constructor(props){
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
        }
        this.handleCancel = this.handleCancel.bind(this)
        this.handlePreview = this.handlePreview.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
	handleCancel(){
        this.setState({ previewVisible: false })
    }
    handlePreview(file){
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        })
    }
	handleChange({ fileList }){
		//上传图片
		// this.setState({ fileList })
		this.setState({ fileList },()=>{
			// console.log(fileList)
            this.props.getFileList(fileList.map(file=>{
                if(file.response){
                    return file.response.url
                }
            }).join(','))
        })
	} 
	render() {
		const { previewVisible, previewImage, fileList } = this.state;
        const { max,action } = this.props
	    const uploadButton = (
		    <div>
		        <Icon type="plus" />
		        <div className="ant-upload-text">上传图片</div>
		    </div>
	    )
		return (
			<div className="clearfix">
		        <Upload
					action={action}
					listType="picture-card"
					fileList={fileList}
                  	withCredentials={true}
					onPreview={this.handlePreview}
					onChange={this.handleChange}
		        >
		          	{ fileList.length >= max ? null : uploadButton }
		        </Upload>
		        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
		          	<img alt="example" style={{ width: '100%' }} src={previewImage} />
		        </Modal>
	      	</div>
		)
	}
}

export default UploadImage