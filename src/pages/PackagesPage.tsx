import Header from "../components/Header";
import PackageDeals from "../components/PackageDeals";

const PackagesPage = ({ onSelectPackage }: { onSelectPackage: (title: string) => void }) => {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto py-6">
        <PackageDeals onSelectPackage={onSelectPackage} />
      </main>
    </div>
  );
};

export default PackagesPage;