import{_ as e,c as t,d as o,o as a,r as i}from"./app-BtAI08y8.js";const l={};function s(p,d){const n=i("VueFlow");return a(),t("div",null,[o(n,{type:"nodeflow-comfyui",data:`{
  "last_node_id": 29,
  "last_link_id": 84,
  "nodes": [
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 432,
        "1": 158
      },
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 81,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            4
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "closeup photograph of maine coon (cat:1.2) in the yosemite national park mountains nature"
      ]
    },
    {
      "id": 7,
      "type": "CLIPTextEncode",
      "pos": {
        "0": 434,
        "1": 371
      },
      "size": {
        "0": 425.27801513671875,
        "1": 180.6060791015625
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 82,
          "label": "CLIP"
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            6
          ],
          "slot_index": 0,
          "label": "条件"
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "watermark, text\\n"
      ]
    },
    {
      "id": 26,
      "type": "VAEEncodeForInpaint",
      "pos": {
        "0": 503,
        "1": 669
      },
      "size": {
        "0": 210,
        "1": 98
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "pixels",
          "type": "IMAGE",
          "link": 73,
          "label": "图像"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 83,
          "label": "VAE"
        },
        {
          "name": "mask",
          "type": "MASK",
          "link": 79,
          "label": "遮罩"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            72
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEEncodeForInpaint"
      },
      "widgets_values": [
        6
      ]
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": {
        "0": 1422,
        "1": 387
      },
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 42,
          "label": "Latent"
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 84,
          "label": "VAE"
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            22
          ],
          "slot_index": 0,
          "label": "图像"
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      },
      "widgets_values": []
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": {
        "0": 1709,
        "1": 356
      },
      "size": {
        "0": 210,
        "1": 250
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 22,
          "label": "图像"
        }
      ],
      "outputs": [],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 29,
      "type": "CheckpointLoaderSimple",
      "pos": {
        "0": 30,
        "1": 314
      },
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            80
          ],
          "slot_index": 0,
          "label": "模型"
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            81,
            82
          ],
          "slot_index": 1,
          "label": "CLIP"
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            83,
            84
          ],
          "slot_index": 2,
          "label": "VAE"
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderSimple"
      },
      "widgets_values": [
        "512-inpainting-ema.safetensors"
      ]
    },
    {
      "id": 20,
      "type": "LoadImage",
      "pos": {
        "0": 49,
        "1": 679
      },
      "size": {
        "0": 385,
        "1": 365
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "inputs": [],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            73
          ],
          "slot_index": 0,
          "label": "图像"
        },
        {
          "name": "MASK",
          "type": "MASK",
          "links": [
            79
          ],
          "slot_index": 1,
          "label": "遮罩"
        }
      ],
      "properties": {
        "Node name for S&R": "LoadImage"
      },
      "widgets_values": [
        "yosemite_inpaint_example.png",
        "image"
      ]
    },
    {
      "id": 3,
      "type": "KSampler",
      "pos": {
        "0": 940,
        "1": 180
      },
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 80,
          "label": "模型"
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 4,
          "label": "正面条件"
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 6,
          "label": "负面条件"
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 72,
          "label": "Latent"
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            42
          ],
          "slot_index": 0,
          "label": "Latent"
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        1040111309094545,
        "randomize",
        20,
        8,
        "uni_pc_bh2",
        "normal",
        1
      ]
    }
  ],
  "links": [
    [
      4,
      6,
      0,
      3,
      1,
      "CONDITIONING"
    ],
    [
      6,
      7,
      0,
      3,
      2,
      "CONDITIONING"
    ],
    [
      22,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      42,
      3,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      72,
      26,
      0,
      3,
      3,
      "LATENT"
    ],
    [
      73,
      20,
      0,
      26,
      0,
      "IMAGE"
    ],
    [
      79,
      20,
      1,
      26,
      2,
      "MASK"
    ],
    [
      80,
      29,
      0,
      3,
      0,
      "MODEL"
    ],
    [
      81,
      29,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      82,
      29,
      1,
      7,
      0,
      "CLIP"
    ],
    [
      83,
      29,
      2,
      26,
      1,
      "VAE"
    ],
    [
      84,
      29,
      2,
      8,
      1,
      "VAE"
    ]
  ],
  "groups": [
    {
      "title": "Load image and alpha mask for inpainting",
      "bounding": [
        -20,
        607,
        786,
        442
      ],
      "color": "#3f789e",
      "font_size": 24,
      "flags": {}
    }
  ],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.9849732675807633,
      "offset": [
        284.2721369485341,
        36.00902976378898
      ]
    }
  },
  "version": 0.4
}
`})])}const r=e(l,[["render",s],["__file","局部重绘1_猫.json.html.vue"]]),I=JSON.parse('{"path":"/ComfyUI_examples/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%981_%E7%8C%AB.json","title":"","lang":"zh-CN","frontmatter":{"description":"{ \\"last_node_id\\": 29, \\"last_link_id\\": 84, \\"nodes\\": [ { \\"id\\": 6, \\"type\\": \\"CLIPTextEncode\\", \\"pos\\": { \\"0\\": 432, \\"1\\": 158 }, \\"size\\": { \\"0\\": 422.84503173828125, \\"1\\": 164.313049316406...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/ComfyUI-Workflows-Linc/ComfyUI_examples/%E5%B1%80%E9%83%A8%E9%87%8D%E7%BB%981_%E7%8C%AB.json"}],["meta",{"property":"og:site_name","content":"ComfyUI-Workflows-Linc"}],["meta",{"property":"og:description","content":"{ \\"last_node_id\\": 29, \\"last_link_id\\": 84, \\"nodes\\": [ { \\"id\\": 6, \\"type\\": \\"CLIPTextEncode\\", \\"pos\\": { \\"0\\": 432, \\"1\\": 158 }, \\"size\\": { \\"0\\": 422.84503173828125, \\"1\\": 164.313049316406..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-20T05:40:43.000Z"}],["meta",{"property":"article:author","content":"LincDocs"}],["meta",{"property":"article:modified_time","content":"2025-01-20T05:40:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-20T05:40:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/ComfyUI-Workflows-Linc/\\"}]}"]],"layout":"Layout"},"headers":[],"git":{"createdTime":1737351643000,"updatedTime":1737351643000,"contributors":[{"name":"Linc","email":"762699299@qq.com","commits":1}]},"readingTime":{"minutes":1.93,"words":578},"filePathRelative":"ComfyUI_examples/局部重绘1_猫.json","localizedDate":"2025年1月20日","excerpt":"<p>{\\n\\"last_node_id\\": 29,\\n\\"last_link_id\\": 84,\\n\\"nodes\\": [\\n{\\n\\"id\\": 6,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 432,\\n\\"1\\": 158\\n},\\n\\"size\\": {\\n\\"0\\": 422.84503173828125,\\n\\"1\\": 164.31304931640625\\n},\\n\\"flags\\": {},\\n\\"order\\": 2,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 81,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n4\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"closeup photograph of maine coon (cat:1.2) in the yosemite national park mountains nature\\"\\n]\\n},\\n{\\n\\"id\\": 7,\\n\\"type\\": \\"CLIPTextEncode\\",\\n\\"pos\\": {\\n\\"0\\": 434,\\n\\"1\\": 371\\n},\\n\\"size\\": {\\n\\"0\\": 425.27801513671875,\\n\\"1\\": 180.6060791015625\\n},\\n\\"flags\\": {},\\n\\"order\\": 3,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"clip\\",\\n\\"type\\": \\"CLIP\\",\\n\\"link\\": 82,\\n\\"label\\": \\"CLIP\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"CONDITIONING\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"links\\": [\\n6\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"条件\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CLIPTextEncode\\"\\n},\\n\\"widgets_values\\": [\\n\\"watermark, text\\\\n\\"\\n]\\n},\\n{\\n\\"id\\": 26,\\n\\"type\\": \\"VAEEncodeForInpaint\\",\\n\\"pos\\": {\\n\\"0\\": 503,\\n\\"1\\": 669\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 4,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"pixels\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 73,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 83,\\n\\"label\\": \\"VAE\\"\\n},\\n{\\n\\"name\\": \\"mask\\",\\n\\"type\\": \\"MASK\\",\\n\\"link\\": 79,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n72\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEEncodeForInpaint\\"\\n},\\n\\"widgets_values\\": [\\n6\\n]\\n},\\n{\\n\\"id\\": 8,\\n\\"type\\": \\"VAEDecode\\",\\n\\"pos\\": {\\n\\"0\\": 1422,\\n\\"1\\": 387\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 46\\n},\\n\\"flags\\": {},\\n\\"order\\": 6,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"samples\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 42,\\n\\"label\\": \\"Latent\\"\\n},\\n{\\n\\"name\\": \\"vae\\",\\n\\"type\\": \\"VAE\\",\\n\\"link\\": 84,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n22\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"VAEDecode\\"\\n},\\n\\"widgets_values\\": []\\n},\\n{\\n\\"id\\": 9,\\n\\"type\\": \\"SaveImage\\",\\n\\"pos\\": {\\n\\"0\\": 1709,\\n\\"1\\": 356\\n},\\n\\"size\\": {\\n\\"0\\": 210,\\n\\"1\\": 250\\n},\\n\\"flags\\": {},\\n\\"order\\": 7,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"images\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"link\\": 22,\\n\\"label\\": \\"图像\\"\\n}\\n],\\n\\"outputs\\": [],\\n\\"properties\\": {},\\n\\"widgets_values\\": [\\n\\"ComfyUI\\"\\n]\\n},\\n{\\n\\"id\\": 29,\\n\\"type\\": \\"CheckpointLoaderSimple\\",\\n\\"pos\\": {\\n\\"0\\": 30,\\n\\"1\\": 314\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 98\\n},\\n\\"flags\\": {},\\n\\"order\\": 0,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"MODEL\\",\\n\\"type\\": \\"MODEL\\",\\n\\"links\\": [\\n80\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"CLIP\\",\\n\\"type\\": \\"CLIP\\",\\n\\"links\\": [\\n81,\\n82\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"CLIP\\"\\n},\\n{\\n\\"name\\": \\"VAE\\",\\n\\"type\\": \\"VAE\\",\\n\\"links\\": [\\n83,\\n84\\n],\\n\\"slot_index\\": 2,\\n\\"label\\": \\"VAE\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"CheckpointLoaderSimple\\"\\n},\\n\\"widgets_values\\": [\\n\\"512-inpainting-ema.safetensors\\"\\n]\\n},\\n{\\n\\"id\\": 20,\\n\\"type\\": \\"LoadImage\\",\\n\\"pos\\": {\\n\\"0\\": 49,\\n\\"1\\": 679\\n},\\n\\"size\\": {\\n\\"0\\": 385,\\n\\"1\\": 365\\n},\\n\\"flags\\": {},\\n\\"order\\": 1,\\n\\"mode\\": 0,\\n\\"inputs\\": [],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"IMAGE\\",\\n\\"type\\": \\"IMAGE\\",\\n\\"links\\": [\\n73\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"图像\\"\\n},\\n{\\n\\"name\\": \\"MASK\\",\\n\\"type\\": \\"MASK\\",\\n\\"links\\": [\\n79\\n],\\n\\"slot_index\\": 1,\\n\\"label\\": \\"遮罩\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"LoadImage\\"\\n},\\n\\"widgets_values\\": [\\n\\"yosemite_inpaint_example.png\\",\\n\\"image\\"\\n]\\n},\\n{\\n\\"id\\": 3,\\n\\"type\\": \\"KSampler\\",\\n\\"pos\\": {\\n\\"0\\": 940,\\n\\"1\\": 180\\n},\\n\\"size\\": {\\n\\"0\\": 315,\\n\\"1\\": 262\\n},\\n\\"flags\\": {},\\n\\"order\\": 5,\\n\\"mode\\": 0,\\n\\"inputs\\": [\\n{\\n\\"name\\": \\"model\\",\\n\\"type\\": \\"MODEL\\",\\n\\"link\\": 80,\\n\\"label\\": \\"模型\\"\\n},\\n{\\n\\"name\\": \\"positive\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 4,\\n\\"label\\": \\"正面条件\\"\\n},\\n{\\n\\"name\\": \\"negative\\",\\n\\"type\\": \\"CONDITIONING\\",\\n\\"link\\": 6,\\n\\"label\\": \\"负面条件\\"\\n},\\n{\\n\\"name\\": \\"latent_image\\",\\n\\"type\\": \\"LATENT\\",\\n\\"link\\": 72,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"outputs\\": [\\n{\\n\\"name\\": \\"LATENT\\",\\n\\"type\\": \\"LATENT\\",\\n\\"links\\": [\\n42\\n],\\n\\"slot_index\\": 0,\\n\\"label\\": \\"Latent\\"\\n}\\n],\\n\\"properties\\": {\\n\\"Node name for S&amp;R\\": \\"KSampler\\"\\n},\\n\\"widgets_values\\": [\\n1040111309094545,\\n\\"randomize\\",\\n20,\\n8,\\n\\"uni_pc_bh2\\",\\n\\"normal\\",\\n1\\n]\\n}\\n],\\n\\"links\\": [\\n[\\n4,\\n6,\\n0,\\n3,\\n1,\\n\\"CONDITIONING\\"\\n],\\n[\\n6,\\n7,\\n0,\\n3,\\n2,\\n\\"CONDITIONING\\"\\n],\\n[\\n22,\\n8,\\n0,\\n9,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n42,\\n3,\\n0,\\n8,\\n0,\\n\\"LATENT\\"\\n],\\n[\\n72,\\n26,\\n0,\\n3,\\n3,\\n\\"LATENT\\"\\n],\\n[\\n73,\\n20,\\n0,\\n26,\\n0,\\n\\"IMAGE\\"\\n],\\n[\\n79,\\n20,\\n1,\\n26,\\n2,\\n\\"MASK\\"\\n],\\n[\\n80,\\n29,\\n0,\\n3,\\n0,\\n\\"MODEL\\"\\n],\\n[\\n81,\\n29,\\n1,\\n6,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n82,\\n29,\\n1,\\n7,\\n0,\\n\\"CLIP\\"\\n],\\n[\\n83,\\n29,\\n2,\\n26,\\n1,\\n\\"VAE\\"\\n],\\n[\\n84,\\n29,\\n2,\\n8,\\n1,\\n\\"VAE\\"\\n]\\n],\\n\\"groups\\": [\\n{\\n\\"title\\": \\"Load image and alpha mask for inpainting\\",\\n\\"bounding\\": [\\n-20,\\n607,\\n786,\\n442\\n],\\n\\"color\\": \\"#3f789e\\",\\n\\"font_size\\": 24,\\n\\"flags\\": {}\\n}\\n],\\n\\"config\\": {},\\n\\"extra\\": {\\n\\"ds\\": {\\n\\"scale\\": 0.9849732675807633,\\n\\"offset\\": [\\n284.2721369485341,\\n36.00902976378898\\n]\\n}\\n},\\n\\"version\\": 0.4\\n}</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"ComfyUI_examples/局部重绘1_猫.json","value":{"title":"局部重绘1_猫.json","path":"ComfyUI_examples/局部重绘1_猫.json","outlink":[],"backlink":[]}}],"links":[]}}}');export{r as comp,I as data};
