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
      price : 15999,
      isInInventory : true,
      itemLeft : 3,
      slug : 'Nike React Infinity Run Flyknit',
      imageURL : "/assets/Images/shoes/nike/custom-reactx-infinity-rn-4-by-you.png",
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
      price : 11999,
      isInInventory : true,
      itemLeft : 13,
      slug : 'Nike Air max 270',
      imageURL : "/assets/Images/shoes/nike/air-max-270-shoes.png",
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
      price : 18000,
      isInInventory : true,
      itemLeft : 3,
      slug : 'Nike Air Max DN',
      imageURL : "/assets/Images/shoes/nike/air-max-dn-shoes.png",
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
      price : 14000,
      isInInventory : true,
      itemLeft : 3,
      slug : 'Nike Air Max plus 3',
      imageURL : "/assets/Images/shoes/nike/air-max-plus-3-shoes.png",
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
      price : 15499,
      isInInventory : true,
      itemLeft : 23,
      slug : 'Nike Motiva walking',
      imageURL : "/assets/Images/shoes/nike/Nike Motiva walking.png",
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
      price : 17500,
      isInInventory : true,
      itemLeft : 14,
      slug : 'Nike Pegasus 41 Road Running',
      imageURL : "/assets/Images/shoes/nike/Nike pegasus 41.png",
      productType : 'Shoes'
    },
    {
      id : 7,
      name: 'Nike Court Vapor 11 Premium',
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
      price : 19000,
      isInInventory : true,
      itemLeft : 8,
      slug : 'Nike Court Vapor 11 Premium',
      imageURL : "/assets/Images/shoes/nike/NikeCourt Vapor 11 Premium.png",
      productType : 'Shoes'
    },
    {
      id : 8,
      name: 'Nike invincible-3',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec massa quis nisi convallis porttitor. Duis eget ultrices nisi. Donec ut volutpat velit, eget dapibus nulla."+
      "Sed at nisi id nisi aliquam aliquet. Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper."+
      "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. "+
      "Cum sociis natoque penatibus et magnis dis parturient montes. Nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam."+
      "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.",
      brand : 'Nike',
      gender : 'Men',
      category : 'Running',
      size : [6,7,8,9,10],
      color : ['White','Black','Red','Blue'],
      price : 19999,
      isInInventory : true,
      itemLeft : 19,
      slug : 'Nike invincible-3',
      imageURL : "/assets/Images/shoes/nike/invincible-3-road-running.png",
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
      imageURL : "/assets/Images/shoes/puma/Conduct Pro Unisex Running Shoes.png",
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
      imageURL : "/assets/Images/shoes/puma/Deviate NITRO™ 2 Men's Running Shoes.png",
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
      imageURL : "/assets/Images/shoes/puma/Puma Evoke Layup.png",
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
      imageURL : "/assets/Images/shoes/puma/Puma ForeverRun NITRO™ Men's Running Shoes.png",
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
      imageURL : "/assets/Images/shoes/puma/Puma SOFTRIDE Symmetry Unisex Running Shoes.png",
      productType : 'Shoes'
    }
      ];

}
