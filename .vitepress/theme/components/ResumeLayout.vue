<script setup lang="ts">
/**
 * 简历版式组件
 * 数据集中在下方 RESUME 对象里，改内容只动这里，不用碰模板。
 * 标注【待补】的字段会以浅色高亮显示，方便一眼看到还缺什么。
 *
 * 内容来源：工作-程序员/简历/7年/高溪_Java开发工程师_简历.md（2026-11）
 */

const RESUME = {
  profile: {
    name: '高溪',
    alias: 'XiXi',
    title: '后端开发工程师（Java）',
    years: '7 年',
    email: 'gaoxi723@163.com',
    github: 'https://github.com/gaoxi-hub',
    githubLabel: 'gaoxi-hub',
    wechat: '溪溪技术笔记',
    edu: '本科 · 徐州工程学院',
    intent: '后端开发工程师（Java）· 7 年经验'
  },
  skills: [
    {
      group: '后端与框架',
      items: [
        'Java',
        '集合 / IO / 并发',
        'JVM 调优',
        'Spring Boot',
        'Spring Cloud',
        'Spring Cloud Alibaba',
        'Spring Security / Sa-Token',
        'MyBatis-Plus',
        'ShardingSphere-JDBC'
      ]
    },
    {
      group: '数据与存储',
      items: [
        'MySQL（索引 / 事务 / MVCC）',
        'PostgreSQL',
        'TimescaleDB',
        'Redis Cluster',
        'ElasticSearch',
        'ClickHouse',
        'Trino',
        'Hadoop'
      ]
    },
    {
      group: '消息与中间件',
      items: ['Kafka', 'RocketMQ', 'RabbitMQ', '可靠投递 / 幂等消费']
    },
    {
      group: '架构与工程',
      items: [
        '微服务拆分与治理',
        '分布式事务 AT / TCC',
        '限流熔断降级',
        '缓存架构设计',
        '异步解耦',
        '分布式调度',
        'CI/CD（Jenkins + Harbor + K8s）'
      ]
    },
    {
      group: '可观测性与云',
      items: [
        'Prometheus + Grafana',
        'ELK / FileBeat',
        'Linux',
        'Docker',
        'K8s',
        '阿里云 / AWS / Google Cloud'
      ]
    },
    {
      group: 'AI 应用',
      items: [
        'Spring AI',
        'Spring AI Alibaba',
        'LangChain',
        'RAG 检索增强',
        'Agent 工程化',
        'MCP 工具接入',
        'Vibe Coding'
      ]
    }
  ],
  jobs: [
    {
      company: '江苏跃凯生物技术有限公司（鱼跃医疗）',
      role: '后端开发工程师',
      period: '2025.04 – 至今',
      points: ['【待补】当前岗位职责 3–4 条，尽量带可量化结果（服务规模 / 数据量 / 性能或稳定性指标）']
    },
    {
      company: '江苏华能智慧能源供应链科技有限公司',
      role: 'Java 与数据开发工程师',
      period: '2022.08 – 2025.03',
      points: [
        '负责能源电商平台商品、订单、库存等核心域的表设计与接口设计；维护 4 套测试环境发版并编写 Jenkins Pipeline 脚本；用 AOP 做统一日志；重做 Excel 异步导入导出；解决库存扣减死锁。（细节见项目经历）'
      ]
    },
    {
      company: '雨润控股集团',
      role: 'Java 开发工程师',
      period: '2019.11 – 2022.07',
      points: [
        '负责雨润优品购物车、订单、售后、电子发票模块；主导 Nacos 与 Seata 的调研落地；用 RocketMQ 完成业务异步化；抽象 0-1 背包解决发票拆单限额。（细节见项目经历）'
      ]
    }
  ],
  projects: [
    {
      name: '华能电子商城',
      role: 'Java 与数据开发工程师',
      period: '2022.08 – 2025.03',
      intro:
        '华能集团旗下的能源行业智慧供应链平台，把招标、采购、销售、物流、金融与云服务做成一站式服务。',
      stack: [
        'Spring Boot',
        'Spring Cloud Alibaba',
        'Dubbo 2.7',
        'Nacos',
        'RocketMQ',
        'MySQL',
        'ElasticSearch',
        'Redis',
        'XXL-JOB'
      ],
      arch: [
        '基于 Spring Cloud Alibaba 按业务场景拆分微服务，Nacos 做注册与配置中心。',
        '服务间调用走 Dubbo，高频链路比 HTTP 调用更省开销。',
        '用 XXL-JOB 统一调度，解决多个定时任务同时打库产生的脏数据。',
        'Keepalived + Nginx 保证访问入口高可用，消除单点故障。',
        'Redis Cluster 支撑高并发读，Prometheus + Grafana 做实时监控。',
        'Git + Jenkins 实现自动化构建与发布。'
      ],
      duty: [
        '与产品对齐需求，完成表结构与接口设计并按期交付。',
        '负责 4 套测试环境发版，编写 Jenkins Pipeline 脚本实现自动化部署。',
        '用 AOP 实现统一日志记录。',
        '开发异步 Excel 导入导出，解决大数据量导入导出超时。',
        '排查并解决库存扣减导致的数据库死锁。'
      ]
    },
    {
      name: '雨润优品',
      role: 'Java 开发工程师',
      period: '2019.11 – 2022.08',
      intro:
        '雨润集团自研电商系统，后台覆盖商家、店铺、商品、订单、发货单与退货单管理，小程序端覆盖搜索、购物车、下单支付、售后与电子发票。',
      stack: [
        'Spring Boot',
        'Spring Cloud Alibaba',
        'Spring Security',
        'Nacos',
        'Sentinel',
        'Seata',
        'RocketMQ',
        'MySQL',
        'ELK',
        'Redis',
        'Docker',
        'K8s'
      ],
      arch: [
        'Spring Cloud Alibaba 微服务拆分，Nacos 做注册与配置中心，OpenFeign 完成服务调用。',
        'Sentinel 对核心服务限流、熔断、降级，保住大促期间的可用性。',
        'Seata 的 AT 与 TCC 模式解决分布式事务。',
        'Gateway 作为统一入口，自研全局过滤器实现统一认证。',
        'Redis Cluster 做缓存集群；MySQL 用 MGR + ProxySQL 实现读写分离。',
        'FileBeat + Elasticsearch + Kibana 搭平台级日志系统；GitLab + Jenkins + Harbor + K8s 搭 DevOps 流水线。'
      ],
      duty: [
        '负责购物车、订单、售后申请、电子发票模块的设计与开发。',
        '调研并引入 Nacos，替换原有注册与配置方案。',
        '调研并引入 Seata，落地分布式事务。',
        '用 RocketMQ 做业务异步化，解决消息丢失与重复消费。',
        '解决订单超单张发票限额时的最小开票张数问题（0-1 背包）。',
        '自定义 HandlerMethodArgumentResolver 统一获取登录用户信息；用 AOP 完成统一日志。'
      ]
    }
  ],
  education: [{ school: '徐州工程学院', detail: '本科' }]
}

const isTodo = (text: string) => text.includes('【待补')

// 打印 / 导出 PDF（浏览器原生打印，样式见组件内 @media print 与 custom.css）
const printResume = () => window.print()
</script>

<template>
  <div class="resume-page">
    <header class="resume-head">
      <div class="ident">
        <h1>{{ RESUME.profile.name }}<span class="alias">{{ RESUME.profile.alias }}</span></h1>
        <p class="role">{{ RESUME.profile.title }} · {{ RESUME.profile.years }}</p>
        <ul class="meta">
          <li><a :href="`mailto:${RESUME.profile.email}`">{{ RESUME.profile.email }}</a></li>
          <li>
            <a :href="RESUME.profile.github" target="_blank" rel="noreferrer">
              GitHub / {{ RESUME.profile.githubLabel }}
            </a>
          </li>
          <li>{{ RESUME.profile.edu }}</li>
          <li>公众号 {{ RESUME.profile.wechat }}</li>
        </ul>
      </div>
      <div class="actions">
        <button class="btn primary" type="button" @click="printResume">打印 / 存为 PDF</button>
        <a class="btn" href="/">← 返回首页</a>
      </div>
    </header>

    <p class="intent"><strong>求职意向：</strong>{{ RESUME.profile.intent }}</p>

    <section>
      <h2>核心技能</h2>
      <div class="skills">
        <div v-for="s in RESUME.skills" :key="s.group" class="skill-row">
          <span class="skill-label">{{ s.group }}</span>
          <span class="tags">
            <span v-for="item in s.items" :key="item" class="tag">{{ item }}</span>
          </span>
        </div>
      </div>
    </section>

    <section>
      <h2>工作经历</h2>
      <div class="timeline">
        <article v-for="job in RESUME.jobs" :key="job.company" class="tl-item">
          <div class="tl-dot" />
          <div class="tl-body">
            <div class="tl-head">
              <h3>{{ job.company }}</h3>
              <span class="period">{{ job.period }}</span>
            </div>
            <p class="tl-role">{{ job.role }}</p>
            <ul>
              <li v-for="p in job.points" :key="p" :class="{ todo: isTodo(p) }">{{ p }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section>
      <h2>项目经历</h2>
      <div class="proj-list">
        <article v-for="p in RESUME.projects" :key="p.name" class="proj">
          <div class="proj-head">
            <h3>{{ p.name }}</h3>
            <span class="proj-meta">
              <span class="role-tag">{{ p.role }}</span>
              <span class="period">{{ p.period }}</span>
            </span>
          </div>
          <p class="proj-intro">{{ p.intro }}</p>
          <div class="tags">
            <span v-for="t in p.stack" :key="t" class="tag small">{{ t }}</span>
          </div>
          <div class="proj-cols">
            <div class="col">
              <h4>架构与选型</h4>
              <ul>
                <li v-for="line in p.arch" :key="line">{{ line }}</li>
              </ul>
            </div>
            <div class="col">
              <h4>主要职责</h4>
              <ul>
                <li v-for="line in p.duty" :key="line">{{ line }}</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section>
      <h2>教育背景</h2>
      <div class="edu">
        <div v-for="e in RESUME.education" :key="e.school">
          <strong>{{ e.school }}</strong>
          <span class="eduo">{{ e.detail }}</span>
        </div>
      </div>
    </section>

    <footer class="resume-foot">
      <span>本页由 VitePress 生成 · 内容持续更新</span>
    </footer>
  </div>
</template>

<style scoped>
.resume-page {
  max-width: 920px;
  margin: 0 auto;
  padding: 8px 0 64px;
}

.resume-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--vp-c-brand-1);
}

.ident h1 {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 0;
  font-size: 34px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.ident .alias {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}

.role {
  margin: 8px 0 10px;
  font-size: 15px;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13.5px;
  color: var(--vp-c-text-2);
}

/* 纯文字分隔点，比 emoji 更稳、打印也干净 */
.meta li + li::before {
  content: '·';
  margin-right: 10px;
  color: var(--vp-c-text-3);
}

.meta a {
  color: var(--vp-c-text-2);
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
}

.btn {
  display: inline-block;
  padding: 7px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 13px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  cursor: pointer;
  text-align: center;
  transition: border-color 0.2s, color 0.2s;
}

.btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.btn.primary {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
}

.btn.primary:hover {
  background: var(--vp-c-brand-2);
  color: #fff;
}

.intent {
  margin: 18px 0 0;
  padding: 10px 14px;
  border-left: 3px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 0 8px 8px 0;
  font-size: 14px;
}

section {
  margin-top: 34px;
}

h2 {
  margin: 0 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* 技能 */
.skill-row {
  display: flex;
  gap: 14px;
  padding: 8px 0;
  font-size: 14px;
}

.skill-row + .skill-row {
  border-top: 1px dashed var(--vp-c-divider);
}

.skill-label {
  width: 104px;
  flex-shrink: 0;
  padding-top: 2px;
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  padding: 2px 9px;
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  font-size: 12.5px;
  color: var(--vp-c-text-1);
  line-height: 1.6;
}

.tag.small {
  font-size: 12px;
  padding: 1px 8px;
  color: var(--vp-c-text-2);
}

/* 时间轴 */
.timeline {
  position: relative;
  padding-left: 22px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: var(--vp-c-divider);
}

.tl-item {
  position: relative;
  padding-bottom: 22px;
}

.tl-item:last-child {
  padding-bottom: 0;
}

.tl-dot {
  position: absolute;
  left: -22px;
  top: 7px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.tl-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.tl-head h3 {
  margin: 0;
  font-size: 15.5px;
  font-weight: 600;
  line-height: 1.4;
}

.period {
  font-size: 12.5px;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

.tl-role {
  margin: 2px 0 8px;
  font-size: 13.5px;
  color: var(--vp-c-text-2);
}

ul {
  margin: 0;
  padding-left: 18px;
}

li {
  margin: 4px 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

/* 项目 */
.proj-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.proj {
  padding: 18px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.proj-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.proj-head h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.proj-meta {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-shrink: 0;
}

.role-tag {
  font-size: 12px;
  color: var(--vp-c-brand-1);
  white-space: nowrap;
}

.proj-intro {
  margin: 6px 0 10px;
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.proj-cols {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px 26px;
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed var(--vp-c-divider);
}

.col h4 {
  margin: 0 0 6px;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--vp-c-text-3);
}

.col li {
  font-size: 13.5px;
  margin: 3px 0;
}

.edu {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 14px;
}

.eduo {
  color: var(--vp-c-text-2);
}

/* 待补字段 */
.todo {
  color: #b45309;
  background: rgba(217, 119, 6, 0.1);
  border-radius: 4px;
  padding: 0 3px;
}

.resume-foot {
  margin-top: 44px;
  padding-top: 14px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 12.5px;
  color: var(--vp-c-text-3);
}

@media (max-width: 768px) {
  .resume-head {
    flex-direction: column;
  }

  .actions {
    flex-direction: row;
    width: 100%;
  }

  .actions .btn {
    flex: 1;
  }

  .ident h1 {
    font-size: 28px;
  }

  .proj-cols {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .proj-head,
  .tl-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .skill-row {
    flex-direction: column;
    gap: 6px;
  }

  .skill-label {
    width: auto;
    padding-top: 0;
  }
}

/* 打印：单栏、压缩间距，争取 2 页内装完 */
@media print {
  .resume-page {
    font-size: 9pt;
  }

  /* 打印时标题不必撑那么大 */
  .ident h1 {
    font-size: 22px;
  }

  .intent {
    margin-top: 12px;
  }

  .role {
    margin: 4px 0 6px;
    font-size: 11pt;
  }

  .ident .alias {
    font-size: 10pt;
  }

  .resume-head {
    padding-bottom: 10px;
  }

  .resume-head {
    padding-bottom: 10px;
  }

  /* A4 有效宽度只有 186mm，两栏会把每列压到 90mm 内、换行反而更多 */
  .proj-cols {
    grid-template-columns: 1fr;
    gap: 6px;
    margin-top: 6px;
    padding-top: 8px;
  }

  .proj {
    padding: 7px 10px;
    border-color: #d4d4d4;
    /* 项目卡片较长，强制不跨页会被整块推到下页、留出大片空白 */
    break-inside: auto;
    page-break-inside: auto;
  }

  .proj-list {
    gap: 7px;
  }

  .proj-intro {
    margin: 4px 0 6px;
  }

  .proj-intro,
  .proj-cols li,
  li,
  .tag {
    font-size: 8.8pt;
  }

  li {
    margin: 1px 0;
    line-height: 1.45;
  }

  .tag {
    border-color: #d4d4d4;
    background: transparent;
    font-size: 7.6pt;
    padding: 0 4px;
    line-height: 1.45;
  }

  .tags {
    gap: 4px;
  }

  .todo {
    color: #8a4b00;
    background: transparent;
  }

  section {
    margin-top: 10px;
    /* 允许跨页断开，否则整段被推到下页会留大片空白 */
    break-inside: auto;
    page-break-inside: auto;
  }

  h2 {
    margin-bottom: 4px;
    font-size: 10.5pt;
    padding-bottom: 4px;
  }

  .skill-row {
    padding: 5px 0;
  }

  .tl-item {
    padding-bottom: 13px;
  }

  .resume-foot {
    margin-top: 12px;
  }
}
</style>
