let imgs = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c902140d-c3e1-4c7b-a043-1a913bd5257e/d2sh51c-b14e0c3d-54b0-411f-aace-cd145eca9ed8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5MDIxNDBkLWMzZTEtNGM3Yi1hMDQzLTFhOTEzYmQ1MjU3ZVwvZDJzaDUxYy1iMTRlMGMzZC01NGIwLTQxMWYtYWFjZS1jZDE0NWVjYTllZDguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XJVGxS4sXlYy5X2TXZCTvJvM08LV4-KWoU6iwgVorQw","https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c902140d-c3e1-4c7b-a043-1a913bd5257e/d1wsv6u-4a52be82-65a7-4ee0-8be4-93f8f4a6ee3e.jpg/v1/fill/w_600,h_800,q_70,strp/lider_fantasma_by_ennima_d1wsv6u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvYzkwMjE0MGQtYzNlMS00YzdiLWEwNDMtMWE5MTNiZDUyNTdlXC9kMXdzdjZ1LTRhNTJiZTgyLTY1YTctNGVlMC04YmU0LTkzZjhmNGE2ZWUzZS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.amMBDohFj_oy4jG4Gro1a9F27_N68CFK1OgKN7yVJZ4",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c902140d-c3e1-4c7b-a043-1a913bd5257e/d1vwvxx-3b0518d8-8a6d-42b4-9ec3-6c08a554cc37.jpg/v1/fill/w_600,h_825,q_70,strp/norein_candy_by_ennima_d1vwvxx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODI1IiwicGF0aCI6IlwvZlwvYzkwMjE0MGQtYzNlMS00YzdiLWEwNDMtMWE5MTNiZDUyNTdlXC9kMXZ3dnh4LTNiMDUxOGQ4LThhNmQtNDJiNC05ZWMzLTZjMDhhNTU0Y2MzNy5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.zJ40_FWMJb5kaPRpnJM-436NLydt2cOVeo96JI9Dn-g",
           "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c902140d-c3e1-4c7b-a043-1a913bd5257e/d21axah-f3633b6d-48e2-48b5-ab10-dad6a2d7bae8.jpg/v1/fill/w_600,h_768,q_70,strp/eothar_color_ennima2_by_ennima_d21axah-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvYzkwMjE0MGQtYzNlMS00YzdiLWEwNDMtMWE5MTNiZDUyNTdlXC9kMjFheGFoLWYzNjMzYjZkLTQ4ZTItNDhiNS1hYjEwLWRhZDZhMmQ3YmFlOC5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.NsYfuRJPPvr30MAIvv1wygrNXvPoa4kQkHLBS2ZO4hM",
           "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c902140d-c3e1-4c7b-a043-1a913bd5257e/d21awvl-7cbbc916-2c90-49db-bcde-ad2e84bfff6e.jpg/v1/fill/w_600,h_768,q_70,strp/eotar_color_ennima1_by_ennima_d21awvl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvYzkwMjE0MGQtYzNlMS00YzdiLWEwNDMtMWE5MTNiZDUyNTdlXC9kMjFhd3ZsLTdjYmJjOTE2LTJjOTAtNDlkYi1iY2RlLWFkMmU4NGJmZmY2ZS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FHPeJ9GDGHTXLUASOiGV-VvJtXGTUz1dat98DkAYN1Q",
           "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c902140d-c3e1-4c7b-a043-1a913bd5257e/d2rmaqo-19f531a6-b888-4c9c-ae68-800dc7173d87.jpg/v1/fill/w_900,h_1125,q_70,strp/kirahime__no_me_delates__by_ennima_d2rmaqo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEyNSIsInBhdGgiOiJcL2ZcL2M5MDIxNDBkLWMzZTEtNGM3Yi1hMDQzLTFhOTEzYmQ1MjU3ZVwvZDJybWFxby0xOWY1MzFhNi1iODg4LTRjOWMtYWU2OC04MDBkYzcxNzNkODcuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8vVtxKbZXkdzm_Gk8Z_zwp0sFk31hN33VP-zE5dRCQU"]

let cards = [
  {
    "title":"Card 1",
    "img":imgs[0],
    "description":"Cosa 1"
  },
  {
    "title":"Hola",
    "img":imgs[1],
    "description":"LALALA"
  },
  {
    "title":"BEBE",
    "img":imgs[2],
    "description":"Cosa 2"
  },
  {
    "title":"MOLE",
    "img":imgs[1],
    "description":"mmm"
  },
  {
    "title":"xxx",
    "img":imgs[2],
    "description":"yomi"
  },
  {
    "title":"apple",
    "img":imgs[0],
    "description":"wow"
  }
  ,
  {
    "title":"MOLss",
    "img":imgs[1],
    "description":"mmm"
  },
  {
    "title":"fff",
    "img":imgs[2],
    "description":"yomi"
  },
  {
    "title":"eee",
    "img":imgs[0],
    "description":"wow"
  }
];



var app = new Vue({
  el: '#app',
  data: {
    slides: 0,
    active: 1,
    active_items: [],
    slide_items: cards,
    items_by_slide: 2,
    slider_direction:"animated slide-out-active-left",

  },
  mounted(){
    console.log("Slider mounted");
    this.getSlidesNumber();
    this.getCurrentItems();
  },
  methods: {
    move(amount) {
      if(amount < 0){
        this.slider_direction="animated slide-out-active-right";
      }else{
        this.slider_direction="animated slide-out-active-left";
      }

      let newActive
      const newIndex = this.active + amount
      if (newIndex > this.slides) newActive = 1
      if (newIndex === 0) newActive = this.slides
      this.active = newActive || newIndex
      this.getCurrentItems()
    },
    jump(index) {
      this.active = index
    },
    addSlide() {
      this.slides = this.slides + 1
    },
    removeSlide() {
      this.slides = this.slides - 1
    },
    getSlidesNumber(){
      this.slides = Math.ceil(this.slide_items.length / this.items_by_slide)
    },
    getCurrentItems(){
      let begin_on = (this.active - 1) * this.items_by_slide;
      this.active_items = [];

      let i = 0;
      for(i = 1; i <= this.items_by_slide; i++){
        let new_item = begin_on+i;
        if(new_item > this.slide_items.length){
          break;
        }else{
          this.active_items.push(new_item-1);
        }
      }

    }
  },
  computed: {
            img_section_style: function(){

                return {
                    '--bg-hover-color': 'url('+this.imgs[this.active]+')',
                    "background": 'rgba(255,255,255,0.3)'
                }
            },
},
	props: {
    bg: { type: String, default: "red", required: false },
    bgHover: { type: String, default: "inherit", required: false },
    title: { type: String, default: "(Untitled)", required: false },
  }

})
