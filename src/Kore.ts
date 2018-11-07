import {Core} from "./index";
import {SortType} from "./SortType";

export class Kore implements Core {
	AssertExtend(): void {
		if (!this.IsExtended) this.t("Core needs to be extended");
	}
	// readonly SPACE: string = "&nbsp;";
	// readonly LEFT_TAG: string = "&lt;";
	// readonly RIGHT_TAG: string = "&gt;";
	// readonly AMPERSAND: string = "&amp;";
	// readonly SINGLE_QUOTE: string = "&#39;";
	// readonly DOUBLE_QUOTE: string = "&quot;";
	
	private readonly m: string = ' _-,;:!?.\'"()[]{ }@*/\&#%`^+<=>|~$0123456789aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
	
	get IsExtended() {
		return Map.prototype.All != null;
	}
	
	ExtendPrimitives() {
		let c: Kore = this;
		// String.prototype.EscapeChar = function (space: boolean): string {
		// 	if (this.length > 1) {
		// 		c.t("Only can escape characters. String cannot be longer than 1");
		// 	}
		// 	switch (this) {
		// 		case "&":
		// 			return c.AMPERSAND;
		// 		case "<":
		// 			return c.LEFT_TAG;
		// 		case ">":
		// 			return c.RIGHT_TAG;
		// 		case "'":
		// 			return c.SINGLE_QUOTE;
		// 		case '"':
		// 			return c.DOUBLE_QUOTE;
		// 		case " ":
		// 			return space ? c.SPACE : this;
		// 		default:
		// 			return this;
		// 	}
		// };
		// String.prototype.EscapeHTML = function (space: boolean): string {
		// 	return this.split('').Map((s: string) => s.EscapeChar(space)).join("");
		// };
		// // String.prototype.BreakIntoArray = function (cArr: string[] = []): string[] {
		// // 	if (this.length === 0) return cArr;
		// // 	let f: string = this.charAt(0);
		// // 	if (f !== "&") {
		// // 		cArr.push(f);
		// // 		return this.Skip(1).BreakIntoArray(cArr);
		// // 	} else {
		// // 		let ret: string = this;
		// // 		let six = this.Take(6);
		// // 		let five = this.Take(5);
		// // 		let four = this.Take(4);
		// // 		if (six === c.SPACE) {
		// // 			cArr.push(c.SPACE);
		// // 			ret = this.Skip(6);
		// // 		} else if (six === c.DOUBLE_QUOTE) {
		// // 			cArr.push(c.DOUBLE_QUOTE);
		// // 			ret = this.Skip(6);
		// // 		} else if (five === c.AMPERSAND) {
		// // 			cArr.push(c.AMPERSAND);
		// // 			ret = this.Skip(5);
		// // 		} else if (five === c.SINGLE_QUOTE) {
		// // 			cArr.push(c.SINGLE_QUOTE);
		// // 			ret = this.Skip(5);
		// // 		} else if (four === c.LEFT_TAG) {
		// // 			cArr.push(c.LEFT_TAG);
		// // 			ret = this.Skip(4);
		// // 		} else if (four === c.RIGHT_TAG) {
		// // 			cArr.push(c.RIGHT_TAG);
		// // 			ret = this.Skip(4);
		// // 		} else {
		// // 			cArr.push(f);
		// // 			ret = this.Skip(1);
		// // 		}
		// // 		return ret.BreakIntoArray(cArr);
		// // 	}
		// // };
		// String.prototype.WrapIn = function (tag: string): string {
		// 	return `<${tag}>${this}</${tag}>`;
		// };
		// String.prototype.RemoveURLVariable = function (): string {
		// 	let split: string[] = this.split('?');
		// 	return split.length === 1 ? this : split.Omit(1).join('?');
		// };
		//
		// String.prototype.IsFile = function (): boolean {
		// 	return c.IsFile(this as string);
		// };
		//
		// String.prototype.HasDir = function (): boolean {
		// 	return c.fileCheck(this).split("/").length > 1;
		// };
		//
		// String.prototype.GetExt = function (): string {
		// 	return "." + c.fileCheck(this).split('.').pop();
		// };
		//
		// String.prototype.GetName = function (): string {
		// 	return c.fileCheck(this)
		// 		.split(".")
		// 		.Omit(1)
		// 		.join(".")
		// 		.split("/").pop()!;
		// };
		//
		// String.prototype.GetDir = function (): string {
		// 	let path = c.fileCheck(this);
		// 	if (!path.HasDir()) return "";
		// 	return path.split(".").Omit(1).join(".").split("/").Omit(1).join("/").FormatDir();
		// };
		//
		// String.prototype.ReplaceExt = function (replacement: string): string {
		// 	let path = c.fileCheck(this);
		// 	if (replacement.Starts(".")) replacement = replacement.Skip(1);
		// 	return path.GetDir().FormatDir() + (path.GetName() + "." + replacement).FormatFile();
		// };
		//
		// String.prototype.EditExt = function (modify: (s: string) => string): string {
		// 	let path = c.fileCheck(this);
		// 	return path.ReplaceExt(modify(path.GetExt().Skip(1)));
		// };
		//
		// String.prototype.ReplaceName = function (replacement: string): string {
		// 	let path = c.fileCheck(this);
		// 	if (replacement.Starts("/")) replacement = replacement.Skip(1);
		// 	if (replacement.Ends(".")) replacement = replacement.Omit(1);
		// 	return (path.GetDir().FormatDir() + replacement + path.GetExt()).FormatFile();
		// };
		//
		// String.prototype.EditName = function (modify: (s: string) => string): string {
		// 	let path = c.fileCheck(this);
		// 	return path.ReplaceName(modify(path.GetName()));
		// };
		//
		// String.prototype.ReplaceDir = function (replacement: string): string {
		// 	let path = c.fileCheck(this);
		// 	return (replacement.FormatDir() + path.split("/").pop()!.FormatFile()).FormatFile();
		// };
		//
		// String.prototype.EditDir = function (modify: (s: string) => string): string {
		// 	let path = c.fileCheck(this);
		// 	return path.ReplaceDir(modify(path.GetDir()));
		// };
		//
		// String.prototype.FormatDir = function (): string {
		// 	let path = c.parseFile(this);
		// 	if (!c.IsString(path)) c.t("directory cannot be empty");
		// 	if (path.Starts("/")) path = path.Skip(1);
		// 	if (!path.Ends("/")) path += "/";
		// 	return path;
		// };
		//
		// String.prototype.FormatFile = function () {
		// 	let path = c.fileCheck(this);
		// 	return path.Starts("/") ? path.Skip(1) : path;
		// };
		
		
		/*=================
		 strings
		 ==================*/
		String.prototype.Match = function (regex: RegExp): string[] {
			return this.match(regex) || [];
		};
		
		String.prototype.ReplaceAll = function (regex: string, replace: string): string {
			return this.replace(new RegExp(regex, 'g'), replace);
		};
		
		String.prototype.IsEmpty = function (): boolean {
			return this.trim().length === 0;
		};
		
		String.prototype.Starts = function (start: string): boolean {
			if (this.IsEmpty() || start.IsEmpty()) return false;
			let s: string = start.trim();
			let target: string = this.trim();
			return target.Take(s.length) === s;
		};
		
		String.prototype.Ends = function (end: string): boolean {
			if (this.IsEmpty() || end.IsEmpty()) return false;
			let s: string = end.trim();
			let target: string = this.trim();
			return target.Last(s.length) === s;
		};
		
		String.prototype.CharAt = function (val: number): string {
			if ((val > -1 && val >= this.length) || (val < 0 && -val > this.length)) {
				c.t("Cannot exceed length of string");
			}
			return this.charAt(val + (val < 0 ? this.length : 0));
		};
		
		String.prototype.RemoveCharAt = function (val: number): string {
			let i = val + (val < 0 ? this.length : 0);
			if ((val > -1 && val >= this.length) || (-val >= this.length + 1 && val < 0)) {
				c.t("Cannot exceed length of string");
			}
			return this.Take(i) + this.Skip(i + 1);
		};
		
		String.prototype.Remove = function (target: string): string {
			return this.split(target).join("");
		};
		
		String.prototype.Without = function (without: string[]): string {
			let ret: string = this;
			without.Each((s: string) => ret = ret.Remove(s));
			return ret;
		};
		
		String.prototype.Skip = function (val: number): string {
			return this.substr(val)
		};
		
		String.prototype.Take = function (val?: number): string {
			return val == null ? this.length === 0 ? "" : this.charAt(0) : this.substr(0, val);
		};
		
		String.prototype.Last = function (val?: number): string {
			return val == null ? this.length === 0 ? "" : this.charAt(this.length - 1) : this.substr(this.length - val);
		};
		
		String.prototype.Omit = function (val: number): string {
			return this.substr(0, this.length - val);
		};
		
		String.prototype.Repeat = function (val: number): string {
			if (val < 0) {
				c.t("Count cannot be negative");
			}
			return this.repeat(val);
		};
		
		String.prototype.Count = function (target: string): number {
			const regExp = new RegExp(target, "gi");
			return (this.Match(regExp)).length;
		};
		
		String.prototype.Capitalize = function (): string {
			return this.Take(1).toUpperCase() + this.Skip(1);
		};
		
		String.prototype.CapitalizeWords = function (): string {
			return this.split(' ').Map(s => s.Capitalize()).join(' ');
		};
		
		String.prototype.IsAlphanumeric = function (): boolean {
			if (this.IsEmpty()) return false;
			let ret = this.split('')
				.Map(c => c.charCodeAt(0))
				.When((code: number) => !(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123), () => false);
			return ret == null;
		};
		
		String.prototype.IsHexadecimal = function (): boolean {
			if (this.IsEmpty()) return false;
			let a = parseInt(this.toLowerCase(), 16);
			return (a.toString(16) === this.toLowerCase());
		};
		
		String.prototype.LineBreak = function (): string[] {
			return this.ReplaceAll('\r\n', '\n').ReplaceAll('\r', '\n').split('\n');
		};
		
		Number.prototype.Odd = function (): boolean {
			if (!this.Int() || this === 0) return false;
			return this % 2 !== 0;
		};
		
		Number.prototype.Even = function (): boolean {
			if (!this.Int() || this === 0) return false;
			return this % 2 === 0;
		};
		
		Number.prototype.Int = function (): boolean {
			if (!c.IsNumber(this)) return false;
			return Math.abs(this % 1) < 0.000000000000001;
		};
		
		Number.prototype.Finite = function (): boolean {
			if (!c.IsAnyNumber(this)) return false;
			return !this.NaN() && isFinite(this);
		};
		Number.prototype.Infinite = function (): boolean {
			if (!c.IsAnyNumber(this)) return false;
			return !this.NaN() && !isFinite(this);
		};
		Number.prototype.NaN = function (): boolean {
			return isNaN(this);
		};
		Number.prototype.RoundOff = function (): number {
			c.A(this);
			let m = this < 0 ? -1 : 1;
			return m * Math.round(m * this);
		};
		Number.prototype.Ceil = function (): number {
			c.A(this);
			let m = this < 0 ? -1 : 1;
			return m * Math.ceil(m * this);
		};
		Number.prototype.Floor = function (): number {
			c.A(this);
			let m = this < 0 ? -1 : 1;
			return m * Math.floor(m * this);
		};
		Number.prototype.Abs = function (): number {
			c.A(this);
			return Math.abs(this);
		};
		Number.prototype.Root = function (): number {
			c.A(this);
			if (this < 0) c.t("Can't root negative");
			return Math.sqrt(this);
		};
		Number.prototype.ToInt = function (): number {
			return c.i(this as number);
		};
		Number.prototype.ToFloat = function (): number {
			return c.f(this as number);
		};
		String.prototype.ToInt = function (): number {
			return c.i(this as string);
		};
		String.prototype.ToFloat = function (): number {
			return c.f(this as string);
		};
		
		Number.prototype.AtMax = function (max: number): number {
			c.A(this);
			return Math.min(this, max);
		};
		Number.prototype.AtMin = function (min: number): number {
			c.A(this);
			return Math.max(this, min);
		};
		Number.prototype.Clamp = function (constrain1: number, constrain2: number): number {
			c.A(this);
			return this.AtMax(constrain1.AtMin(constrain2)).AtMin(constrain1.AtMax(constrain2));
		};
		
		Number.prototype.RandomTo = function (to: number, integer?: boolean): number {
			c.A(this);
			if (integer) {
				return (this + Math.random() * (to - this + 1)).Floor();
			} else {
				return (this + Math.random() * (to - this + 1)).AtMax(to);
			}
		};
		
		Number.prototype.RandomFor = function (to: number, integer?: boolean): number {
			return this.RandomTo(this + to - 1, integer);
		};
		
		Array.prototype.Flatten = function <X>(): X[] {
			return this.length === 0 ? [] : this.Reduce((a, b) => a.concat(b));
		};
		
		Array.prototype.Merge = function <T, V>(values: V[]): Map<T, V> {
			if (this.length !== values.length) throw "Array has to be same length";
			let map: Map<T, V> = new Map<T, V>();
			this.Each((e: T, i: number) => map.set(e, values[i]));
			return map;
		};
		
		Array.prototype.AsKey = function <T, V>(valueFunction: (value: T, index: number) => V): Map<T, V> {
			let map: Map<T, V> = new Map<T, V>();
			this.Each((e: T, i: number) => map.set(e, valueFunction(e, i)));
			return map;
		};
		
		Array.prototype.AsValue = function <K, T>(keyFunction: (value: T, index: number) => K): Map<K, T> {
			let map: Map<K, T> = new Map<K, T>();
			this.Each((e: T, i: number) => map.set(keyFunction(e, i), e));
			return map;
		};
		
		Array.prototype.TrimAll = function (): string[] {
			return this.Map((s: string) => s.trim());
		};
		
		Array.prototype.Sort = function (type: SortMethod, Definier: (i) => number | string) {
			let nArr = this.slice();
			if (Definier == null) {
				if ((type.IsNum && !c.IsNumberArray(nArr)) || (!c.IsStringArray(nArr) && !type.IsNum)) {
					c.t("Please provide scoring strategy");
				}
			}
			if (Definier == null) Definier = (a => a) as any;
			let o = (type === SortType.Ascending || type === SortType.AtoZ) ? 1 : -1;
			let f: Function = (a, b) => (type.IsNum ? (Definier!(a) > Definier!(b) ? 1 : -1) : c.lc(Definier!(a) as string, Definier!(b) as string)) * o;
			nArr.sort(f);
			return nArr;
		};
		
		Array.prototype.Reverse = function <T>(): T[] {
			let ret: T[] = [];
			this.Each((e: T) => ret.push(e), true);
			return ret;
		};
		
		Array.prototype.Has = function <T>(target: T, deep: boolean = false): boolean {
			return this.When((e: T) => c.Eq(e, target, deep), () => true) || false;
		};
		
		Array.prototype.Where = function <T>(predicate: (e: T, i: number) => boolean): T[] {
			let ret: T[] = [];
			this.When(predicate, (e: T) => { ret.push(e)}, false);
			return ret;
		};
		
		Array.prototype.Map = function <T, X>(application: (e: T, i: number) => X): X[] {
			let ret: X[] = [];
			this.Each((e: T, i: number) => ret.push(application(e, i)));
			return ret;
		};
		
		Array.prototype.Each = function <T>(application: (e: T, i: number) => void, reverse: boolean = false): T[] {
			if (!reverse) {
				for (let i = 0; i < this.length; i++) {
					application(this[i], i);
				}
				return this;
			}
			for (let i = this.length - 1; i >= 0; i--) {
				application(this[i], i);
			}
			return this;
		};
		
		Array.prototype.RemoveValue = function <T>(target: T, deep: boolean = false): T[] {
			return this.Where((e: T) => !c.Eq(e, target, deep));
		};
		
		Array.prototype.Without = function <T>(arr: T[], deep: boolean = false): T[] {
			return this.Where((e: T) => !arr.Has(e, deep));
		};
		
		Array.prototype.WithoutIndex = function <T>(w: number[]): T[] {
			return this.Where((e: T, i: number) => !w.Has(i));
		};
		
		Array.prototype.Fill = function <T>(amt: number, fillFunction: (i: number) => T): T[] {
			let arr = this.slice();
			for (let i = 0; i < amt; i++) {
				arr.push(fillFunction(i));
			}
			return arr;
		};
		
		Array.prototype.RemoveIndex = function <T>(index: number): T[] {
			return this.Where((e: T, i: number) => i !== index);
		};
		
		Array.prototype.Take = function <T>(val?: number): T[] | T | null {
			if (val == null) {
				if (this.length === 0) return null;
				return this[0];
			}
			return this.slice(0, val);
		};
		
		Array.prototype.TakeWhile = function <T>(predicate: (e: T, index: number) => boolean): T[] {
			let ret: T[] = [];
			this.When(predicate, (e: T) => {ret.push(e)}, true);
			return ret;
		};
		
		Array.prototype.Skip = function <T>(val: number): T[] {
			return this.slice(val);
		};
		
		Array.prototype.SkipWhile = function <T>(predicate: (e: T, i: number) => boolean): T[] {
			let skip = 0;
			this.When(predicate, () => {skip++}, true);
			return this.Skip(skip);
		};
		
		Array.prototype.Omit = function <T>(val: number): T[] {
			return this.slice(0, -val);
		};
		
		Array.prototype.OmitWhile = function <T>(predicate: (e: T, i: number) => boolean): T[] {
			let cut: number = 0;
			this.Reverse().When(predicate, () => {cut++}, true);
			return this.Omit(cut);
		};
		
		Array.prototype.Last = function <T>(val?: number): T[] | T | null {
			if (val == null) {
				if (this.length === 0) return null;
				return this[this.length - 1];
			}
			let sv = this.length - val;
			return this.slice(sv > 0 ? sv : 0);
		};
		
		Array.prototype.LastWhile = function <T>(predicate: (e: T, i: number) => boolean): T[] {
			let last: number = 0;
			this.Reverse().When(predicate, () => {last++}, true);
			return this.Last(last);
		};
		
		Array.prototype.FirstIndexOf = function <T>(target: T, deep: boolean = false): number {
			return this.FindIndex((e: T) => c.Eq(e, target, deep));
		};
		
		Array.prototype.Count = function <T>(target: T, deep: boolean = false): number {
			return this.Where(s => c.Eq(s, target, deep)).length;
		};
		
		Array.prototype.Indexes = function <T>(target: T, deep: boolean = false): number[] {
			let index: number[] = [];
			this.When((e: T) => c.Eq(e, target, deep), (e: T, i: number) => {index.push(i)});
			return index;
		};
		
		Array.prototype.Unique = function <T>(deep: boolean = false): T[] {
			
			return this.Where((e: T, i: number) => this.FirstIndexOf(e, deep) === i);
		};
		
		Array.prototype.Union = function <T>(arr: T[], deep: boolean = false): T[] {
			return this.concat(arr).Unique(deep);
		};
		
		Array.prototype.Intersect = function <T>(arr: T[], deep: boolean = false): T[] {
			return this.Unique(deep).Where(e => arr.Has(e, deep));
		};
		
		Array.prototype.Outer = function <T>(ar: T[], deep: boolean = false): T[] {
			return this.Union(ar, deep).Without(this.Intersect(ar, deep), deep);
		};
		
		// noinspection JSUnusedLocalSymbols
		Array.prototype.Max = function <T>(f: (t: T, i: number) => number = (t: T, i: number) => t as any as number): T {
			return this.Reverse()
				.Reduce((a: T, b: T, i: number) => {
					return f(a, i - 1) > f(b, i) ? a : b
				});
		};
		
		// noinspection JSUnusedLocalSymbols
		Array.prototype.Min = function <T>(f: (t: T, i: number) => number = (t: T, i: number) => t as any as number): T {
			return this.Reverse()
				.Reduce((a: T, b: T, i: number) => {
					return f(a, i - 1) < f(b, i) ? a : b
				});
		};
		
		Array.prototype.Sum = function <T>(f: (t: T, i: number) => number = (t) => t as any as number): number {
			return this.Map((e: T, i: number) => f(e, i))
				.Reduce((a: number, b: number) => a + b);
		};
		
		Array.prototype.Reduce = function <T>(r: (a: T, b: T, i: number) => T): T {
			if (this.length === 0) c.t("Empty Array");
			if (this.length === 1) return this[0];
			let ret: T = this[0];
			for (let i = 1; i < this.length; i++) {
				ret = r(ret as T, this[i], i - 1);
			}
			return ret;
		};
		
		Array.prototype.Find = function <T>(predicate: (e: T, i: number) => boolean): T | null {
			let ret = this.When(predicate, (e: T) => e);
			return ret == null ? null : ret;
		};
		
		Array.prototype.FindIndex = function <T>(predicate: (e: T, i: number) => boolean): number | null {
			let ret = this.When(predicate, (e: T, i: number) => i);
			return ret == null ? null : ret;
		};
		
		Array.prototype.Any = function <T>(predicate: (e: T, i: number) => boolean): boolean {
			return this.When(predicate, () => true) || false;
		};
		
		Array.prototype.All = function <T>(predicate: (e: T, i: number) => boolean): boolean {
			return !this.Any((e: T, i: number) => !predicate(e, i));
		};
		
		Array.prototype.When = function <T>(predicate: (e: T, i: number) => boolean, ifTrue: (e: T, i: number) => any, breakWhenFalse: boolean = false): any {
			for (let i = 0; i < this.length; i++) {
				if (predicate(this[i], i)) {
					let ret: any = ifTrue(this[i], i);
					if (typeof ret !== "undefined") {
						return ret;
					}
				} else {
					if (breakWhenFalse) {
						break;
					}
				}
			}
		};
		
		Array.prototype.Random = function <T>(): T | null {
			if (this.length === 0) return null;
			if (this.length === 1) return this[0];
			return this[(0).RandomFor(this.length, true)];
		};
		
		
		Map.prototype.TrimValue = function <K>(): Map<K, string> {
			return this.MapValue(v => v.trim());
		};
		
		Map.prototype.SortByKey = function <K, V>(type: SortMethod, Definer?: (k: K) => number | string): Map<K, V> {
			let arr: [K, V][] = this.Arr();
			arr = arr.Sort(type, Definer == null ? e => e[0] : e => Definer(e[0]) as any);
			return new Map(arr);
		};
		
		Map.prototype.SortByValue = function <K, V>(type: SortMethod, Definer?: (v: V) => number | string): Map<K, V> {
			let arr: [K, V][] = this.Arr();
			arr = arr.Sort(type, Definer == null ? e => e[1] : e => Definer(e[1]) as any);
			return new Map(arr);
		};
		
		Map.prototype.Reverse = function <K, V>(): Map<K, V> {
			return new Map(this.Arr().Reverse());
		};
		
		Map.prototype.HasKey = function <K, V>(search: K, deep?: boolean): boolean {
			return this.Keys().Has(search, deep);
		};
		
		Map.prototype.HasValue = function <K, V>(search: V, deep?: boolean): boolean {
			return this.Values().Has(search, deep);
		};
		
		Map.prototype.Where = function <K, V>(predicate: (k: K, v: V) => boolean): Map<K, V> {
			return new Map(this.Arr().Where(e => c.M(e, predicate)));
		};
		
		Map.prototype.MapKey = function <K, V, T>(transform: (k: K, v: V) => T): Map<T, V> {
			let ret: Map<T, V> = new Map();
			this.Each((k: K, v: V) => ret.set(transform(k, v), v));
			return ret;
		};
		Map.prototype.MapValue = function <K, V, T>(transform: (v: V, k: K) => T): Map<K, T> {
			let ret: Map<K, T> = new Map();
			this.Each((k: K, v: V) => ret.set(k, transform(v, k)));
			return ret;
		};
		Map.prototype.Map = function <K, V, T>(transform: (k: K, v: V) => T): T[] {
			let ret: T[] = [];
			this.Each((k: K, v: V) => ret.push(transform(k, v)));
			return ret;
		};
		Map.prototype.Each = function <K, V>(transform: (k: K, v: V) => void): Map<K, V> {
			let ret: Map<K, V> = new Map();
			this.Arr().Each((e: [K, V]) => {
				transform(e[0], e[1]);
				ret.set(e[0], e[1]);
			});
			return ret;
		};
		Map.prototype.RemoveKey = function <K, V>(key: K, deep: boolean = false): Map<K, V> {
			return this.Where(k => !c.Eq(key, k, deep));
		};
		Map.prototype.RemoveValue = function <K, V>(val: V, deep: boolean = false): Map<K, V> {
			return this.Where((k, v) => !c.Eq(v, val, deep));
		};
		Map.prototype.Without = function <K, V>(keys: K[], values: V[], deep: boolean = false): Map<K, V> {
			return this.Where((k, v) => !keys.Has(k, deep) && !values.Has(v, deep));
		};
		Map.prototype.Take = function <K, V>(val?: number): any {
			if (val == null) {
				let l = this.Arr().Take();
				return l == null ? null : c.P(l);
			}
			return new Map(this.Arr().Take(val));
		};
		Map.prototype.TakeWhile = function <K, V>(predicate: (k: K, v: V) => boolean): Map<K, V> {
			return new Map(this.Arr().TakeWhile(e => c.M(e, predicate)));
		};
		Map.prototype.Skip = function <K, V>(val: number): Map<K, V> {
			return new Map(this.Arr().Skip(val));
		};
		Map.prototype.SkipWhile = function <K, V>(predicate: (k: K, v: V) => boolean): Map<K, V> {
			return new Map(this.Arr().SkipWhile(e => c.M(e, predicate)));
		};
		Map.prototype.Omit = function <K, V>(val: number): Map<K, V> {
			return new Map(this.Arr().Omit(val));
		};
		Map.prototype.OmitWhile = function <K, V>(predicate: (k: K, v: V) => boolean): Map<K, V> {
			return new Map(this.Arr().OmitWhile(e => c.M(e, predicate)));
		};
		Map.prototype.Last = function <K, V>(val?: number): any {
			if (val == null) {
				let l = this.Arr().Last();
				return l == null ? null : c.P(l);
			}
			return new Map(this.Arr().Last(val));
		};
		Map.prototype.LastWhile = function <K, V>(predicate: (k: K, v: V) => boolean): Map<K, V> {
			return new Map(this.Arr().LastWhile(e => c.M(e, predicate)));
		};
		Map.prototype.Arr = function <K, V>(): [K, V][] {
			return Array.from(this.entries());
		};
		Map.prototype.Keys = function <K, V>(): K[] {
			return Array.from(this.keys());
		};
		Map.prototype.Values = function <K, V>(): V[] {
			return Array.from(this.values());
		};
		Map.prototype.AsObject = function <K>(key: (k: K) => string = (k: K) => k.toString()): object {
			let ret: any = {};
			this.MapKey(key).Each((k, v) => ret[k] = v);
			return ret;
		};
		Map.prototype.Find = function <K, V>(predicate: (k: K, v: V) => boolean): { key: K, value: V } | null {
			let pair: [K, V] | null = this.Arr().Find(e => c.M(e, predicate));
			if (pair == null) return null;
			return c.P(pair);
		};
		Map.prototype.Max = function <K, V>(f: (k: K, v: V) => number): { key: K, value: V } {
			return c.P(this.Arr().Max(e => f(e[0], e[1])));
		};
		Map.prototype.Min = function <K, V>(f: (k: K, v: V) => number): { key: K, value: V } {
			return c.P(this.Arr().Min(e => f(e[0], e[1])));
		};
		Map.prototype.Sum = function <K, V>(f: (k: K, v: V) => number): number {
			return this.Arr().Sum(e => f(e[0], e[1]));
		};
		Map.prototype.Reduce = function <K, V>(r: (aV: { key: K, value: V }, bV: { key: K, value: V }) => { key: K, value: V }): { key: K, value: V } {
			return this.Arr().Map(e => c.P(e)).Reduce(r);
		};
		Map.prototype.Any = function <K, V>(predicate: (k: K, v: V) => boolean): boolean {
			return this.Arr().Any(e => c.M(e, predicate));
		};
		Map.prototype.All = function <K, V>(predicate: (k: K, v: V) => boolean): boolean {
			return this.Arr().All(e => c.M(e, predicate));
		}
	}
	
	DeepEqual(a: any, b: any): boolean {
		let c = this;
		if (a === b) return true;
		if (typeof a === "undefined" || typeof b === "undefined") return false;
		if (a === null || b === null) return false;
		if (typeof a !== typeof b) return false;
		if (c.TC(a, b, "string")) return String(a) === String(b);
		if (c.TC(a, b, "number")) return isNaN(a) ? isNaN(b) : a === b;
		if (c.TC(a, b, "boolean")) return a === b;
		if (a instanceof Date) {
			return a.valueOf() === b.valueOf();
		}
		
		if (a.constructor !== b.constructor) return false;
		// noinspection SuspiciousInstanceOfGuard
		if (a instanceof Function || a instanceof RegExp) return a.toString() === b.toString();
		// noinspection SuspiciousInstanceOfGuard
		if (this.IsArray(a)) {
			if (!this.IsArray(b)) return false;
			if (a.length !== b.length) return false;
		}
		
		// noinspection SuspiciousInstanceOfGuard
		// noinspection SuspiciousInstanceOfGuard
		// noinspection SuspiciousInstanceOfGuard
		// noinspection SuspiciousInstanceOfGuard
		if (a instanceof Object && b instanceof Object) {
			const p = Object.keys(a);
			return Object.keys(b).every((i) => { return p.indexOf(i) !== -1; }) &&
				p.every(function (i) { return c.Eq(a[i], b[i], true); });
		}
		return false;
		
	}
	
	IsAnyString(any: any): boolean {
		return typeof any === "string" || any instanceof String;
	}
	
	IsString(any: any): boolean {
		if (!this.IsAnyString(any)) return false;
		let s: string = any;
		return s.trim() !== "";
	}
	
	IsAnyNumber(any: any): boolean {
		if (any == null) return false;
		return typeof any === "number" || any instanceof Number;
	}
	
	IsNumber(any: any, allowString: boolean = false): boolean {
		if (this.IsAnyNumber(any)) {
			return !isNaN(any as number) && isFinite(any as number);
		}
		if (this.IsAnyString(any) && allowString) {
			let n: number = parseFloat(any as string);
			return !isNaN(n) && isFinite(n);
		}
		return false;
	}
	
	IsArray(arr: any): boolean {
		return Array.isArray(arr);
	}
	
	IsBooleanArray(arr: any[]): arr is boolean[] {
		return this.I(arr, "boolean");
	}
	
	IsNumberArray(arr: any[]): arr is number[] {
		return this.I(arr, "number");
	}
	
	IsStringArray(arr: any[]): arr is string[] {
		return this.I(arr, "string");
	}
	
	Random(N: number): string {
		let chars: string[] = this.m.Skip(34).split('');
		return [].Fill<string>(N, () => chars.Random()!).join('');
	}
	
	WrapArray<T>(arr: T[] | T): T[] {
		if (!this.IsArray(arr)) return [arr as T];
		return arr as T[];
	}
	
	FlattenObject(obj: object): Map<string, any> {
		let ret: Map<string, any> = new Map();
		for (let k in obj) {
			if (obj.hasOwnProperty(k)) {
				ret.set(k, obj[k]);
			}
		}
		return ret;
	}
	
	Eq(a: any, b: any, deep: boolean): boolean {
		if (deep) return this.DeepEqual(a, b);
		return a === b;
	}
	
	private I(a: any[], type: string) {
		return this.IsArray(a) && a.every(item => typeof item === type);
	}
	
	
	/*============
	 private methods
	 ============*/
	
	//Throws exception
	private t(s: string): void {
		throw new Error(s);
	}
	
	//Locale compare
	private lc(a: string, b: string) {
		let charA: string = '', charB: string = '', index = 0;
		let s: boolean = a.length === b.length;
		while (charA === charB && index < 100) {
			charA = (s ? a : a.toLowerCase()).charAt(index);
			charB = (s ? b : b.toLowerCase()).charAt(index);
			index++;
		}
		return (this.m.indexOf(charA) - this.m.indexOf(charB)).Clamp(-1, 1);
	}
	
	private TC(a: any, b: any, type: string) {
		return typeof a === type && typeof b === type;
	}
	
	//map for mapping array in to KV Pair
	// noinspection JSMethodCanBeStatic
	private M<K, V>(e: [K, V], predicate: (k: K, v: V) => boolean): boolean {
		return predicate(e[0], e[1]);
	}
	
	//For key value pairs from tuple, for maps
	// noinspection JSMethodCanBeStatic
	// noinspection JSMethodCanBeStatic
	private P<K, V>(e: [K, V]): { key: K, value: V } {
		return {key: e[0], value: e[1]}
	}
	
	
	//To integer
	private i(string: string | number): number {
		this.A(string);
		if (this.IsAnyString(string)) {
			return parseInt(string as string);
		} else {
			return Math.trunc(string as number);
		}
	}
	
	//To float
	private f(string: string | number): number {
		this.A(string);
		return parseFloat(string as string);
		
	}
	
	//Assert that its a number
	private A(a: any) {
		if (!this.IsNumber(a, true)) this.t("Invalid Number");
	}
	
	// private fileCheck(path: any): string {
	// 	if (!this.IsFile(path)) this.t("Invalid path: " + path);
	// 	return this.parseFile(path);
	// }
	//
	// // noinspection JSMethodCanBeStatic
	// private parseFile(path: string): string {
	// 	return path.ReplaceAll("\\\\", "/");
	// }
	//
	// private IsFile(path: any): boolean {
	// 	if (!this.IsString(path)) return false;
	// 	let s: string = this.parseFile(path as string);
	// 	if (s.Starts(".")) return true;
	// 	return s.split('.').length > 1;
	// }
	
}

