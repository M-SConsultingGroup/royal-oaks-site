import Header from "../components/Header";
import PackageDeals from "../components/PackageDeals";

const PackagesPage = ({ onSelectPackage }: { onSelectPackage: (title: string) => void }) => {
  return (
    <div>
      <Header />
      <PackageDeals onSelectPackage={onSelectPackage} />
    </div>
  );
};

export default PackagesPage;