const DrugaKompa = () => {
  const podnaslov = 'JSX';
  const formatTitle = title => title.toLowerCase();
    return (
        <>
        <h2>podnaslov: {formatTitle(podnaslov)}</h2>
        <div>
          <h1>Druga komponenta</h1>
          </div>
        </>
    );
};

export default DrugaKompa;