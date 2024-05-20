import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = [
    {
      id : 1,
      name: 'Nike React Infinity Run Flyknit',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'NIKE',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 3,
      slug : 'Nike React Infinity Run Flyknit',
      imageURL : "/src/assets/Images/shoes/nike/custom-reactx-infinity-rn-4-by-you.jpg",
      productType : 'Shoes'
    },
    {
      id : 2,
      name: 'Nike Air max 270',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'NIKE',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 13,
      slug : 'Nike Air max 270',
      imageURL : "/src/assets/Images/shoes/nike/air-max-270-shoes-vjpNZc.jpg",
      productType : 'Shoes'
    },
    {
      id : 3,
      name: 'Nike Air Max DN',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'NIKE',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 3,
      slug : 'Nike Air Max DN',
      imageURL : "/src/assets/Images/shoes/nike/air-max-dn-shoes-FtLNfm.png",
      productType : 'Shoes'
    },
    {
      id : 4,
      name: 'Nike Air Max plus 3',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'NIKE',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 3,
      slug : 'Nike Air Max plus 3',
      imageURL : "/src/assets/Images/shoes/nike/air-max-plus-3-shoes-HtMt7V.png",
      productType : 'Shoes'
    },
    {
      id : 5,
      name: 'Nike Motiva walking',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'NIKE',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 23,
      slug : 'Nike Motiva walking',
      imageURL : "/src/assets/Images/shoes/nike/motiva-walking-shoes-Fjzkq7.jpg",
      productType : 'Shoes'
    },
    {
      id : 6,
      name: 'Nike Pegasus 41 Road Running',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'NIKE',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 14,
      slug : 'Nike Pegasus 41 Road Running',
      imageURL : "/src/assets/Images/shoes/nike/pegasus-41-road-running-shoes-RZm89S.jpg",
      productType : 'Shoes'
    },
    {
      id : 7,
      name: 'Nike wio Road Running',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'NIKE',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 8,
      slug : 'Nike wio Road Running',
      imageURL : "/src/assets/Images/shoes/nike/wio-11-road-running-shoes-2SNS3P.jpg",
      productType : 'Shoes'
    },
    {
      id : 8,
      name: 'Puma Exotech-Nitro',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'PUMA',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 19,
      slug : 'Puma Exotech-Nitro',
      imageURL : "/src/assets/Images/shoes/puma/Exotek-NITRO™-Base-Unisex-Sneakers.png",
      productType : 'Shoes'
    },
    {
      id : 9,
      name: 'Puma Conduct Pro Unisex',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'Puma',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 3,
      slug : 'Puma Conduct Pro Unisex',
      imageURL : "/src/assets/Images/shoes/puma/Conduct Pro Unisex Running Shoes.png",
      productType : 'Shoes'
    },
    {
      id : 10,
      name: 'Puma Deviate NITRO™ 2',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'PUMA',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 3,
      slug : 'Puma Deviate NITRO™ 2',
      imageURL : "/src/assets/Images/shoes/puma/Deviate NITRO™ 2 Men's Running Shoes.png",
      productType : 'Shoes'
    },
    {
      id : 11,
      name: 'PUMA Evoke Layup',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'PUMA',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 24,
      slug : 'PUMA Evoke Layup',
      imageURL : "/src/assets/Images/shoes/puma/PUMA Evoke Layup Men's Sneakers.jpg",
      productType : 'Shoes'
    },
    {
      id : 12,
      name: 'Puma ForeverRun NITRO™',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'Puma',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 15,
      slug : 'Puma ForeverRun NITRO™',
      imageURL : "/src/assets/Images/shoes/puma/Puma ForeverRun NITRO™ Men's Running Shoes.png",
      productType : 'Shoes'
    },
    {
      id : 13,
      name: 'Puma SOFTRIDE Symmetry Unisex',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'PUMA',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 5000,
      isInInventory : true,
      itemLeft : 11,
      slug : 'Puma SOFTRIDE Symmetry Unisex',
      imageURL : "/src/assets/Images/shoes/puma/Puma SOFTRIDE Symmetry Unisex Running Shoes.png",
      productType : 'Shoes'
    }
      ]
}
