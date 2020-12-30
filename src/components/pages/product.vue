<template>
<div>
<loading :active.sync="isLoading"></loading>
<div class="text-right">
<button class="btn btn-info" @click="openModal(true)">建立新的產品</button>
</div>
<table class="table mt-4">
<thead>
<tr>
<th>分類</th>
<th>產品名稱</th>
<th>原價</th>
<th>售價</th>
<th>是否啟用</th>
<th>編輯</th>
<th>刪除</th>
</tr>
</thead>
<tbody>
<tr v-for="(item,key) in products" :key="key">
<td>{{item.category}}</td>
<td>{{item.title}}</td>
<td class="text-right">{{item.origin_price}}</td>
<td class="text-right">{{item.price}}</td>
<td>
<span v-if="item.is_enabled" class="text-success">啟用</span>
<span v-else >未啟用</span>
</td>
<td>
<button class="btn btn-outline-secondary btn-sm" @click="openModal(false,item)">編輯</button>
</td>
<td>
<button class="btn btn-outline-danger btn-sm"@click="deleteModal(item)">刪除</button>
</td>
</tr>
</tbody>


</table>
<!--分頁-->
 <pagination :pages="pagination" @turnPage="getProducts"></pagination>
<!--modal-->
<div class="modal fade" id="creatNewModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>新增產品</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label for="image">輸入圖片網址</label>
              <input type="text" class="form-control" id="image"
                placeholder="請輸入圖片連結"v-model="tempProduct.imageUrl">
            </div>
            <div class="form-group">
              <label for="customFile">或 上傳圖片
                <i class="fas fa-spinner fa-spin" v-if="status.fileupLoading"></i>
              </label>
              <input type="file" id="customFile" class="form-control"
                ref="files" @change="uploadFile">
            </div>
            <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
              class="img-fluid" :src="tempProduct.imageUrl" alt="">
          </div>
          <div class="col-sm-8">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title"
                placeholder="請輸入標題"v-model="tempProduct.title">
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="category">分類</label>
                <input type="text" class="form-control" id="category"
                  placeholder="請輸入分類"v-model="tempProduct.category">
              </div>
              <div class="form-group col-md-6">
                <label for="price">單位</label>
                <input type="unit" class="form-control" id="unit"
                  placeholder="請輸入單位"v-model="tempProduct.unit">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
              <label for="origin_price">原價</label>
                <input type="number" class="form-control" id="origin_price"
                  placeholder="請輸入原價"v-model="tempProduct.origin_price">
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價</label>
                <input type="number" class="form-control" id="price"
                  placeholder="請輸入售價"v-model="tempProduct.price">
              </div>
            </div>
            <hr>

            <div class="form-group">
              <label for="description">產品描述</label>
              <textarea type="text" class="form-control" id="description"
                placeholder="請輸入產品描述"v-model="tempProduct.description"></textarea>
            </div>
            <div class="form-group">
              <label for="content">說明內容</label>
              <textarea type="text" class="form-control" id="content"
                placeholder="請輸入產品說明內容"v-model="tempProduct.content"></textarea>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"
                  id="is_enabled"v-model="tempProduct.is_enabled"
                  :true-value="1"
                  :false-value="0">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger" @click="creatnewproduct">確認</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>刪除產品</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger"
          >確認刪除</button>
      </div>
    </div>
  </div>
</div>
<!--刪除-->
<div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h5 class="modal-title text-white" id="exampleModalLabel">確認刪除</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
       <div class="modal-body">
        是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
        <button type="button" class="btn btn-danger" @click="confirmDelete">確認</button>
      </div>
    </div>
  </div>
</div>





</div>
</template>
<script>
import $ from 'jquery'
import pagination from '@/components/Pagination'
export default {
  components:{
    pagination
  },
    data() {
        return {
            products:[],
            tempProduct:{},
            isNew:false,
            isLoading: false,
            status:{
              fileupLoading:false,
            },
            pagination:{},
               }
    },
    methods: {
        //取得商品資料
        getProducts(page=1){
            const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/admin/products?page=${page}`;
             const vm = this;
             vm.isLoading = true;
            this.$http.get(api).then((response) => {
            
            vm.isLoading = false;
            vm.products = response.data.products;
            vm.pagination = response.data.pagination;
            
          });
        },
        //建立新商品(按下確認送出鍵)
        creatnewproduct(){
         let api = `${process.env.APIPATH}/api/${process.env.MEPATH}/admin/product`;
         let http = 'post';
             const vm = this;
             if(!vm.isNew){
                api = `${process.env.APIPATH}/api/${process.env.MEPATH}/admin/product/${vm.tempProduct.id}`;
                http = 'put';
             }
            this.$http[http](api,{data:vm.tempProduct}).then((response) => {
            
            if(response.data.success){
             $('#creatNewModal').modal('hide');
              this.getProducts();
            }else{
                console.log('新增失敗0');
            }
           
           
            
          });
        },
        //刪除modal
        deleteModal(item){
         const vm = this;
         vm.tempProduct = item;
             $('#deleteModal').modal('show');
        },
        confirmDelete(){
          const vm = this;
          vm.isLoading=true;
          const api = `${process.env.APIPATH}/api/${process.env.MEPATH}/admin/product/${vm.tempProduct.id}`;
           this.$http.delete(api).then((response) => {
            
            if(response.data.success){
              vm.isLoading=false;
              $('#deleteModal').modal('hide');
              vm.getProducts();
            }else{
              console.log(response.data)
            }
           
            
          });

        },
        //編輯或建立新產品的modal
        openModal(isNew,item){
           
            if(isNew){
                this.tempProduct={};
                this.isNew = true;
            }else{
                this.tempProduct = Object.assign({},item);
                this.isNew = false;
            }
             $('#creatNewModal').modal('show')
        },
        //上傳圖片
        uploadFile(){
       console.log(this);
       const uploadFile = this.$refs.files.files[0];
       this.status.fileupLoading = true;
       const formData = new FormData();
       formData.append('file-to-upload',uploadFile);
       const url = `${process.env.APIPATH}/api/${process.env.MEPATH}/admin/upload`;
        this.$http.post(url,formData,{
          headers:{
            'Content-Type':'multipart/form-data',
          }
        }).then((response) => {
            
            this.status.fileupLoading = false;
            if(response.data.success){
              
              this.$set(this.tempProduct,'imageUrl',response.data.imageUrl);
            }else{
              this.$bus.$emit('s',response.data.message,'danger');
            }
           
           
           
            
          });
        },
    },
    created() {
        this.getProducts();
    },
}
</script>