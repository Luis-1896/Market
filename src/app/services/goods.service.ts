import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private angularfirestore:AngularFirestore, private storage: AngularFireStorage) { }

getAllGoods(){
 return this.angularfirestore.collection('goods').snapshotChanges();
}

addNewGood( name: string, price: Number, image: File){
  return new Promise ((resolve, reject)=>{
    let ref=this.storage.ref('goods/'+image.name)
        ref.put(image).then(()=>{
          ref.getDownloadURL().subscribe(photoUrl=>{
            this.angularfirestore.collection('goods').add({
              name,
              price,
              photoUrl
            }).then(()=>resolve('hello')) 
           })
        })
  })
}

}
