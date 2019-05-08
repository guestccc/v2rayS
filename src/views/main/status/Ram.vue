<template>
  <div class="tab ram">
      <div class="label">
        <div
          class="chart"
          id="chart-mini"></div>
        <div class="info">
          <p>内存 ({{ percentage }})</p>
          <p>{{ applymem | gb }}/{{ ram.totalmem | gb }} GB</p>
        </div>
      </div>
      <div class="content">
        <div id="chart"></div>
      </div>
    </div>
</template>

<script>
import G2 from '@antv/g2';

export default {
  data() {
    return {
      g2Chart: null,
      g2ChartMini: null,
      ram: {},
      data: [],
    };
  },
  computed: {
    applymem() {
      const { totalmem = 0, freemem = 0 } = this.ram;
      return totalmem - freemem;
    },
    percentage() {
      const { applymem = 0 } = this;
      const { totalmem = 1 } = this.ram;
      return `${(applymem / totalmem * 100).toFixed(2)}%`;
    },
  },
  methods: {
    handleData(v) {
      this.ram = v;
      this.handleUpdateChart();
    },
    handleG2ChartInit() {
      this.g2Chart = new G2.Chart({
        container: 'chart',
        forceFit: true,
        height: 600,
        padding: [10, 0, 20, 40],
      });
      this.g2Chart.source(this.data);
      this.g2Chart.scale('value', {
        min: 0,
        max: 100,
        ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      });
      this.g2Chart.axis('time', {
        label: null,
      });
      this.g2Chart.line().position('time*value');
      this.g2Chart.render();
    },
    handleUpdateChart() {
      this.data.push({
        time: new Date(),
        value: parseFloat(this.percentage),
      });
      this.g2Chart.changeData(this.data);
      this.g2ChartMini.changeData(this.data);
    },
    handleG2ChartMiniInit() {
      this.g2ChartMini = new G2.Chart({
        container: 'chart-mini',
        forceFit: true,
        height: 60,
        padding: 0,
        background: {
          stroke: '#ff0000',
        },
      });
      this.g2ChartMini.source(this.data);
      this.g2ChartMini.scale('value', {
        label: null,
        min: 0,
        max: 100,
      });
      this.g2ChartMini.axis('time', {
        label: null,
      });
      this.g2ChartMini.tooltip(false);
      this.g2ChartMini.line().position('time*value');
      this.g2ChartMini.render();
    },
  },
  mounted() {
    this.handleG2ChartMiniInit();
    this.handleG2ChartInit();
  },
};
</script>


<style lang="scss" scoped>
.tab {
  display: flex;
  .label {
    display: flex;
    width: 220px;
    .chart {
      width: 90px;
      height: 60px;
    }
    .info {
      flex: 1;
      padding-left: 10px;
      line-height: 30px;
    }
  }
  .content {
    flex: 1;
  }
}
</style>
