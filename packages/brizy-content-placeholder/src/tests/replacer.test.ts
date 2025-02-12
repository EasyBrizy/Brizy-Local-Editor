import { mySimpleClass } from "../examples/mySimpleClass.js"
import { EmptyContext } from "../modules/EmptyContext.js"
import { Registry } from "../modules/Registry.js"
import { Replacer } from "../modules/Replacer.js"
import { expect } from "@jest/globals"
import {
  GroupPlaceholder,
  MegaMenuItemPlaceholder,
  MegaMenuValuePlaceholder,
  MenuItemPlaceholder,
  MenuLoopPlaceholder,
  MenuLoopSubmenuPlaceholder,
} from "../examples/menu"
import { BaseContext } from "../examples/BaseContext"

describe("Replacer test", () => {
  const tests: {
    initialHtml: string
    expected: string
    placeholders: { label?: string; name: string; value: string }[]
  }[] = [
    {
      initialHtml: `<div begin="hshshsh">ololo</div>{{page_loop filter="some_values" mycustomone="bro"}}<div><h1>{{page_title}}</h2>{{test filter="some_values"}}<div><h1>{{page_title}}</h2><p>{{page_excerpt}}</p></div>{{end_test}}<p>{{page_excerpt}}</p></div>{{end_page_loop}}<h1>something</h1>`,
      expected: `<div begin="hshshsh">ololo</div>myCustomValue<h1>something</h1>`,
      placeholders: [
        { label: "label", name: "page_loop", value: "myCustomValue" },
      ],
    },
    {
      initialHtml: `<div>multiline loop {{post_loop}}
                    <div><span>some value</span></div>
                    <h1>value2</h1>
                    {{end_post_loop}}</div>`,
      expected: `<div>multiline loop loop_value</div>`,
      placeholders: [
        { label: "label", name: "post_loop", value: "loop_value" },
      ],
    },
    {
      initialHtml: `
      <div class="testWithTwoPlaceholders">
      <h1>{{placeholder content="rand"}}</h1>
      Some static content
      <h2>{{placeholder content="texv"}}</h2>
      </div>
      `,
      expected: `
      <div class="testWithTwoPlaceholders">
      <h1>myCustomValue</h1>
      Some static content
      <h2>myCustomValue</h2>
      </div>
      `,
      placeholders: [
        { label: "label", name: "placeholder", value: "myCustomValue" },
      ],
    },
    {
      initialHtml: `
      <div class="testWithDifferentPlaceholders">
      <article>
      <title>my Article Title</title>
      <div> Author: {{firstPlaceholder}}</div>
      {{secondPlaceholder content="withSepia"}}
      </article>
      </div>
      `,
      expected: `
      <div class="testWithDifferentPlaceholders">
      <article>
      <title>my Article Title</title>
      <div> Author: Jora Cardan</div>
      <img src='joraFoto.png'/>
      </article>
      </div>
      `,
      placeholders: [
        {
          name: "firstPlaceholder",
          value: "Jora Cardan",
        },
        {
          name: "secondPlaceholder",
          value: "<img src='joraFoto.png'/>",
        },
      ],
    },
  ]

  test.each(tests)(
    "Check replacer functionality",
    async ({ initialHtml, expected, placeholders }) => {
      const registry = new Registry()

      placeholders.forEach(({ label = "testLabel", name, value }) => {
        registry.registerPlaceholder(new mySimpleClass(label, name, value))
      })

      const replacer = new Replacer(registry)

      const result = await replacer.replacePlaceholders(
        initialHtml,
        new EmptyContext(),
      )

      expect(result).toBe(expected)
    },
  )

  const deepTests = [
    {
      initialHtml: `{{group}}<nav class="brz-menu brz-menu__preview brz-css-a17vl brz-css-kbIj1">
    <ul class="brz-menu__ul">{{menu_loop menuId="myMenuId"}}
        <li 
            data-menu-item-id="{{menu_item_uid}}" 
            class="brz-menu__item {{menu_item_classname}}"
        >
            <a class="brz-a" href="{{menu_item_href}}">
                <span class="brz-span">{{menu_item_title}}</span>
            </a>{{menu_loop_submenu}}
            <ul class="brz-menu__sub-menu">{{menu_loop recursive="1"}}{{end_menu_loop}}
            </ul>{{end_menu_loop_submenu}}
        </li>{{end_menu_loop}}
    </ul>
</nav>{{end_group}}
`,
      expected: `<nav class="brz-menu brz-menu__preview brz-css-a17vl brz-css-kbIj1">
    <ul class="brz-menu__ul">
        <li 
            data-menu-item-id="30385160-5ec3-44fd-85dc-251ccad495fb" 
            class="brz-menu__item "
        >
            <a class="brz-a" href="/home">
                <span class="brz-span">Home</span>
            </a>
            <ul class="brz-menu__sub-menu">
        <li 
            data-menu-item-id="342acf45-e11a-44c3-8f5a-6b1cc3a715eb" 
            class="brz-menu__item "
        >
            <a class="brz-a" href="/home">
                <span class="brz-span">Home</span>
            </a>
        </li>
            </ul>
        </li>
        <li 
            data-menu-item-id="b5ecb61e-a6ec-4227-8ded-79ea6b1af70f" 
            class="brz-menu__item "
        >
            <a class="brz-a" href="/contact">
                <span class="brz-span">Contact</span>
            </a>
            <ul class="brz-menu__sub-menu">
        <li 
            data-menu-item-id="6f4524c2-af5b-4be3-8fc0-e41b1640f7e2" 
            class="brz-menu__item "
        >
            <a class="brz-a" href="/enterprise">
                <span class="brz-span">Enterprise</span>
            </a>
            <ul class="brz-menu__sub-menu">
        <li 
            data-menu-item-id="fe3d1b6b-aa33-46db-80e4-021f629c7934" 
            class="brz-menu__item "
        >
            <a class="brz-a" href="/story/story-1">
                <span class="brz-span">Story-1</span>
            </a>
        </li>
            </ul>
        </li>
            </ul>
        </li>
    </ul>
</nav>
`,
      menuData: [
        {
          id: "myMenuId",
          name: "First Menu",
          items: [
            {
              type: "MenuItem",
              value: {
                id: "30385160-5ec3-44fd-85dc-251ccad495fb",
                title: "Home",
                url: "/home",
                items: [
                  {
                    type: "MenuItem",
                    value: {
                      id: "342acf45-e11a-44c3-8f5a-6b1cc3a715eb",
                      title: "Home",
                      url: "/home",
                    },
                  },
                ],
              },
            },
            {
              type: "MenuItem",
              value: {
                id: "b5ecb61e-a6ec-4227-8ded-79ea6b1af70f",
                title: "Contact",
                url: "/contact",
                items: [
                  {
                    type: "MenuItem",
                    value: {
                      id: "6f4524c2-af5b-4be3-8fc0-e41b1640f7e2",
                      title: "Enterprise",
                      url: "/enterprise",
                      items: [
                        {
                          type: "MenuItem",
                          value: {
                            id: "fe3d1b6b-aa33-46db-80e4-021f629c7934",
                            title: "Story-1",
                            url: "/story/story-1",
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      initialHtml: `{{group}}<nav class="brz-menu brz-menu__preview brz-css-wx96w brz-css-wYfjT">{{mega_menu_value itemId="bbfdf4ed-f632-4413-a82d-2f989a265a4d"}}
        <div class="brz brz-mega-menu__portal brz-css-wMLwr">
            <div class="brz-mega-menu brz-css-d9Be4 brz-css-wOF70" data-uid="dbEHiVkLEsaR"
                 data-brz-custom-id="dbEHiVkLEsaR">
                <div class="brz-bg">
                    <div class="brz-bg-color"></div>
                </div>
                <div class="brz-container brz-css-xuSvJ">
                    <div class="brz-css-v4tiK brz-wrapper">
                        <div class="brz-menu__container brz-css-hRoaG">{{group}}<nav class="brz-menu brz-menu__preview brz-css-wx96w">
                                <ul class="brz-menu__ul">{{menu_loop menuId="myMenuId3"}}
                                    <li data-menu-item-id="{{menu_item_uid}}"
                                        class="brz-menu__item {{menu_item_classname}}"><a
                                            class="brz-a" href="{{menu_item_href}}"><span
                                            class="brz-span">{{menu_item_title}}</span></a>{{mega_menu}}{{menu_loop_submenu}}
                                        <ul class="brz-menu__sub-menu">{{menu_loop recursive="1"}}{{end_menu_loop}}</ul>
                                        {{end_menu_loop_submenu}}
                                    </li>{{end_menu_loop}}
                                </ul>
                            </nav>
                            {{end_group}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{end_mega_menu_value}}<ul class="brz-menu__ul">{{menu_loop menuId="myMenuId2"}}
            <li data-menu-item-id="{{menu_item_uid}}" class="brz-menu__item {{menu_item_classname}}"><a class="brz-a"
                                                                                                        href="{{menu_item_href}}"><span
                    class="brz-span">{{menu_item_title}}</span></a>{{mega_menu}}{{menu_loop_submenu}}
                <ul class="brz-menu__sub-menu">{{menu_loop recursive="1"}}{{end_menu_loop}}</ul>{{end_menu_loop_submenu}}
            </li>{{end_menu_loop}}
        </ul>
    </nav>{{end_group}}`,
      expected: `<nav class="brz-menu brz-menu__preview brz-css-wx96w brz-css-wYfjT"><ul class="brz-menu__ul">
            <li data-menu-item-id="bbfdf4ed-f632-4413-a82d-2f989a265a4d" class="brz-menu__item "><a class="brz-a"
                                                                                                        href="/home"><span
                    class="brz-span">Home</span></a>
        <div class="brz brz-mega-menu__portal brz-css-wMLwr">
            <div class="brz-mega-menu brz-css-d9Be4 brz-css-wOF70" data-uid="dbEHiVkLEsaR"
                 data-brz-custom-id="dbEHiVkLEsaR">
                <div class="brz-bg">
                    <div class="brz-bg-color"></div>
                </div>
                <div class="brz-container brz-css-xuSvJ">
                    <div class="brz-css-v4tiK brz-wrapper">
                        <div class="brz-menu__container brz-css-hRoaG"><nav class="brz-menu brz-menu__preview brz-css-wx96w">
                                <ul class="brz-menu__ul">
                                    <li data-menu-item-id="e3f0afbf-5c58-4f57-bdec-e433edcba9dc"
                                        class="brz-menu__item "><a
                                            class="brz-a" href="/contact"><span
                                            class="brz-span">Contact</span></a>
                                        <ul class="brz-menu__sub-menu">
                                    <li data-menu-item-id="9b6155d0-8a8d-4e80-b157-1a25036514b3"
                                        class="brz-menu__item "><a
                                            class="brz-a" href="/page-2"><span
                                            class="brz-span">Page2</span></a>
                                    </li></ul>
                                        
                                    </li>
                                    <li data-menu-item-id="d54e3984-c128-47a7-ae13-1e8db2e75804"
                                        class="brz-menu__item "><a
                                            class="brz-a" href="/storage"><span
                                            class="brz-span">Storage</span></a>
                                    </li>
                                </ul>
                            </nav>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            </li>
            <li data-menu-item-id="61881a76-5394-4c30-9fb1-6bb42e708f50" class="brz-menu__item "><a class="brz-a"
                                                                                                        href="/about"><span
                    class="brz-span">About us</span></a>
                <ul class="brz-menu__sub-menu">
            <li data-menu-item-id="83a44832-fc9f-4e4b-8889-f48d8ba0f1b1" class="brz-menu__item "><a class="brz-a"
                                                                                                        href="/enterprise"><span
                    class="brz-span">Enterprise</span></a>
            </li></ul>
            </li>
        </ul>
    </nav>`,
      menuData: [
        {
          id: "myMenuId2",
          name: "Second Menu",
          items: [
            {
              type: "MenuItem",
              value: {
                id: "bbfdf4ed-f632-4413-a82d-2f989a265a4d",
                title: "Home",
                url: "/home",
                items: [],
              },
            },
            {
              type: "MenuItem",
              value: {
                id: "61881a76-5394-4c30-9fb1-6bb42e708f50",
                title: "About us",
                url: "/about",
                items: [
                  {
                    type: "MenuItem",
                    value: {
                      id: "83a44832-fc9f-4e4b-8889-f48d8ba0f1b1",
                      title: "Enterprise",
                      url: "/enterprise",
                      items: [],
                    },
                  },
                ],
              },
            },
          ],
        },
        {
          id: "myMenuId3",
          name: "Third Menu",
          items: [
            {
              type: "MenuItem",
              value: {
                id: "e3f0afbf-5c58-4f57-bdec-e433edcba9dc",
                title: "Contact",
                url: "/contact",
                items: [
                  {
                    type: "MenuItem",
                    value: {
                      id: "9b6155d0-8a8d-4e80-b157-1a25036514b3",
                      title: "Page2",
                      url: "/page-2",
                      items: [],
                    },
                  },
                ],
              },
            },
            {
              type: "MenuItem",
              value: {
                id: "d54e3984-c128-47a7-ae13-1e8db2e75804",
                title: "Storage",
                url: "/storage",
                items: [],
              },
            },
          ],
        },
      ],
    },
  ]

  test.each(deepTests)(
    "Check deep replacer functionality",
    async ({ initialHtml, expected, menuData }) => {
      const registry = new Registry()

      const instances = [
        new GroupPlaceholder(),
        new MenuLoopPlaceholder(),
        new MenuLoopSubmenuPlaceholder(),
        new MenuItemPlaceholder(),
        new MegaMenuItemPlaceholder(),
        new MegaMenuValuePlaceholder(),
      ]

      const replacer = new Replacer(registry)

      instances.forEach((Instance) => {
        Instance.setReplacer(replacer)
        registry.registerPlaceholder(Instance)
      })

      const context = new BaseContext({
        menuData,
      })

      const result = await replacer.replacePlaceholders(initialHtml, context)
      expect(result).toBe(expected)
    },
  )
})
