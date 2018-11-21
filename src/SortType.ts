interface ISortType {
	Ascending: SortMethod;
	Descending: SortMethod;
	AtoZ: SortMethod;
	ZtoA: SortMethod;
}

class SortType implements ISortType {
	static Ascending: SortMethod = {IsNum: true, Reverse: false};
	static Descending: SortMethod = {IsNum: true, Reverse: true};
	static AtoZ: SortMethod = {IsNum: false, Reverse: false};
	static ZtoA: SortMethod = {IsNum: false, Reverse: true};
	Ascending: SortMethod = {IsNum: true, Reverse: false};
	Descending: SortMethod = {IsNum: true, Reverse: true};
	AtoZ: SortMethod = {IsNum: false, Reverse: false};
	ZtoA: SortMethod = {IsNum: false, Reverse: true};
}


export {SortType, ISortType}