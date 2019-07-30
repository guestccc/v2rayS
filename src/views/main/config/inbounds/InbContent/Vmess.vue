<script>
export default {
  props: {
    row: {
      type: Object,
      default: () => (null),
    },
  },
  methods: {
  },
  render() {
    const {
      row,
    } = this;
    if (!row) return null;
    const clients = Array.isArray(row.clients) ? row.clients.map(item => (
      <div class="client">
        <p>id: {item.id}</p>
        <p>alterId: {item.alterId}</p>
        <p>level: {item.level}</p>
        <p>email: {item.email || '无'}</p>
      </div>
    )) : null;
    console.log('------------');
    console.log(row);
    console.log('------------');
    return (
      <div>
        <div class="clients">
          { clients }
        </div>
        <p>disableInsecureEncryption: {row.disableInsecureEncryption || 'false'}</p>
      </div>
    );
  },
};
</script>

<style lang="scss" scoped>
.clients {
  .client {
    padding: 5px 10px;
    border: 1px solid #e8e8e8;
  }
}
</style>
