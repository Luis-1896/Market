import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

/**
 * Methods to add or get a product
 */
@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  /**
   * @param  angularfirestore - To add or get a product
   * @param  storage - To add in Firebase storage a image
   */
  constructor(private angularfirestore:AngularFirestore, private storage: AngularFireStorage) { }
/**
 * Get all products
 */
getAllGoods(){
 return this.angularfirestore.collection('goods').snapshotChanges();
}
/**
 * @param  {string} name To add name
 * @param  {Number} price To add price
 * @param  {File} image To add image
 * @returns A new product add in firebase storage and firebase database
 */
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
