import React from "react";
import { SearchBar, Grid, Accordion } from "antd-mobile";
import { NoneText } from "@/components/PageLoading";
import { getSubscribe } from "@/utils";
import { Link } from "umi";
import styles from "./index.module.less";

let timer: any;
export default () => {
  const dataSource = getSubscribe();
  const [data, setData] = React.useState<{ [key: string]: API.subscribe }>(
    dataSource);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar
          placeholder="请输入"
          onClear={() => {
            setData(dataSource);
          }}
          onChange={(value) => {
            if (!value) {
              setData(dataSource);
              return;
            }
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
              const newData: { [key: string]: API.subscribe } = {};
              Object.keys(dataSource).map(key => {
                const dataItem = data[key];
                const apps = dataItem.apps.filter(
                  app => app.title.indexOf(value) > -1);
                if (apps) newData[key] = { ...dataItem, apps };
              });
              setData(newData);
            }, 500);
          }}
        />
      </div>
      <Accordion defaultActiveKey="0">
        {Object.keys(data).length ? Object.keys(data).map(
          (key, index: number) => {
            const dataSource = data[key];
            const { apps, author, icon } = dataSource as API.subscribe;
            return (
              <Accordion.Panel key={index} header={(
                <div className={styles.avatar}>
                  <img className={styles.avatar_img} src={icon} alt="" />
                  {author}
                </div>
              )}>
                <Grid
                  data={apps}
                  columnNum={4}
                  square={false}
                  hasLine={false}
                  renderItem={(dataItem) => {
                    const item = dataItem as API.apps;
                    return (
                      <Link to={`/app/info/${item.name}`}>
                        <div className={styles.list_item}>
                          <img alt="" src={item.thumb}
                               className={styles.list_item_img} />
                          <div className={styles.list_item_desc}>
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  }}
                />
              </Accordion.Panel>
            );
          }) : <NoneText>暂无数据</NoneText>}
      </Accordion>
    </div>
  );
}