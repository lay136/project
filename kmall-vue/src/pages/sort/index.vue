<template>
	<div id="Sort">
		<van-sticky>
			<Search />
		</van-sticky>
		<van-row class='sidebar'>
			<van-col span="6">
				<van-sidebar v-model="activeKey" class='sidebar-left' >
					<van-sidebar-item 
						class='sidebar-item' 
						v-for="(item,index) in this.$store.state.sort.sidebar" 
						:key="''+index" 
						:title='item.name'
						@click='handleContent(item._id)'
					/>
				</van-sidebar>
			</van-col>
			<van-col span="18" class="sidebar-icon" >
				<div class="child-item" v-for="(item,index) in this.$store.state.sort.categories" :key="''+index" >
					<img :src="item.icon">
					<p>{{item.name}}</p>
				</div>
			</van-col>
		</van-row>
	</div>
</template>

<script>
	import Search from 'components/search/index.vue'
	import { GET_CATEGORIES,GET_NOTE_CATEGORIES } from './store/types.js'
	export default {
		name:'Sort',
		mounted(){
			var _this = this
			//加载侧边栏
			this.$store.dispatch(GET_CATEGORIES)
			.then(()=>{
				// console.log(_this.$store.state.sort.sidebar)
				_this.$store.dispatch(GET_NOTE_CATEGORIES,_this.$store.state.sort.sidebar[0]._id);
			})
			// this.$store.dispatch(GET_NOTE_CATEGORIES,this.$store.state);
		},
		components: {
			Search
		},
		data() {
			return {
				activeKey: 0,
			};
		},
		methods:{
			handleContent(pid){
				this.$store.dispatch(GET_NOTE_CATEGORIES,pid);
			}
		}
		
	}
</script>

<style scoped lang="less">
	#Sort{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #fff;
		.sidebar{
			.sidebar-icon{
				width: 33.3%;
				text-align: center;
				.child-item{
					img{
						width: 2rem;
						height: 2rem;
					}
					p{
						font-size: .375rem;
						font-weight: 400;
					}
				}
				
			}
		}
		
	}
</style>
