/*! For license information please see 2.feea8a5f.chunk.js.LICENSE.txt */
(this["webpackJsonpslowroads.io"]=this["webpackJsonpslowroads.io"]||[]).

    push([[2],[function(e, t, n) {
        "use strict";
        e.exports = n(49)
    },

    function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return zs
        })),n.d(t, "b", (function() {
            return Ys
        })),n.d(t, "c", (function() {
            return Xs
        })),n.d(t, "d", (function() {
            return Bs
        })),n.d(t, "e", (function() {
            return An
        })),n.d(t, "f", (function() {
            return Zt
        })),n.d(t, "g", (function() {
            return ln
        })),n.d(t, "h", (function() {
            return f
        })),n.d(t, "i", (function() {
            return _e
        })),n.d(t, "j", (function() {
            return Os
        })),n.d(t, "k", (function() {
            return a
        })),n.d(t, "l", (function() {
            return G
        })),n.d(t, "m", (function() {
            return yt
        })),n.d(t, "n", (function() {
            return Ms
        })),n.d(t, "o", (function() {
            return Qt
        })),n.d(t, "p", (function() {
            return Ea
        })),n.d(t, "q", (function() {
            return Ma
        })),n.d(t, "r", (function() {
            return ga
        })),n.d(t, "s", (function() {
            return As
        })),n.d(t, "t", (function() {
            return Ca
        })),n.d(t, "u", (function() {
            return Da
        })),n.d(t, "v", (function() {
            return Fa
        })),n.d(t, "w", (function() {
            return ka
        })),n.d(t, "x", (function() {
            return Ha
        })),n.d(t, "y", (function() {
            return bs
        })),n.d(t, "z", (function() {
            return qt
        })),n.d(t, "A", (function() {
            return lt
        })),n.d(t, "B", (function() {
            return Tn
        })),n.d(t, "C", (function() {
            return Xt
        })),n.d(t, "D", (function() {
            return ns
        })),n.d(t, "E", (function() {
            return ts
        })),n.d(t, "F", (function() {
            return es
        })),n.d(t, "G", (function() {
            return kt
        })),n.d(t, "H", (function() {
            return i
        })),n.d(t, "I", (function() {
            return In
        })),n.d(t, "J", (function() {
            return Yn
        })),n.d(t, "K", (function() {
            return Ya
        })),n.d(t, "L", (function() {
            return Wa
        })),n.d(t, "M", (function() {
            return Qs
        })),n.d(t, "N", (function() {
            return $a
        })),n.d(t, "O", (function() {
            return d
        })),n.d(t, "P", (function() {
            return Ta
        })),n.d(t, "Q", (function() {
            return Dn
        })),n.d(t, "R", (function() {
            return Qe
        })),n.d(t, "S", (function() {
            return Qa
        })),n.d(t, "T", (function() {
            return Is
        })),n.d(t, "U", (function() {
            return Ts
        })),n.d(t, "V", (function() {
            return ae
        })),n.d(t, "W", (function() {
            return Re
        })),n.d(t, "X", (function() {
            return Sa
        }));const
        r = "144", i = 2, a = 2, s = 100, o = 301, l = 302, c = 303, u = 304, h = 306, d = 1e3, f = 1001, p = 1002, m = 1003, g = 1004, v = 1005, y = 1006, _ = 1008, x = 1009, b = 1014, w = 1015, S = 1016, M = 1020, E = 1023, T = 1026, C = 1027, A = 33776, L = 33777, P = 33778, R = 33779, D = 2300, k = 2301, I = 2302, N = 2400, O = 2401, z = 2402, U = 3e3, F = 3001, B = "srgb", V = "srgb-linear", H = 7680, W = 35044, G = 35048, j = "300 es", q = 1035;
        class X {
            addEventListener(e, t) {
                void 0 == = this._listeners && (this._listeners = {});const n = this._listeners;
                void 0 == = n[e] && (n[e] =[]),-1 == = n[e].indexOf(t) && n[e].push(t)
            }

            hasEventListener(e, t) {
                if ( void 0 == = this._listeners)return !1;const n = this._listeners;
                return void 0 != = n[e] && -1 != = n[e].indexOf(t)
            }

            removeEventListener(e, t) {
                if ( void 0 == = this._listeners)return;const n = this._listeners[e];
                if ( void 0 != = n){const e = n.indexOf(t);
                    -1 != = e && n.splice(e, 1)
                }
            }

            dispatchEvent(e) {
                if ( void 0 == = this._listeners)return;const t = this._listeners[e.type];
                if ( void 0 != = t){
                    e.target = this;const n = t.slice(0);
                    for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
                    e.target = null
                }
            }
        }const Y =[
        "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
        ;const K = Math.PI / 180, Z = 180 / Math.PI;
        function J () {const
            e = 4294967295 * Math.random() | 0, t = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, r = 4294967295 * Math.random() | 0;
            return (Y[255 & e] + Y[e >> 8 & 255] + Y[e >> 16 & 255] + Y[e >> 24 & 255] + "-" + Y[255 & t] + Y[t >> 8 & 255] + "-" + Y[t >> 16 & 15 | 64] + Y[t >> 24 & 255] + "-" + Y[63 & n | 128] + Y[n >> 8 & 255] + "-" + Y[n >> 16 & 255] + Y[n >> 24 & 255] + Y[255 & r] + Y[r >> 8 & 255] + Y[r >> 16 & 255] + Y[r >> 24 & 255]).toLowerCase()
        } function $ (e, t, n){
            return Math.max(t, Math.min(n, e))
        } function Q (e, t){
            return (e % t + t) % t
        } function ee (e, t, n){
            return (1 - n) * e + n * t
        } function te (e) { return 0 == = (e & e - 1) && 0 != = e}function ne (e) {
        return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))}function re (e, t){
            switch (t.constructor) {
                case Float32Array:
                    return e;
                case Uint16Array:
                    return e / 65535;
                case Uint8Array:
                    return e / 255;
                case Int16Array:
                    return Math.max(e / 32767, -1);
                case Int8Array:
                    return Math.max(e / 127, -1);
                default:
                    throw new Error("Invalid component type.")
            }
        } function ie (e, t){
            switch (t.constructor) {
                case Float32Array:
                    return e;
                case Uint16Array:
                    return Math.round(65535 * e);
                case Uint8Array:
                    return Math.round(255 * e);
                case Int16Array:
                    return Math.round(32767 * e);
                case Int8Array:
                    return Math.round(127 * e);
                default:
                    throw new Error("Invalid component type.")
            }
        } class ae {
            constructor(e=0, t=0) {
                ae.prototype.isVector2 = !0, this.x = e, this.y = t
            }

            get width() {
                return this.x
            }

            set width(e) {
                this.x = e
            }

            get height() {
                return this.y
            }

            set height(e) {
                this.y = e
            }

            set(e, t) {
                return this.x = e,this.y = t, this
            }

            setScalar(e) {
                return this.x = e,this.y = e, this
            }

            setX(e) {
                return this.x = e,this
            }

            setY(e) {
                return this.y = e,this
            }

            setComponent(e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                } return this
            }

            getComponent(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }

            clone() {
                return new this.constructor(this.x, this.y)
            }

            copy(e) {
                return this.x = e.x,this.y = e.y, this
            }

            add(e) {
                return this.x += e.x,this.y += e.y, this
            }

            addScalar(e) {
                return this.x += e,this.y += e, this
            }

            addVectors(e, t) {
                return this.x = e.x + t.x,this.y = e.y + t.y, this
            }

            addScaledVector(e, t) {
                return this.x += e.x * t,this.y += e.y * t, this
            }

            sub(e) {
                return this.x -= e.x,this.y -= e.y, this
            }

            subScalar(e) {
                return this.x -= e,this.y -= e, this
            }

            subVectors(e, t) {
                return this.x = e.x - t.x,this.y = e.y - t.y, this
            }

            multiply(e) {
                return this.x *= e.x,this.y *= e.y, this
            }

            multiplyScalar(e) {
                return this.x *= e,this.y *= e, this
            }

            divide(e) {
                return this.x /= e.x,this.y /= e.y, this
            }

            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }

            applyMatrix3(e) {const t = this.x, n = this.y, r = e.elements;
                return this.x = r[0] * t + r[3] * n + r[6],this.y = r[1] * t + r[4] * n + r[7], this
            }

            min(e) {
                return this.x = Math.min(this.x, e.x),this.y = Math.min(this.y, e.y), this
            }

            max(e) {
                return this.x = Math.max(this.x, e.x),this.y = Math.max(this.y, e.y), this
            }

            clamp(e, t) {
                return this.x = Math.max(e.x, Math.min(t.x, this.x)),this.y = Math.max(e.y, Math.min(t.y, this.y)), this
            }

            clampScalar(e, t) {
                return this.x = Math.max(e, Math.min(t, this.x)),this.y = Math.max(e, Math.min(t, this.y)), this
            }

            clampLength(e, t) {const n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
            }

            floor() {
                return this.x = Math.floor(this.x),this.y = Math.floor(this.y), this
            }

            ceil() {
                return this.x = Math.ceil(this.x),this.y = Math.ceil(this.y), this
            }

            round() {
                return this.x = Math.round(this.x),this.y = Math.round(this.y), this
            }

            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
            }

            negate() {
                return this.x = -this.x,this.y = -this.y, this
            }

            dot(e) {
                return this.x * e.x + this.y * e.y
            }

            cross(e) {
                return this.x * e.y - this.y * e.x
            }

            lengthSq() {
                return this.x * this.x + this.y * this.y
            }

            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }

            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y)
            }

            normalize() {
                return this.divideScalar(this.length() || 1)
            }

            angle() {
                return Math.atan2(-this.y, -this.x) + Math.PI
            }

            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }

            distanceToSquared(e) {const t = this.x - e.x, n = this.y - e.y;
                return t * t + n * n
            }

            manhattanDistanceTo(e) {
                return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
            }

            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }

            lerp(e, t) {
                return this.x += (e.x - this.x) * t,this.y += (e.y - this.y) * t, this
            }

            lerpVectors(e, t, n) {
                return this.x = e.x + (t.x - e.x) * n,this.y = e.y + (t.y - e.y) * n, this
            }

            equals(e) {
                return e.x == = this.x && e.y == = this.y
            }

            fromArray(e, t=0) {
                return this.x = e[t],this.y = e[t + 1], this
            }

            toArray(e=[], t=0) {
                return e[t] = this.x,e[t + 1] = this.y, e
            }

            fromBufferAttribute(e, t) {
                return this.x = e.getX(t),this.y = e.getY(t), this
            }

            rotateAround(e, t) {const n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
                return this.x = i * n - a * r + e.x,this.y = i * r + a * n + e.y, this
            }

            random() {
                return this.x = Math.random(),this.y = Math.random(), this
            }*[Symbol.iterator]()

            {
                yield this.x,yield this.y
            }
        } class se {
            constructor() {
                se.prototype.isMatrix3 = !0, this.elements =[1, 0, 0, 0, 1, 0, 0, 0, 1]}

            set(e, t, n, r, i, a, s, o, l) {const c = this.elements;
                return c[0] = e,c[1] = r, c[2] = s, c[3] = t, c[4] = i, c[5] = o, c[6] = n, c[7] = a, c[8] = l, this
            }

            identity() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),this
            }

            copy(e) {const t = this.elements, n = e.elements;
                return t[0] = n[0],
                t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
            }

            extractBasis(e, t, n) {
                return e.setFromMatrix3Column(this, 0),
                t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
            }

            setFromMatrix4(e) {const t = e.elements;
                return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),this
            }

            multiply(e) {
                return this.multiplyMatrices(this, e)
            }

            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }

            multiplyMatrices(e, t) {const
                n = e.elements, r = t.elements, i = this.elements, a = n[0], s = n[3], o = n[6], l = n[1], c = n[4], u = n[7], h = n[2], d = n[5], f = n[8], p = r[0], m = r[3], g = r[6], v = r[1], y = r[4], _ = r[7], x = r[2], b = r[5], w = r[8];
                return i[0] = a * p + s * v + o * x,
                i[3] = a * m + s * y + o * b, i[6] = a * g + s * _ + o * w, i[1] = l * p + c * v + u * x, i[4] = l * m + c * y + u * b, i[7] = l * g + c * _ + u * w, i[2] = h * p + d * v + f * x, i[5] = h * m + d * y + f * b, i[8] = h * g + d * _ + f * w, this
            }

            multiplyScalar(e) {const t = this.elements;
                return t[0] *= e,
                t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
            }

            determinant() {const
                e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], s = e[5], o = e[6], l = e[7], c = e[8];
                return t * a * c - t * s * l - n * i * c + n * s * o + r * i * l - r * a * o
            }

            invert() {const
                e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], s = e[5], o = e[6], l = e[7], c = e[8], u = c * a - s * l, h = s * o - c * i, d = l * i - a * o, f = t * u + n * h + r * d;
                if (0 == = f) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);const p = 1 / f;
                return e[0] = u * p,
                e[1] = (r * l - c * n) * p, e[2] = (s * n - r * a) * p, e[3] = h * p, e[4] = (c * t - r * o) * p, e[5] = (r * i - s * t) * p, e[6] = d * p, e[7] = (n * o - l * t) * p, e[8] = (a * t - n * i) * p, this
            }

            transpose() {
                let e;const t = this.elements;
                return e = t[1],
                t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
            }

            getNormalMatrix(e) {
                return this.setFromMatrix4(e).invert().transpose()
            }

            transposeIntoArray(e) {const t = this.elements;
                return e[0] = t[0],
                e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
            }

            setUvTransform(e, t, n, r, i, a, s) {const o = Math.cos(i), l = Math.sin(i);
                return this.set(n * o, n * l, -n * (o * a + l * s) + a + e, -r * l, r * o, -r * (-l * a + o * s) + s + t, 0, 0, 1),
                this
            }

            scale(e, t) {const n = this.elements;
                return n[0] *= e,n[3] *= e, n[6] *= e, n[1] *= t, n[4] *= t, n[7] *= t, this
            }

            rotate(e) {const
                t = Math.cos(e), n = Math.sin(e), r = this.elements, i = r[0], a = r[3], s = r[6], o = r[1], l = r[4], c = r[7];
                return r[0] = t * i + n * o,
                r[3] = t * a + n * l, r[6] = t * s + n * c, r[1] = -n * i + t * o, r[4] = -n * a + t * l, r[7] = -n * s + t * c, this
            }

            translate(e, t) {const n = this.elements;
                return n[0] += e * n[2],
                n[3] += e * n[5], n[6] += e * n[8], n[1] += t * n[2], n[4] += t * n[5], n[7] += t * n[8], this
            }

            equals(e) {const t = this.elements, n = e.elements;
                for (let r = 0; r < 9; r++) if (t[r] != = n[r]) return !1; return !0
            }

            fromArray(e, t=0) {
                for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
                return this
            }

            toArray(e=[], t=0) {const n = this.elements;
                return e[t] = n[0],
                e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
            }

            clone() {
                return (new this.constructor).fromArray(this.elements)
            }
        } function oe (e) { for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
        return !1}
        Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
        function le (e) { return document.createElementNS("http://www.w3.org/1999/xhtml", e)}function ce (e) {
        return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)}function ue (e) {
        return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055}const he = {[B]:{[V]:ce
        },[V]:{[B]:ue
        }},de = {legacyMode:!0, get workingColorSpace() {
            return V
        },set workingColorSpace (e) {console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")}, convert:
        function(e, t, n) {
            if (this.legacyMode || t == = n || !t || !n) return e; if (he[t] && void 0 != = he[t][n])
            {const r = he[t][n];
                return e.r = r(e.r),e.g = r(e.g), e.b = r(e.b), e
            } throw new Error("Unsupported color space conversion.")
        },fromWorkingColorSpace:
        function(e, t) {
            return this.convert(e, this.workingColorSpace, t)
        },toWorkingColorSpace:
        function(e, t) {
            return this.convert(e, t, this.workingColorSpace)
        }},fe = {aliceblue:15792383, antiquewhite:16444375, aqua:65535, aquamarine:8388564, azure:15794175, beige:
        16119260, bisque:16770244, black:0, blanchedalmond:16772045, blue:255, blueviolet:9055202, brown:
        10824234, burlywood:14596231, cadetblue:6266528, chartreuse:8388352, chocolate:13789470, coral:
        16744272, cornflowerblue:6591981, cornsilk:16775388, crimson:14423100, cyan:65535, darkblue:139, darkcyan:
        35723, darkgoldenrod:12092939, darkgray:11119017, darkgreen:25600, darkgrey:11119017, darkkhaki:
        12433259, darkmagenta:9109643, darkolivegreen:5597999, darkorange:16747520, darkorchid:10040012, darkred:
        9109504, darksalmon:15308410, darkseagreen:9419919, darkslateblue:4734347, darkslategray:3100495, darkslategrey:
        3100495, darkturquoise:52945, darkviolet:9699539, deeppink:16716947, deepskyblue:49151, dimgray:6908265, dimgrey:
        6908265, dodgerblue:2003199, firebrick:11674146, floralwhite:16775920, forestgreen:2263842, fuchsia:
        16711935, gainsboro:14474460, ghostwhite:16316671, gold:16766720, goldenrod:14329120, gray:8421504, green:
        32768, greenyellow:11403055, grey:8421504, honeydew:15794160, hotpink:16738740, indianred:13458524, indigo:
        4915330, ivory:16777200, khaki:15787660, lavender:15132410, lavenderblush:16773365, lawngreen:
        8190976, lemonchiffon:16775885, lightblue:11393254, lightcoral:15761536, lightcyan:
        14745599, lightgoldenrodyellow:16448210, lightgray:13882323, lightgreen:9498256, lightgrey:13882323, lightpink:
        16758465, lightsalmon:16752762, lightseagreen:2142890, lightskyblue:8900346, lightslategray:
        7833753, lightslategrey:7833753, lightsteelblue:11584734, lightyellow:16777184, lime:65280, limegreen:
        3329330, linen:16445670, magenta:16711935, maroon:8388608, mediumaquamarine:6737322, mediumblue:
        205, mediumorchid:12211667, mediumpurple:9662683, mediumseagreen:3978097, mediumslateblue:
        8087790, mediumspringgreen:64154, mediumturquoise:4772300, mediumvioletred:13047173, midnightblue:
        1644912, mintcream:16121850, mistyrose:16770273, moccasin:16770229, navajowhite:16768685, navy:128, oldlace:
        16643558, olive:8421376, olivedrab:7048739, orange:16753920, orangered:16729344, orchid:14315734, palegoldenrod:
        15657130, palegreen:10025880, paleturquoise:11529966, palevioletred:14381203, papayawhip:16773077, peachpuff:
        16767673, peru:13468991, pink:16761035, plum:14524637, powderblue:11591910, purple:8388736, rebeccapurple:
        6697881, red:16711680, rosybrown:12357519, royalblue:4286945, saddlebrown:9127187, salmon:16416882, sandybrown:
        16032864, seagreen:3050327, seashell:16774638, sienna:10506797, silver:12632256, skyblue:8900331, slateblue:
        6970061, slategray:7372944, slategrey:7372944, snow:16775930, springgreen:65407, steelblue:4620980, tan:
        13808780, teal:32896, thistle:14204888, tomato:16737095, turquoise:4251856, violet:15631086, wheat:
        16113331, white:16777215, whitesmoke:16119285, yellow:16776960, yellowgreen:10145074},pe = {r:0, g:0, b:0},
        me = {h:0, s:0, l:0},ge = {h:0, s:0, l:0};
        function ve (e, t, n){
            return n < 0 && (n += 1),
            n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + 6 * (t - e) * (2 / 3 - n) : e
        } function ye (e, t){
            return t.r = e.r,t.g = e.g, t.b = e.b, t
        } class _e {
            constructor(e, t, n) {
                return this.isColor = !0,this.r = 1, this.g = 1, this.b = 1,void 0 == = t && void
                0 == = n ? this.set(e) : this.setRGB(e, t, n)
            }

            set(e) {
                return e && e.isColor ? this.copy(e) : "number" == = typeof e ? this.setHex(e) : "string" == = typeof
                e && this.setStyle(e), this
            }

            setScalar(e) {
                return this.r = e,this.g = e, this.b = e, this
            }

            setHex(e, t="srgb") {
                return e = Math.floor(e),
                this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, de.toWorkingColorSpace(this, t), this
            }

            setRGB(e, t, n, r="srgb-linear") {
                return this.r = e,this.g = t, this.b = n, de.toWorkingColorSpace(this, r), this
            }

            setHSL(e, t, n, r="srgb-linear") {
                if (e = Q(e, 1),t = $(t, 0, 1), n = $(n, 0, 1), 0 == = t)this.r = this.g = this.b = n;else
                {const r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
                    this.r = ve(i, r, e + 1 / 3), this.g = ve(i, r, e), this.b = ve(i, r, e - 1 / 3)
                } return de.toWorkingColorSpace(this, r),this
            }

            setStyle(e, t="srgb") {
                function n (t) { void
                0 != = t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")}
                let r;
                if (r =/^(( ?:rgb | hsl)a ?)\(([ ^\)]*)\)/.exec(e)){
                    let e;const i = r[1], a = r[2];
                    switch (i) {
                        case "rgb":
                        case "rgba":
                            if (e =/^\s * (\d +)\s *,\s * (\d +)\s *,\s * (\d +)\s * ( ?:,\s * (\d *\.?\d +)\s *)?$ /.exec(a))return this.r = Math.min(255, parseInt(e[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, de.toWorkingColorSpace(this, t), n(e[4]), this;
                        if (e =/^\s * (\d +)\%\s *,\s * (\d +)\%\s *,\s * (\d +)\%\s * ( ?:,\s * (\d *\.?\d +)\s *)?$ /.
                        exec(a))return this.r = Math.min(100, parseInt(e[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(e[2], 10)) / 100, this.b = Math.min(100, parseInt(e[3], 10)) / 100, de.toWorkingColorSpace(this, t), n(e[4]), this;
                        break;
                        case "hsl":
                        case "hsla":
                            if (e =/^\s * (\d *\.?\d +)\s *,\s * (\d *\.?\d +)\%\s *,\s * (\d *\.?\d +)\%\s * ( ?:,\s * (\d *\.?\d +)\s *)?$ /.exec(a)){const
                            r = parseFloat(e[1]) / 360, i = parseFloat(e[2]) / 100, a = parseFloat(e[3]) / 100;
                            return n(e[4]),this.setHSL(r, i, a, t)
                        }
                    }
                }else if (r =/^\#([A - Fa - f\d]+)$ /.exec(e)){const e = r[1], n = e.length;
                    if (3 == = n) return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255,
                    this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255, this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255, de.toWorkingColorSpace(this, t), this;
                    if (6 == = n) return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255,
                    this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255, this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255, de.toWorkingColorSpace(this, t), this
                } return e && e.length > 0 ? this.setColorName(e, t) : this
            }

            setColorName(e, t="srgb") {const n = fe[e.toLowerCase()];
                return void 0 != = n ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this
            }

            clone() {
                return new this.constructor(this.r, this.g, this.b)
            }

            copy(e) {
                return this.r = e.r,this.g = e.g, this.b = e.b, this
            }

            copySRGBToLinear(e) {
                return this.r = ce(e.r),this.g = ce(e.g), this.b = ce(e.b), this
            }

            copyLinearToSRGB(e) {
                return this.r = ue(e.r),this.g = ue(e.g), this.b = ue(e.b), this
            }

            convertSRGBToLinear() {
                return this.copySRGBToLinear(this),this
            }

            convertLinearToSRGB() {
                return this.copyLinearToSRGB(this),this
            }

            getHex(e="srgb") {
                return de.fromWorkingColorSpace(ye(this, pe), e),
                $(255 * pe.r, 0, 255) << 16 ^ $(255 * pe.g, 0, 255) << 8 ^ $(255 * pe.b, 0, 255) << 0
            }

            getHexString(e="srgb") {
                return ("000000" + this.getHex(e).toString(16)).slice(-6)
            }

            getHSL(e, t="srgb-linear") {
                de.fromWorkingColorSpace(ye(this, pe), t);const
                n = pe.r, r = pe.g, i = pe.b, a = Math.max(n, r, i), s = Math.min(n, r, i);
                let o, l;const c = (s + a) / 2;
                if (s == = a) o = 0, l = 0;
                else {const e = a - s;
                    switch (l = c <= .5 ? e / (a + s) : e / (2 - a - s),a){
                        case n:
                            o = (r - i) / e + (r < i ? 6 : 0);
                            break;
                        case r:
                            o = (i - n) / e + 2;
                            break;
                        case i:
                            o = (n - r) / e + 4
                    } o /= 6
                } return e.h = o,e.s = l, e.l = c, e
            }

            getRGB(e, t="srgb-linear") {
                return de.fromWorkingColorSpace(ye(this, pe), t),e.r = pe.r, e.g = pe.g, e.b = pe.b, e
            }

            getStyle(e="srgb") {
                return de.fromWorkingColorSpace(ye(this, pe), e),e != = B ?`color($ {
                    e
                } $ {
                    pe.r
                } $ {
                    pe.g
                } $ {
                    pe.b
                })`:`rgb($ {
                    255 * pe.r | 0
                },$ {
                    255 * pe.g | 0
                },$ {
                    255 * pe.b | 0
                })`}

            offsetHSL(e, t, n) {
                return this.getHSL(me),me.h += e, me.s += t, me.l += n, this.setHSL(me.h, me.s, me.l), this
            }

            add(e) {
                return this.r += e.r,this.g += e.g, this.b += e.b, this
            }

            addColors(e, t) {
                return this.r = e.r + t.r,this.g = e.g + t.g, this.b = e.b + t.b, this
            }

            addScalar(e) {
                return this.r += e,this.g += e, this.b += e, this
            }

            sub(e) {
                return this.r = Math.max(0, this.r - e.r),
                this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
            }

            multiply(e) {
                return this.r *= e.r,this.g *= e.g, this.b *= e.b, this
            }

            multiplyScalar(e) {
                return this.r *= e,this.g *= e, this.b *= e, this
            }

            lerp(e, t) {
                return this.r += (e.r - this.r) * t,this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
            }

            lerpColors(e, t, n) {
                return this.r = e.r + (t.r - e.r) * n,
                this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this
            }

            lerpHSL(e, t) {
                this.getHSL(me), e.getHSL(ge);const n = ee(me.h, ge.h, t), r = ee(me.s, ge.s, t), i = ee(me.l, ge.l, t);
                return this.setHSL(n, r, i),this
            }

            equals(e) {
                return e.r == = this.r && e.g == = this.g && e.b == = this.b
            }

            fromArray(e, t=0) {
                return this.r = e[t],this.g = e[t + 1], this.b = e[t + 2], this
            }

            toArray(e=[], t=0) {
                return e[t] = this.r,e[t + 1] = this.g, e[t + 2] = this.b, e
            }

            fromBufferAttribute(e, t) {
                return this.r = e.getX(t),this.g = e.getY(t), this.b = e.getZ(t), this
            }

            toJSON() {
                return this.getHex()
            }*[Symbol.iterator]()

            {
                yield this.r,yield this.g,yield this.b
            }
        } let xe;
        _e.NAMES = fe;
        class be {
            static getDataURL(e) {
                if (/^data:/i.test(e.src))return e.src;
                if ("undefined" == typeof HTMLCanvasElement)return e.src;
                let t;
                if (e instanceof HTMLCanvasElement) t = e;
                else {
                    void 0 == = xe && (xe = le("canvas")), xe.width = e.width, xe.height = e.height;const
                    n = xe.getContext("2d");
                    e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = xe
                }
                return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
                t.toDataURL("image/jpeg", .6)):t.toDataURL("image/png")
            }

            static sRGBToLinear(e) {
                if ("undefined" != = typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != = typeof
                HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != = typeof
                ImageBitmap && e instanceof ImageBitmap){const t = le("canvas");
                    t.width = e.width, t.height = e.height;const n = t.getContext("2d");
                    n.drawImage(e, 0, 0, e.width, e.height);const
                    r = n.getImageData(0, 0, e.width, e.height), i = r.data;
                    for (let e = 0; e < i.length; e++) i[e] = 255 * ce(i[e] / 255);
                    return n.putImageData(r, 0, 0),t
                } if (e.data) {const t = e.data.slice(0);
                    for (let e = 0; e < t.length; e++)
                        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(255 * ce(t[e] / 255)) : t[e] = ce(t[e]);
                    return {data:t, width:e.width, height:e.height}}
                return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
                e
            }
        } class we {
            constructor(e=null) {
                this.isSource = !0, this.uuid = J(), this.data = e, this.version = 0
            }

            set needsUpdate(e) {
                !0 == = e && this.version++
            }

            toJSON(e) {const t = void 0 == = e || "string" == = typeof e;
                if (!t && void 0 != = e.images[this.uuid])return e.images[this.uuid];const n = {uuid:this.uuid, url:""},
                r = this.data;
                if (null != = r) {
                    let e;
                    if (Array.isArray(r)) {
                        e =[];
                        for (let t = 0, n = r.length; t < n; t++)
                            r[t].isDataTexture ? e.push(Se(r[t].image)) : e.push(Se(r[t]))
                    } else e = Se(r); n.url = e
                } return t || (e.images[this.uuid] = n),n
            }
        } function Se (e) { return "undefined" != = typeof
        HTMLImageElement && e instanceof HTMLImageElement || "undefined" != = typeof
        HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != = typeof
        ImageBitmap && e instanceof ImageBitmap ? be.getDataURL(e) : e.data ? {data : Array.from(e.data), width:
        e.width, height:e.height, type:e.data.constructor.name}:
        (console.warn("THREE.Texture: Unable to serialize Texture."), {})}let Me = 0;
        class Ee extends X {
            constructor(e=Ee.DEFAULT_IMAGE, t=Ee.DEFAULT_MAPPING, n=f, r=f, i=1006, a=1008, s=1023, o=1009, l=1, c=3e3) {
                super(), this.isTexture = !0, Object.defineProperty(this, "id", {value:Me++}),
                this.uuid = J(), this.name = "", this.source = new we(e), this.mipmaps =[],
                this.mapping = t, this.wrapS = n, this.wrapT = r, this.magFilter = i, this.minFilter = a, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = o, this.offset = new ae(0, 0), this.repeat = new ae(1, 1), this.center = new ae(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new se, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
            }

            get image() {
                return this.source.data
            }

            set image(e) {
                this.source.data = e
            }

            updateMatrix() {
                this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
            }

            clone() {
                return (new this.constructor).copy(this)
            }

            copy(e) {
                return this.name = e.name,
                this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this
            }

            toJSON(e) {const t = void 0 == = e || "string" == = typeof e;
                if (!t && void 0 != = e.textures[this.uuid])return e.textures[this.uuid];const n = {metadata:{
                    version:
                    4.5, type:"Texture", generator:"Texture.toJSON"
                },uuid:
                this.uuid, name:this.name, image:this.source.toJSON(e).uuid, mapping:this.mapping, repeat:[
                this.repeat.x, this.repeat.y],offset:[this.offset.x, this.offset.y],center:[this.center.x, this.center.y],
                rotation:
                this.rotation, wrap:[this.wrapS, this.wrapT],format:
                this.format, type:this.type, encoding:this.encoding, minFilter:this.minFilter, magFilter:
                this.magFilter, anisotropy:this.anisotropy, flipY:this.flipY, premultiplyAlpha:
                this.premultiplyAlpha, unpackAlignment:this.unpackAlignment};
                return "{}" != = JSON.stringify(this.userData) && (n.userData = this.userData),
                t || (e.textures[this.uuid] = n), n
            }

            dispose() {
                this.dispatchEvent({type:"dispose"})}

            transformUv(e) {
                if (300 != = this.mapping) return e; if (e.applyMatrix3(this.matrix),e.x < 0 || e.x > 1)
                switch (this.wrapS) {
                    case d:
                        e.x = e.x - Math.floor(e.x);
                        break;
                    case f:
                        e.x = e.x < 0 ? 0 : 1;
                        break;
                    case p:
                        1 == = Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                } if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                    case d:
                        e.y = e.y - Math.floor(e.y);
                        break;
                    case f:
                        e.y = e.y < 0 ? 0 : 1;
                        break;
                    case p:
                        1 == = Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                } return this.flipY && (e.y = 1 - e.y),e
            }

            set needsUpdate(e) {
                !0 == = e && (this.version++, this.source.needsUpdate = !0)}
        } Ee.DEFAULT_IMAGE = null, Ee.DEFAULT_MAPPING = 300;
        class Te {
            constructor(e=0, t=0, n=0, r=1) {
                Te.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r
            }

            get width() {
                return this.z
            }

            set width(e) {
                this.z = e
            }

            get height() {
                return this.w
            }

            set height(e) {
                this.w = e
            }

            set(e, t, n, r) {
                return this.x = e,this.y = t, this.z = n, this.w = r, this
            }

            setScalar(e) {
                return this.x = e,this.y = e, this.z = e, this.w = e, this
            }

            setX(e) {
                return this.x = e,this
            }

            setY(e) {
                return this.y = e,this
            }

            setZ(e) {
                return this.z = e,this
            }

            setW(e) {
                return this.w = e,this
            }

            setComponent(e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    case 3:
                        this.w = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                } return this
            }

            getComponent(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    case 3:
                        return this.w;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }

            clone() {
                return new this.constructor(this.x, this.y, this.z, this.w)
            }

            copy(e) {
                return this.x = e.x,this.y = e.y, this.z = e.z, this.w = void 0 != = e.w ? e.w : 1, this
            }

            add(e) {
                return this.x += e.x,this.y += e.y, this.z += e.z, this.w += e.w, this
            }

            addScalar(e) {
                return this.x += e,this.y += e, this.z += e, this.w += e, this
            }

            addVectors(e, t) {
                return this.x = e.x + t.x,this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
            }

            addScaledVector(e, t) {
                return this.x += e.x * t,this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
            }

            sub(e) {
                return this.x -= e.x,this.y -= e.y, this.z -= e.z, this.w -= e.w, this
            }

            subScalar(e) {
                return this.x -= e,this.y -= e, this.z -= e, this.w -= e, this
            }

            subVectors(e, t) {
                return this.x = e.x - t.x,this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
            }

            multiply(e) {
                return this.x *= e.x,this.y *= e.y, this.z *= e.z, this.w *= e.w, this
            }

            multiplyScalar(e) {
                return this.x *= e,this.y *= e, this.z *= e, this.w *= e, this
            }

            applyMatrix4(e) {const t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
                return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i,
                this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this
            }

            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }

            setAxisAngleFromQuaternion(e) {
                this.w = 2 * Math.acos(e.w);const t = Math.sqrt(1 - e.w * e.w);
                return t < 1e-4 ? (this.x = 1,this.y = 0, this.z = 0):
                (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t),this
            }

            setAxisAngleFromRotationMatrix(e) {
                let t, n, r, i;const
                a = .01, s = .1, o = e.elements, l = o[0], c = o[4], u = o[8], h = o[1], d = o[5], f = o[9], p = o[2], m = o[6], g = o[10];
                if (Math.abs(c - h) < a && Math.abs(u - p) < a && Math.abs(f - m) < a) {
                    if (Math.abs(c + h) < s && Math.abs(u + p) < s && Math.abs(f + m) < s && Math.abs(l + d + g - 3) < s)
                        return this.set(1, 0, 0, 0),this;
                    t = Math.PI;const
                    e = (l + 1) / 2, o = (d + 1) / 2, v = (g + 1) / 2, y = (c + h) / 4, _ = (u + p) / 4, x = (f + m) / 4;
                    return e > o && e > v ? e < a ? (n = 0,r = .707106781, i = .707106781):
                    (n = Math.sqrt(e), r = y / n, i = _ / n):o > v ? o < a ? (n = .707106781, r = 0, i = .707106781):
                    (r = Math.sqrt(o), n = y / r, i = x / r):v < a ? (n = .707106781, r = .707106781, i = 0):
                    (i = Math.sqrt(v), n = _ / i, r = x / i),this.set(n, r, i, t), this
                } let v = Math.sqrt((m - f) * (m - f) + (u - p) * (u - p) + (h - c) * (h - c));
                return Math.abs(v) < .001 && (v = 1),
                this.x = (m - f) / v, this.y = (u - p) / v, this.z = (h - c) / v, this.w = Math.acos((l + d + g - 1) / 2), this
            }

            min(e) {
                return this.x = Math.min(this.x, e.x),
                this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
            }

            max(e) {
                return this.x = Math.max(this.x, e.x),
                this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
            }

            clamp(e, t) {
                return this.x = Math.max(e.x, Math.min(t.x, this.x)),
                this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
            }

            clampScalar(e, t) {
                return this.x = Math.max(e, Math.min(t, this.x)),
                this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
            }

            clampLength(e, t) {const n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
            }

            floor() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
            }

            ceil() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
            }

            round() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
            }

            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
            }

            negate() {
                return this.x = -this.x,this.y = -this.y, this.z = -this.z, this.w = -this.w, this
            }

            dot(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
            }

            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            }

            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            }

            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            }

            normalize() {
                return this.divideScalar(this.length() || 1)
            }

            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }

            lerp(e, t) {
                return this.x += (e.x - this.x) * t,
                this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
            }

            lerpVectors(e, t, n) {
                return this.x = e.x + (t.x - e.x) * n,
                this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this
            }

            equals(e) {
                return e.x == = this.x && e.y == = this.y && e.z == = this.z && e.w == = this.w
            }

            fromArray(e, t=0) {
                return this.x = e[t],this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
            }

            toArray(e=[], t=0) {
                return e[t] = this.x,e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
            }

            fromBufferAttribute(e, t) {
                return this.x = e.getX(t),this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
            }

            random() {
                return this.x = Math.random(),
                this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
            }*[Symbol.iterator]()

            {
                yield this.x,yield this.y,yield this.z,yield this.w
            }
        } class Ce extends X {
            constructor(e, t, n= {
            })

            {
                super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new Te(0, 0, e, t), this.scissorTest = !1, this.viewport = new Te(0, 0, e, t);const
                r = {width:e, height:t, depth:1};
                this.texture = new Ee(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps =
                void 0 != = n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void
                0 != = n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void
                0 != = n.minFilter ? n.minFilter : y, this.depthBuffer = void
                0 == = n.depthBuffer || n.depthBuffer, this.stencilBuffer = void
                0 != = n.stencilBuffer && n.stencilBuffer, this.depthTexture = void
                0 != = n.depthTexture ? n.depthTexture : null, this.samples = void 0 != = n.samples ? n.samples : 0
            }

            setSize(e, t, n=1) {
                this.width == = e && this.height == = t && this.depth == = n || (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()),
                this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
            }

            clone() {
                return (new this.constructor).copy(this)
            }

            copy(e) {
                this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;const
                t = Object.assign({}, e.texture.image);
                return this.texture.source = new we(t),
                this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, null != = e.depthTexture && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this
            }

            dispose() {
                this.dispatchEvent({type:"dispose"})}
        } class Ae extends Ee {
            constructor(e=null, t=1, n=1, r=1) {
                super(null), this.isDataArrayTexture = !0, this.image = {data:e, width:t, height:n, depth:r},
                this.magFilter = m, this.minFilter = m, this.wrapR = f, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
            }
        } class Le extends Ee {
            constructor(e=null, t=1, n=1, r=1) {
                super(null), this.isData3DTexture = !0, this.image = {data:e, width:t, height:n, depth:r},
                this.magFilter = m, this.minFilter = m, this.wrapR = f, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
            }
        } class Pe {
            constructor(e=0, t=0, n=0, r=1) {
                this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r
            }

            static slerpFlat(e, t, n, r, i, a, s) {
                let o = n[r + 0], l = n[r + 1], c = n[r + 2], u = n[r + 3];const
                h = i[a + 0], d = i[a + 1], f = i[a + 2], p = i[a + 3];
                if (0 == = s) return e[t + 0] = o,e[t + 1] = l, e[t + 2] = c,void(e[t + 3] = u);
                if (1 == = s) return e[t + 0] = h,e[t + 1] = d, e[t + 2] = f,void(e[t + 3] = p);
                if (u != = p || o != = h || l != = d || c != = f) {
                    let e = 1 - s;const t = o * h + l * d + c * f + u * p, n = t >= 0 ? 1 : -1, r = 1 - t * t;
                    if (r > Number.EPSILON) {const i = Math.sqrt(r), a = Math.atan2(i, t * n);
                        e = Math.sin(e * a) / i, s = Math.sin(s * a) / i
                    }const i = s * n;
                    if (o = o * e + h * i,l = l * e + d * i, c = c * e + f * i, u = u * e + p * i, e == = 1 - s)
                    {const e = 1 / Math.sqrt(o * o + l * l + c * c + u * u);
                        o *= e, l *= e, c *= e, u *= e
                    }
                } e[t] = o, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u
            }

            static multiplyQuaternionsFlat(e, t, n, r, i, a) {const
                s = n[r], o = n[r + 1], l = n[r + 2], c = n[r + 3], u = i[a], h = i[a + 1], d = i[a + 2], f = i[a + 3];
                return e[t] = s * f + c * u + o * d - l * h,
                e[t + 1] = o * f + c * h + l * u - s * d, e[t + 2] = l * f + c * d + s * h - o * u, e[t + 3] = c * f - s * u - o * h - l * d, e
            }

            get x() {
                return this._x
            }

            set x(e) {
                this._x = e, this._onChangeCallback()
            }

            get y() {
                return this._y
            }

            set y(e) {
                this._y = e, this._onChangeCallback()
            }

            get z() {
                return this._z
            }

            set z(e) {
                this._z = e, this._onChangeCallback()
            }

            get w() {
                return this._w
            }

            set w(e) {
                this._w = e, this._onChangeCallback()
            }

            set(e, t, n, r) {
                return this._x = e,this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this
            }

            clone() {
                return new this.constructor(this._x, this._y, this._z, this._w)
            }

            copy(e) {
                return this._x = e.x,this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
            }

            setFromEuler(e, t) {const
                n = e._x, r = e._y, i = e._z, a = e._order, s = Math.cos, o = Math.sin, l = s(n / 2), c = s(r / 2), u = s(i / 2), h = o(n / 2), d = o(r / 2), f = o(i / 2);
                switch (a) {
                    case "XYZ":
                        this._x = h * c * u + l * d * f, this._y = l * d * u - h * c * f, this._z = l * c * f + h * d * u, this._w = l * c * u - h * d * f;
                        break;
                    case "YXZ":
                        this._x = h * c * u + l * d * f, this._y = l * d * u - h * c * f, this._z = l * c * f - h * d * u, this._w = l * c * u + h * d * f;
                        break;
                    case "ZXY":
                        this._x = h * c * u - l * d * f, this._y = l * d * u + h * c * f, this._z = l * c * f + h * d * u, this._w = l * c * u - h * d * f;
                        break;
                    case "ZYX":
                        this._x = h * c * u - l * d * f, this._y = l * d * u + h * c * f, this._z = l * c * f - h * d * u, this._w = l * c * u + h * d * f;
                        break;
                    case "YZX":
                        this._x = h * c * u + l * d * f, this._y = l * d * u + h * c * f, this._z = l * c * f - h * d * u, this._w = l * c * u - h * d * f;
                        break;
                    case "XZY":
                        this._x = h * c * u - l * d * f, this._y = l * d * u - h * c * f, this._z = l * c * f + h * d * u, this._w = l * c * u + h * d * f;
                        break;
                    default:
                        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
                } return !1 != = t && this._onChangeCallback(),this
            }

            setFromAxisAngle(e, t) {const n = t / 2, r = Math.sin(n);
                return this._x = e.x * r,
                this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this
            }

            setFromRotationMatrix(e) {const
                t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], s = t[5], o = t[9], l = t[2], c = t[6], u = t[10], h = n + s + u;
                if (h > 0) {const e = .5 / Math.sqrt(h + 1);
                    this._w = .25 / e, this._x = (c - o) * e, this._y = (i - l) * e, this._z = (a - r) * e
                } else if (n > s && n > u) {const e = 2 * Math.sqrt(1 + n - s - u);
                    this._w = (c - o) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + l) / e
                } else if (s > u) {const e = 2 * Math.sqrt(1 + s - n - u);
                    this._w = (i - l) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (o + c) / e
                } else {const e = 2 * Math.sqrt(1 + u - n - s);
                    this._w = (a - r) / e, this._x = (i + l) / e, this._y = (o + c) / e, this._z = .25 * e
                } return this._onChangeCallback(),this
            }

            setFromUnitVectors(e, t) {
                let n = e.dot(t) + 1;
                return n < Number.EPSILON ? (n = 0,
                Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n):
                (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)):
                (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n),
                this.normalize()
            }

            angleTo(e) {
                return 2 * Math.acos(Math.abs($(this.dot(e), -1, 1)))
            }

            rotateTowards(e, t) {const n = this.angleTo(e);
                if (0 == = n) return this;const r = Math.min(1, t / n);
                return this.slerp(e, r),this
            }

            identity() {
                return this.set(0, 0, 0, 1)
            }

            invert() {
                return this.conjugate()
            }

            conjugate() {
                return this._x *= -1,this._y *= -1, this._z *= -1, this._onChangeCallback(), this
            }

            dot(e) {
                return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
            }

            lengthSq() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            }

            length() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            }

            normalize() {
                let e = this.length();
                return 0 == = e ? (this._x = 0,this._y = 0, this._z = 0, this._w = 1):
                (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e),
                this._onChangeCallback(), this
            }

            multiply(e) {
                return this.multiplyQuaternions(this, e)
            }

            premultiply(e) {
                return this.multiplyQuaternions(e, this)
            }

            multiplyQuaternions(e, t) {const
                n = e._x, r = e._y, i = e._z, a = e._w, s = t._x, o = t._y, l = t._z, c = t._w;
                return this._x = n * c + a * s + r * l - i * o,
                this._y = r * c + a * o + i * s - n * l, this._z = i * c + a * l + n * o - r * s, this._w = a * c - n * s - r * o - i * l, this._onChangeCallback(), this
            }

            slerp(e, t) {
                if (0 == = t) return this; if (1 == = t) return this.copy(e);const
                n = this._x, r = this._y, i = this._z, a = this._w;
                let s = a * e._w + n * e._x + r * e._y + i * e._z;
                if (s < 0 ? (this._w = -e._w,this._x = -e._x, this._y = -e._y, this._z = -e._z, s = -s):
                this.copy(e), s >= 1)return this._w = a,this._x = n, this._y = r, this._z = i, this;const o = 1 - s * s;
                if (o <= Number.EPSILON) {const e = 1 - t;
                    return this._w = e * a + t * this._w,
                    this._x = e * n + t * this._x, this._y = e * r + t * this._y, this._z = e * i + t * this._z, this.normalize(), this._onChangeCallback(), this
                }const l = Math.sqrt(o), c = Math.atan2(l, s), u = Math.sin((1 - t) * c) / l, h = Math.sin(t * c) / l;
                return this._w = a * u + this._w * h,
                this._x = n * u + this._x * h, this._y = r * u + this._y * h, this._z = i * u + this._z * h, this._onChangeCallback(), this
            }

            slerpQuaternions(e, t, n) {
                return this.copy(e).slerp(t, n)
            }

            random() {const
                e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), i = 2 * Math.PI * Math.random();
                return this.set(t * Math.cos(r), n * Math.sin(i), n * Math.cos(i), t * Math.sin(r))
            }

            equals(e) {
                return e._x == = this._x && e._y == = this._y && e._z == = this._z && e._w == = this._w
            }

            fromArray(e, t=0) {
                return this._x = e[t],
                this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
            }

            toArray(e=[], t=0) {
                return e[t] = this._x,e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
            }

            fromBufferAttribute(e, t) {
                return this._x = e.getX(t),this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
            }

            _onChange(e) {
                return this._onChangeCallback = e,this
            }

            _onChangeCallback() {
            }*[Symbol.iterator]()

            {
                yield this._x,yield this._y,yield this._z,yield this._w
            }
        } class Re {
            constructor(e=0, t=0, n=0) {
                Re.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n
            }

            set(e, t, n) {
                return void 0 == = n && (n = this.z), this.x = e, this.y = t, this.z = n, this
            }

            setScalar(e) {
                return this.x = e,this.y = e, this.z = e, this
            }

            setX(e) {
                return this.x = e,this
            }

            setY(e) {
                return this.y = e,this
            }

            setZ(e) {
                return this.z = e,this
            }

            setComponent(e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                } return this
            }

            getComponent(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            }

            clone() {
                return new this.constructor(this.x, this.y, this.z)
            }

            copy(e) {
                return this.x = e.x,this.y = e.y, this.z = e.z, this
            }

            add(e) {
                return this.x += e.x,this.y += e.y, this.z += e.z, this
            }

            addScalar(e) {
                return this.x += e,this.y += e, this.z += e, this
            }

            addVectors(e, t) {
                return this.x = e.x + t.x,this.y = e.y + t.y, this.z = e.z + t.z, this
            }

            addScaledVector(e, t) {
                return this.x += e.x * t,this.y += e.y * t, this.z += e.z * t, this
            }

            sub(e) {
                return this.x -= e.x,this.y -= e.y, this.z -= e.z, this
            }

            subScalar(e) {
                return this.x -= e,this.y -= e, this.z -= e, this
            }

            subVectors(e, t) {
                return this.x = e.x - t.x,this.y = e.y - t.y, this.z = e.z - t.z, this
            }

            multiply(e) {
                return this.x *= e.x,this.y *= e.y, this.z *= e.z, this
            }

            multiplyScalar(e) {
                return this.x *= e,this.y *= e, this.z *= e, this
            }

            multiplyVectors(e, t) {
                return this.x = e.x * t.x,this.y = e.y * t.y, this.z = e.z * t.z, this
            }

            applyEuler(e) {
                return this.applyQuaternion(ke.setFromEuler(e))
            }

            applyAxisAngle(e, t) {
                return this.applyQuaternion(ke.setFromAxisAngle(e, t))
            }

            applyMatrix3(e) {const t = this.x, n = this.y, r = this.z, i = e.elements;
                return this.x = i[0] * t + i[3] * n + i[6] * r,
                this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this
            }

            applyNormalMatrix(e) {
                return this.applyMatrix3(e).normalize()
            }

            applyMatrix4(e) {const
                t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
                return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a,
                this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this
            }

            applyQuaternion(e) {const
                t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, s = e.z, o = e.w, l = o * t + a * r - s * n, c = o * n + s * t - i * r, u = o * r + i * n - a * t, h = -i * t - a * n - s * r;
                return this.x = l * o + h * -i + c * -s - u * -a,
                this.y = c * o + h * -a + u * -i - l * -s, this.z = u * o + h * -s + l * -a - c * -i, this
            }

            project(e) {
                return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
            }

            unproject(e) {
                return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
            }

            transformDirection(e) {const t = this.x, n = this.y, r = this.z, i = e.elements;
                return this.x = i[0] * t + i[4] * n + i[8] * r,
                this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize()
            }

            divide(e) {
                return this.x /= e.x,this.y /= e.y, this.z /= e.z, this
            }

            divideScalar(e) {
                return this.multiplyScalar(1 / e)
            }

            min(e) {
                return this.x = Math.min(this.x, e.x),
                this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
            }

            max(e) {
                return this.x = Math.max(this.x, e.x),
                this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
            }

            clamp(e, t) {
                return this.x = Math.max(e.x, Math.min(t.x, this.x)),
                this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
            }

            clampScalar(e, t) {
                return this.x = Math.max(e, Math.min(t, this.x)),
                this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
            }

            clampLength(e, t) {const n = this.length();
                return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
            }

            floor() {
                return this.x = Math.floor(this.x),this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
            }

            ceil() {
                return this.x = Math.ceil(this.x),this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
            }

            round() {
                return this.x = Math.round(this.x),this.y = Math.round(this.y), this.z = Math.round(this.z), this
            }

            roundToZero() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
            }

            negate() {
                return this.x = -this.x,this.y = -this.y, this.z = -this.z, this
            }

            dot(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z
            }

            lengthSq() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            }

            length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            }

            manhattanLength() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            }

            normalize() {
                return this.divideScalar(this.length() || 1)
            }

            setLength(e) {
                return this.normalize().multiplyScalar(e)
            }

            lerp(e, t) {
                return this.x += (e.x - this.x) * t,this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
            }

            lerpVectors(e, t, n) {
                return this.x = e.x + (t.x - e.x) * n,
                this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
            }

            cross(e) {
                return this.crossVectors(this, e)
            }

            crossVectors(e, t) {const n = e.x, r = e.y, i = e.z, a = t.x, s = t.y, o = t.z;
                return this.x = r * o - i * s,this.y = i * a - n * o, this.z = n * s - r * a, this
            }

            projectOnVector(e) {const t = e.lengthSq();
                if (0 == = t) return this.set(0, 0, 0);const n = e.dot(this) / t;
                return this.copy(e).multiplyScalar(n)
            }

            projectOnPlane(e) {
                return De.copy(this).projectOnVector(e),this.sub(De)
            }

            reflect(e) {
                return this.sub(De.copy(e).multiplyScalar(2 * this.dot(e)))
            }

            angleTo(e) {const t = Math.sqrt(this.lengthSq() * e.lengthSq());
                if (0 == = t) return Math.PI / 2;const n = this.dot(e) / t;
                return Math.acos($(n, -1, 1))
            }

            distanceTo(e) {
                return Math.sqrt(this.distanceToSquared(e))
            }

            distanceToSquared(e) {const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
                return t * t + n * n + r * r
            }

            manhattanDistanceTo(e) {
                return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
            }

            setFromSpherical(e) {
                return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
            }

            setFromSphericalCoords(e, t, n) {const r = Math.sin(t) * e;
                return this.x = r * Math.sin(n),this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this
            }

            setFromCylindrical(e) {
                return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
            }

            setFromCylindricalCoords(e, t, n) {
                return this.x = e * Math.sin(t),this.y = n, this.z = e * Math.cos(t), this
            }

            setFromMatrixPosition(e) {const t = e.elements;
                return this.x = t[12],this.y = t[13], this.z = t[14], this
            }

            setFromMatrixScale(e) {const
                t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
                return this.x = t,this.y = n, this.z = r, this
            }

            setFromMatrixColumn(e, t) {
                return this.fromArray(e.elements, 4 * t)
            }

            setFromMatrix3Column(e, t) {
                return this.fromArray(e.elements, 3 * t)
            }

            setFromEuler(e) {
                return this.x = e._x,this.y = e._y, this.z = e._z, this
            }

            equals(e) {
                return e.x == = this.x && e.y == = this.y && e.z == = this.z
            }

            fromArray(e, t=0) {
                return this.x = e[t],this.y = e[t + 1], this.z = e[t + 2], this
            }

            toArray(e=[], t=0) {
                return e[t] = this.x,e[t + 1] = this.y, e[t + 2] = this.z, e
            }

            fromBufferAttribute(e, t) {
                return this.x = e.getX(t),this.y = e.getY(t), this.z = e.getZ(t), this
            }

            random() {
                return this.x = Math.random(),this.y = Math.random(), this.z = Math.random(), this
            }

            randomDirection() {const
                e = 2 * (Math.random() - .5), t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e * * 2);
                return this.x = n * Math.cos(t),this.y = n * Math.sin(t), this.z = e, this
            }*[Symbol.iterator]()

            {
                yield this.x,yield this.y,yield this.z
            }
        }const De = new Re, ke = new Pe; class Ie {
            constructor(e=new Re(1/0,1/0,1/0),t=new

            Re(-1/0,-1/0,-1/0))

            {
                this.isBox3 = !0, this.min = e, this.max = t
            }

            set(e, t) {
                return this.min.copy(e),this.max.copy(t), this
            }

            setFromArray(e) {
                let t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, s = -1 / 0;
                for (let o = 0, l = e.length; o < l; o += 3) {const l = e[o], c = e[o + 1], u = e[o + 2];
                    l < t && (t = l), c < n && (n = c), u < r && (r = u), l > i && (i = l), c > a && (a = c), u > s && (s = u)
                } return this.min.set(t, n, r),this.max.set(i, a, s), this
            }

            setFromBufferAttribute(e) {
                let t = 1 / 0, n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0, s = -1 / 0;
                for (let o = 0, l = e.count; o < l; o++) {const l = e.getX(o), c = e.getY(o), u = e.getZ(o);
                    l < t && (t = l), c < n && (n = c), u < r && (r = u), l > i && (i = l), c > a && (a = c), u > s && (s = u)
                } return this.min.set(t, n, r),this.max.set(i, a, s), this
            }

            setFromPoints(e) {
                this.makeEmpty();
                for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
                return this
            }

            setFromCenterAndSize(e, t) {const n = Oe.copy(t).multiplyScalar(.5);
                return this.min.copy(e).sub(n),this.max.copy(e).add(n), this
            }

            setFromObject(e, t=!1) {
                return this.makeEmpty(),this.expandByObject(e, t)
            }

            clone() {
                return (new this.constructor).copy(this)
            }

            copy(e) {
                return this.min.copy(e.min),this.max.copy(e.max), this
            }

            makeEmpty() {
                return this.min.x = this.min.y = this.min.z = 1 / 0,this.max.x = this.max.y = this.max.z = -1 / 0, this
            }

            isEmpty() {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            }

            getCenter(e) {
                return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
            }

            getSize(e) {
                return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
            }

            expandByPoint(e) {
                return this.min.min(e),this.max.max(e), this
            }

            expandByVector(e) {
                return this.min.sub(e),this.max.add(e), this
            }

            expandByScalar(e) {
                return this.min.addScalar(-e),this.max.addScalar(e), this
            }

            expandByObject(e, t=!1) {
                e.updateWorldMatrix(!1, !1);const n = e.geometry;
                if ( void 0 != = n)if (t && void 0 != n.attributes && void 0 != = n.attributes.position)
                {const t = n.attributes.position;
                    for (let n = 0, r = t.count; n < r; n++)
                        Oe.fromBufferAttribute(t, n).applyMatrix4(e.matrixWorld), this.expandByPoint(Oe)
                }else
                null == = n.boundingBox && n.computeBoundingBox(), ze.copy(n.boundingBox), ze.applyMatrix4(e.matrixWorld), this.union(ze);const
                r = e.children;
                for (let i = 0, a = r.length; i < a; i++) this.expandByObject(r[i], t);
                return this
            }

            containsPoint(e) {
                return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
            }

            containsBox(e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
            }

            getParameter(e, t) {
                return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
            }

            intersectsBox(e) {
                return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
            }

            intersectsSphere(e) {
                return this.clampPoint(e.center, Oe),Oe.distanceToSquared(e.center) <= e.radius * e.radius
            }

            intersectsPlane(e) {
                let t, n;
                return e.normal.x > 0 ? (t = e.normal.x * this.min.x,n = e.normal.x * this.max.x):
                (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x),
                e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y):
                (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y),
                e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z):
                (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z),t <= -e.constant && n >= -e.constant
            }

            intersectsTriangle(e) {
                if (this.isEmpty()) return !1;
                this.getCenter(Ge), je.subVectors(this.max, Ge), Ue.subVectors(e.a, Ge), Fe.subVectors(e.b, Ge), Be.subVectors(e.c, Ge), Ve.subVectors(Fe, Ue), He.subVectors(Be, Fe), We.subVectors(Ue, Be);
                let t =[
                0, -Ve.z, Ve.y, 0, -He.z, He.y, 0, -We.z, We.y, Ve.z, 0, -Ve.x, He.z, 0, -He.x, We.z, 0, -We.x, -Ve.y, Ve.x, 0, -He.y, He.x, 0, -We.y, We.x, 0]
                ;
                return !!Ye(t, Ue, Fe, Be, je) && (t =[1,0, 0, 0, 1, 0, 0, 0, 1],
                !!Ye(t, Ue, Fe, Be, je) && (qe.crossVectors(Ve, He), t =[qe.x, qe.y, qe.z],Ye(t, Ue, Fe, Be, je)))}

            clampPoint(e, t) {
                return t.copy(e).clamp(this.min, this.max)
            }

            distanceToPoint(e) {
                return Oe.copy(e).clamp(this.min, this.max).sub(e).length()
            }

            getBoundingSphere(e) {
                return this.getCenter(e.center),e.radius = .5 * this.getSize(Oe).length(), e
            }

            intersect(e) {
                return this.min.max(e.min),this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
            }

            union(e) {
                return this.min.min(e.min),this.max.max(e.max), this
            }

            applyMatrix4(e) {
                return this.isEmpty() || (Ne[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
                Ne[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Ne[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Ne[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Ne[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Ne[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Ne[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Ne[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Ne)),
                this
            }

            translate(e) {
                return this.min.add(e),this.max.add(e), this
            }

            equals(e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }
        }const Ne =[new Re, new Re, new Re, new Re, new Re, new Re, new Re, new Re],
        Oe = new Re, ze = new Ie, Ue = new Re, Fe = new Re, Be = new Re, Ve = new Re, He = new Re, We = new Re, Ge = new Re, je = new Re, qe = new Re, Xe = new Re;
        function Ye (e, t, n, r, i){
            for (let a = 0, s = e.length - 3; a <= s; a += 3) {
                Xe.fromArray(e, a);const
                s = i.x * Math.abs(Xe.x) + i.y * Math.abs(Xe.y) + i.z * Math.abs(Xe.z), o = t.dot(Xe), l = n.dot(Xe), c = r.dot(Xe);
                if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1
            } return !0
        }const Ke = new Ie, Ze = new Re, Je = new Re, $e = new Re; class Qe {
            constructor(e=new Re, t=-1) {
                this.center = e, this.radius = t
            }

            set(e, t) {
                return this.center.copy(e),this.radius = t, this
            }

            setFromPoints(e, t) {const n = this.center;
                void 0 != = t ? n.copy(t) : Ke.setFromPoints(e).getCenter(n); let r = 0;
                for (let i = 0, a = e.length; i < a; i++) r = Math.max(r, n.distanceToSquared(e[i]));
                return this.radius = Math.sqrt(r),this
            }

            copy(e) {
                return this.center.copy(e.center),this.radius = e.radius, this
            }

            isEmpty() {
                return this.radius < 0
            }

            makeEmpty() {
                return this.center.set(0, 0, 0),this.radius = -1, this
            }

            containsPoint(e) {
                return e.distanceToSquared(this.center) <= this.radius * this.radius
            }

            distanceToPoint(e) {
                return e.distanceTo(this.center) - this.radius
            }

            intersectsSphere(e) {const t = this.radius + e.radius;
                return e.center.distanceToSquared(this.center) <= t * t
            }

            intersectsBox(e) {
                return e.intersectsSphere(this)
            }

            intersectsPlane(e) {
                return Math.abs(e.distanceToPoint(this.center)) <= this.radius
            }

            clampPoint(e, t) {const n = this.center.distanceToSquared(e);
                return t.copy(e),
                n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)),
                t
            }

            getBoundingBox(e) {
                return this.isEmpty() ? (e.makeEmpty(),e):
                (e.set(this.center, this.center), e.expandByScalar(this.radius), e)}

            applyMatrix4(e) {
                return this.center.applyMatrix4(e),this.radius = this.radius * e.getMaxScaleOnAxis(), this
            }

            translate(e) {
                return this.center.add(e),this
            }

            expandByPoint(e) {
                $e.subVectors(e, this.center);const t = $e.lengthSq();
                if (t > this.radius * this.radius) {const e = Math.sqrt(t), n = .5 * (e - this.radius);
                    this.center.add($e.multiplyScalar(n / e)), this.radius += n
                } return this
            }

            union(e) {
                return !0 == = this.center.equals(e.center) ? Je.set(0, 0, 1).multiplyScalar(e.radius) : Je.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius),
                this.expandByPoint(Ze.copy(e.center).add(Je)), this.expandByPoint(Ze.copy(e.center).sub(Je)), this
            }

            equals(e) {
                return e.center.equals(this.center) && e.radius == = this.radius
            }

            clone() {
                return (new this.constructor).copy(this)
            }
        }const et = new Re, tt = new Re, nt = new Re, rt = new Re, it = new Re, at = new Re, st = new Re; class ot {
            constructor(e=new Re, t=new Re(0,0,-1))

            {
                this.origin = e, this.direction = t
            }

            set(e, t) {
                return this.origin.copy(e),this.direction.copy(t), this
            }

            copy(e) {
                return this.origin.copy(e.origin),this.direction.copy(e.direction), this
            }

            at(e, t) {
                return t.copy(this.direction).multiplyScalar(e).add(this.origin)
            }

            lookAt(e) {
                return this.direction.copy(e).sub(this.origin).normalize(),this
            }

            recast(e) {
                return this.origin.copy(this.at(e, et)),this
            }

            closestPointToPoint(e, t) {
                t.subVectors(e, this.origin);const n = t.dot(this.direction);
                return n < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(n).add(this.origin)
            }

            distanceToPoint(e) {
                return Math.sqrt(this.distanceSqToPoint(e))
            }

            distanceSqToPoint(e) {const t = et.subVectors(e, this.origin).dot(this.direction);
                return t < 0 ? this.origin.distanceToSquared(e) : (et.copy(this.direction).multiplyScalar(t).add(this.origin),
                et.distanceToSquared(e))}

            distanceSqToSegment(e, t, n, r) {
                tt.copy(e).add(t).multiplyScalar(.5), nt.copy(t).sub(e).normalize(), rt.copy(this.origin).sub(tt);const
                i = .5 * e.distanceTo(t), a = -this.direction.dot(nt), s = rt.dot(this.direction), o = -rt.dot(nt), l = rt.lengthSq(), c = Math.abs(1 - a * a);
                let u, h, d, f;
                if (c > 0) if (u = a * o - s,h = a * s - o, f = i * c, u >= 0)if (h >= -f) if (h <= f) {const e = 1 / c;
                    u *= e, h *= e, d = u * (u + a * h + 2 * s) + h * (a * u + h + 2 * o) + l
                } else h = i, u = Math.max(0, -(a * h + s)), d = -u * u + h * (h + 2 * o) + l;
                else h = -i, u = Math.max(0, -(a * h + s)), d = -u * u + h * (h + 2 * o) + l;else
                h <= -f ? (u = Math.max(0, -(-a * i + s)), h = u > 0 ? -i : Math.min(Math.max(-i, -o), i), d = -u * u + h * (h + 2 * o) + l):
                h <= f ? (u = 0, h = Math.min(Math.max(-i, -o), i), d = h * (h + 2 * o) + l):
                (u = Math.max(0, -(a * i + s)), h = u > 0 ? i : Math.min(Math.max(-i, -o), i), d = -u * u + h * (h + 2 * o) + l)
                ;else h = a > 0 ? -i : i, u = Math.max(0, -(a * h + s)), d = -u * u + h * (h + 2 * o) + l;
                return n && n.copy(this.direction).multiplyScalar(u).add(this.origin),
                r && r.copy(nt).multiplyScalar(h).add(tt), d
            }

            intersectSphere(e, t) {
                et.subVectors(e.center, this.origin);const
                n = et.dot(this.direction), r = et.dot(et) - n * n, i = e.radius * e.radius;
                if (r > i) return null;const a = Math.sqrt(i - r), s = n - a, o = n + a;
                return s < 0 && o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t)
            }

            intersectsSphere(e) {
                return this.distanceSqToPoint(e.center) <= e.radius * e.radius
            }

            distanceToPlane(e) {const t = e.normal.dot(this.direction);
                if (0 == = t) return 0 == = e.distanceToPoint(this.origin) ? 0 : null;const
                n = -(this.origin.dot(e.normal) + e.constant) / t;
                return n >= 0 ? n : null
            }

            intersectPlane(e, t) {const n = this.distanceToPlane(e);
                return null == = n ? null : this.at(n, t)
            }

            intersectsPlane(e) {const t = e.distanceToPoint(this.origin);
                if (0 == = t) return !0; return e.normal.dot(this.direction) * t < 0
            }

            intersectBox(e, t) {
                let n, r, i, a, s, o;const
                l = 1 / this.direction.x, c = 1 / this.direction.y, u = 1 / this.direction.z, h = this.origin;
                return l >= 0 ? (n = (e.min.x - h.x) * l,r = (e.max.x - h.x) * l):
                (n = (e.max.x - h.x) * l, r = (e.min.x - h.x) * l),
                c >= 0 ? (i = (e.min.y - h.y) * c, a = (e.max.y - h.y) * c):
                (i = (e.max.y - h.y) * c, a = (e.min.y - h.y) * c),
                n > a || i > r ? null : ((i > n || n != = n) && (n = i), (a < r || r != = r) && (r = a), u >= 0 ? (s = (e.min.z - h.z) * u, o = (e.max.z - h.z) * u):
                (s = (e.max.z - h.z) * u, o = (e.min.z - h.z) * u),
                n > o || s > r ? null : ((s > n || n != = n) && (n = s), (o < r || r != = r) && (r = o), r < 0 ? null : this.at(n >= 0 ? n : r, t)))}

            intersectsBox(e) {
                return null != = this.intersectBox(e, et)
            }

            intersectTriangle(e, t, n, r, i) {
                it.subVectors(t, e), at.subVectors(n, e), st.crossVectors(it, at);
                let a, s = this.direction.dot(st);
                if (s > 0) {
                    if (r) return null;
                    a = 1
                } else {
                    if (!(s < 0)) return null;
                    a = -1, s = -s
                } rt.subVectors(this.origin, e);const o = a * this.direction.dot(at.crossVectors(rt, at));
                if (o < 0) return null;const l = a * this.direction.dot(it.cross(rt));
                if (l < 0) return null;
                if (o + l > s) return null;const c = -a * rt.dot(st);
                return c < 0 ? null : this.at(c / s, i)
            }

            applyMatrix4(e) {
                return this.origin.applyMatrix4(e),this.direction.transformDirection(e), this
            }

            equals(e) {
                return e.origin.equals(this.origin) && e.direction.equals(this.direction)
            }

            clone() {
                return (new this.constructor).copy(this)
            }
        } class lt {
            constructor() {
                lt.prototype.isMatrix4 = !0, this.elements =[1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]}

            set(e, t, n, r, i, a, s, o, l, c, u, h, d, f, p, m) {const g = this.elements;
                return g[0] = e,
                g[4] = t, g[8] = n, g[12] = r, g[1] = i, g[5] = a, g[9] = s, g[13] = o, g[2] = l, g[6] = c, g[10] = u, g[14] = h, g[3] = d, g[7] = f, g[11] = p, g[15] = m, this
            }

            identity() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),this
            }

            clone() {
                return (new lt).fromArray(this.elements)
            }

            copy(e) {const t = this.elements, n = e.elements;
                return t[0] = n[0],
                t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
            }

            copyPosition(e) {const t = this.elements, n = e.elements;
                return t[12] = n[12],t[13] = n[13], t[14] = n[14], this
            }

            setFromMatrix3(e) {const t = e.elements;
                return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),this
            }

            extractBasis(e, t, n) {
                return e.setFromMatrixColumn(this, 0),
                t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
            }

            makeBasis(e, t, n) {
                return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),this
            }

            extractRotation(e) {const
                t = this.elements, n = e.elements, r = 1 / ct.setFromMatrixColumn(e, 0).length(), i = 1 / ct.setFromMatrixColumn(e, 1).length(), a = 1 / ct.setFromMatrixColumn(e, 2).length();
                return t[0] = n[0] * r,
                t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            }

            makeRotationFromEuler(e) {const
                t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), s = Math.sin(n), o = Math.cos(r), l = Math.sin(r), c = Math.cos(i), u = Math.sin(i);
                if ("XYZ" == = e.order) {const e = a * c, n = a * u, r = s * c, i = s * u;
                    t[0] = o * c, t[4] = -o * u, t[8] = l, t[1] = n + r * l, t[5] = e - i * l, t[9] = -s * o, t[2] = i - e * l, t[6] = r + n * l, t[10] = a * o
                } else if ("YXZ" == = e.order) {const e = o * c, n = o * u, r = l * c, i = l * u;
                    t[0] = e + i * s, t[4] = r * s - n, t[8] = a * l, t[1] = a * u, t[5] = a * c, t[9] = -s, t[2] = n * s - r, t[6] = i + e * s, t[10] = a * o
                } else if ("ZXY" == = e.order) {const e = o * c, n = o * u, r = l * c, i = l * u;
                    t[0] = e - i * s, t[4] = -a * u, t[8] = r + n * s, t[1] = n + r * s, t[5] = a * c, t[9] = i - e * s, t[2] = -a * l, t[6] = s, t[10] = a * o
                } else if ("ZYX" == = e.order) {const e = a * c, n = a * u, r = s * c, i = s * u;
                    t[0] = o * c, t[4] = r * l - n, t[8] = e * l + i, t[1] = o * u, t[5] = i * l + e, t[9] = n * l - r, t[2] = -l, t[6] = s * o, t[10] = a * o
                } else if ("YZX" == = e.order) {const e = a * o, n = a * l, r = s * o, i = s * l;
                    t[0] = o * c, t[4] = i - e * u, t[8] = r * u + n, t[1] = u, t[5] = a * c, t[9] = -s * c, t[2] = -l * c, t[6] = n * u + r, t[10] = e - i * u
                } else if ("XZY" == = e.order) {const e = a * o, n = a * l, r = s * o, i = s * l;
                    t[0] = o * c, t[4] = -u, t[8] = l * c, t[1] = e * u + i, t[5] = a * c, t[9] = n * u - r, t[2] = r * u - n, t[6] = s * c, t[10] = i * u + e
                } return t[3] = 0,t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            }

            makeRotationFromQuaternion(e) {
                return this.compose(ht, e, dt)
            }

            lookAt(e, t, n) {const r = this.elements;
                return mt.subVectors(e, t),
                0 == = mt.lengthSq() && (mt.z = 1), mt.normalize(), ft.crossVectors(n, mt), 0 == = ft.lengthSq() && (1 == = Math.abs(n.z) ? mt.x += 1e-4 : mt.z += 1e-4, mt.normalize(), ft.crossVectors(n, mt)),
                ft.normalize(), pt.crossVectors(mt, ft), r[0] = ft.x, r[4] = pt.x, r[8] = mt.x, r[1] = ft.y, r[5] = pt.y, r[9] = mt.y, r[2] = ft.z, r[6] = pt.z, r[10] = mt.z, this
            }

            multiply(e) {
                return this.multiplyMatrices(this, e)
            }

            premultiply(e) {
                return this.multiplyMatrices(e, this)
            }

            multiplyMatrices(e, t) {const
                n = e.elements, r = t.elements, i = this.elements, a = n[0], s = n[4], o = n[8], l = n[12], c = n[1], u = n[5], h = n[9], d = n[13], f = n[2], p = n[6], m = n[10], g = n[14], v = n[3], y = n[7], _ = n[11], x = n[15], b = r[0], w = r[4], S = r[8], M = r[12], E = r[1], T = r[5], C = r[9], A = r[13], L = r[2], P = r[6], R = r[10], D = r[14], k = r[3], I = r[7], N = r[11], O = r[15];
                return i[0] = a * b + s * E + o * L + l * k,
                i[4] = a * w + s * T + o * P + l * I, i[8] = a * S + s * C + o * R + l * N, i[12] = a * M + s * A + o * D + l * O, i[1] = c * b + u * E + h * L + d * k, i[5] = c * w + u * T + h * P + d * I, i[9] = c * S + u * C + h * R + d * N, i[13] = c * M + u * A + h * D + d * O, i[2] = f * b + p * E + m * L + g * k, i[6] = f * w + p * T + m * P + g * I, i[10] = f * S + p * C + m * R + g * N, i[14] = f * M + p * A + m * D + g * O, i[3] = v * b + y * E + _ * L + x * k, i[7] = v * w + y * T + _ * P + x * I, i[11] = v * S + y * C + _ * R + x * N, i[15] = v * M + y * A + _ * D + x * O, this
            }

            multiplyScalar(e) {const t = this.elements;
                return t[0] *= e,
                t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
            }

            determinant() {const
                e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], s = e[5], o = e[9], l = e[13], c = e[2], u = e[6], h = e[10], d = e[14];
                return e[3] * (+i * o * u - r * l * u - i * s * h + n * l * h + r * s * d - n * o * d) + e[7] * (+t * o * d - t * l * h + i * a * h - r * a * d + r * l * c - i * o * c) + e[11] * (+t * l * u - t * s * d - i * a * u + n * a * d + i * s * c - n * l * c) + e[15] * (-r * s * c - t * o * u + t * s * h + r * a * u - n * a * h + n * o * c)
            }

            transpose() {const e = this.elements;
                let t;
                return t = e[1],
                e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
            }

            setPosition(e, t, n) {const r = this.elements;
                return e.isVector3 ? (r[12] = e.x,r[13] = e.y, r[14] = e.z):(r[12] = e, r[13] = t, r[14] = n),this
            }

            invert() {const
                e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], s = e[5], o = e[6], l = e[7], c = e[8], u = e[9], h = e[10], d = e[11], f = e[12], p = e[13], m = e[14], g = e[15], v = u * m * l - p * h * l + p * o * d - s * m * d - u * o * g + s * h * g, y = f * h * l - c * m * l - f * o * d + a * m * d + c * o * g - a * h * g, _ = c * p * l - f * u * l + f * s * d - a * p * d - c * s * g + a * u * g, x = f * u * o - c * p * o - f * s * h + a * p * h + c * s * m - a * u * m, b = t * v + n * y + r * _ + i * x;
                if (0 == = b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);const w = 1 / b;
                return e[0] = v * w,
                e[1] = (p * h * i - u * m * i - p * r * d + n * m * d + u * r * g - n * h * g) * w, e[2] = (s * m * i - p * o * i + p * r * l - n * m * l - s * r * g + n * o * g) * w, e[3] = (u * o * i - s * h * i - u * r * l + n * h * l + s * r * d - n * o * d) * w, e[4] = y * w, e[5] = (c * m * i - f * h * i + f * r * d - t * m * d - c * r * g + t * h * g) * w, e[6] = (f * o * i - a * m * i - f * r * l + t * m * l + a * r * g - t * o * g) * w, e[7] = (a * h * i - c * o * i + c * r * l - t * h * l - a * r * d + t * o * d) * w, e[8] = _ * w, e[9] = (f * u * i - c * p * i - f * n * d + t * p * d + c * n * g - t * u * g) * w, e[10] = (a * p * i - f * s * i + f * n * l - t * p * l - a * n * g + t * s * g) * w, e[11] = (c * s * i - a * u * i - c * n * l + t * u * l + a * n * d - t * s * d) * w, e[12] = x * w, e[13] = (c * p * r - f * u * r + f * n * h - t * p * h - c * n * m + t * u * m) * w, e[14] = (f * s * r - a * p * r - f * n * o + t * p * o + a * n * m - t * s * m) * w, e[15] = (a * u * r - c * s * r + c * n * o - t * u * o - a * n * h + t * s * h) * w, this
            }

            scale(e) {const t = this.elements, n = e.x, r = e.y, i = e.z;
                return t[0] *= n,
                t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this
            }

            getMaxScaleOnAxis() {const
                e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                return Math.sqrt(Math.max(t, n, r))
            }

            makeTranslation(e, t, n) {
                return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),this
            }

            makeRotationX(e) {const t = Math.cos(e), n = Math.sin(e);
                return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),this
            }

            makeRotationY(e) {const t = Math.cos(e), n = Math.sin(e);
                return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),this
            }

            makeRotationZ(e) {const t = Math.cos(e), n = Math.sin(e);
                return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),this
            }

            makeRotationAxis(e, t) {const
                n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, s = e.y, o = e.z, l = i * a, c = i * s;
                return this.set(l * a + n, l * s - r * o, l * o + r * s, 0, l * s + r * o, c * s + n, c * o - r * a, 0, l * o - r * s, c * o + r * a, i * o * o + n, 0, 0, 0, 0, 1),
                this
            }

            makeScale(e, t, n) {
                return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),this
            }

            makeShear(e, t, n, r, i, a) {
                return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1),this
            }

            compose(e, t, n) {const
                r = this.elements, i = t._x, a = t._y, s = t._z, o = t._w, l = i + i, c = a + a, u = s + s, h = i * l, d = i * c, f = i * u, p = a * c, m = a * u, g = s * u, v = o * l, y = o * c, _ = o * u, x = n.x, b = n.y, w = n.z;
                return r[0] = (1 - (p + g)) * x,
                r[1] = (d + _) * x, r[2] = (f - y) * x, r[3] = 0, r[4] = (d - _) * b, r[5] = (1 - (h + g)) * b, r[6] = (m + v) * b, r[7] = 0, r[8] = (f + y) * w, r[9] = (m - v) * w, r[10] = (1 - (h + p)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this
            }

            decompose(e, t, n) {const r = this.elements;
                let i = ct.set(r[0], r[1], r[2]).length();const
                a = ct.set(r[4], r[5], r[6]).length(), s = ct.set(r[8], r[9], r[10]).length();
                this.determinant() < 0 && (i = -i), e.x = r[12], e.y = r[13], e.z = r[14], ut.copy(this);const
                o = 1 / i, l = 1 / a, c = 1 / s;
                return ut.elements[0] *= o,
                ut.elements[1] *= o, ut.elements[2] *= o, ut.elements[4] *= l, ut.elements[5] *= l, ut.elements[6] *= l, ut.elements[8] *= c, ut.elements[9] *= c, ut.elements[10] *= c, t.setFromRotationMatrix(ut), n.x = i, n.y = a, n.z = s, this
            }

            makePerspective(e, t, n, r, i, a) {const
                s = this.elements, o = 2 * i / (t - e), l = 2 * i / (n - r), c = (t + e) / (t - e), u = (n + r) / (n - r), h = -(a + i) / (a - i), d = -2 * a * i / (a - i);
                return s[0] = o,
                s[4] = 0, s[8] = c, s[12] = 0, s[1] = 0, s[5] = l, s[9] = u, s[13] = 0, s[2] = 0, s[6] = 0, s[10] = h, s[14] = d, s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this
            }

            makeOrthographic(e, t, n, r, i, a) {const
                s = this.elements, o = 1 / (t - e), l = 1 / (n - r), c = 1 / (a - i), u = (t + e) * o, h = (n + r) * l, d = (a + i) * c;
                return s[0] = 2 * o,
                s[4] = 0, s[8] = 0, s[12] = -u, s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -h, s[2] = 0, s[6] = 0, s[10] = -2 * c, s[14] = -d, s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this
            }

            equals(e) {const t = this.elements, n = e.elements;
                for (let r = 0; r < 16; r++) if (t[r] != = n[r]) return !1; return !0
            }

            fromArray(e, t=0) {
                for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
                return this
            }

            toArray(e=[], t=0) {const n = this.elements;
                return e[t] = n[0],
                e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
            }
        }const
        ct = new Re, ut = new lt, ht = new Re(0, 0, 0), dt = new Re(1, 1, 1), ft = new Re, pt = new Re, mt = new Re, gt = new lt, vt = new Pe;
        class yt {
            constructor(e=0, t=0, n=0, r=yt.DefaultOrder) {
                this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r
            }

            get x() {
                return this._x
            }

            set x(e) {
                this._x = e, this._onChangeCallback()
            }

            get y() {
                return this._y
            }

            set y(e) {
                this._y = e, this._onChangeCallback()
            }

            get z() {
                return this._z
            }

            set z(e) {
                this._z = e, this._onChangeCallback()
            }

            get order() {
                return this._order
            }

            set order(e) {
                this._order = e, this._onChangeCallback()
            }

            set(e, t, n, r=this._order) {
                return this._x = e,this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this
            }

            clone() {
                return new this.constructor(this._x, this._y, this._z, this._order)
            }

            copy(e) {
                return this._x = e._x,
                this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
            }

            setFromRotationMatrix(e, t=this._order, n=!0) {const
                r = e.elements, i = r[0], a = r[4], s = r[8], o = r[1], l = r[5], c = r[9], u = r[2], h = r[6], d = r[10];
                switch (t) {
                    case "XYZ":
                        this._y = Math.asin($(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-a, i)):(this._x = Math.atan2(h, l), this._z = 0);
                        break;
                    case "YXZ":
                        this._x = Math.asin(-$(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(o, l)):(this._y = Math.atan2(-u, i), this._z = 0);
                        break;
                    case "ZXY":
                        this._x = Math.asin($(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)):(this._y = 0, this._z = Math.atan2(o, i));
                        break;
                    case "ZYX":
                        this._y = Math.asin(-$(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(h, d), this._z = Math.atan2(o, i)):(this._x = 0, this._z = Math.atan2(-a, l));
                        break;
                    case "YZX":
                        this._z = Math.asin($(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-u, i)):(this._x = 0, this._y = Math.atan2(s, d));
                        break;
                    case "XZY":
                        this._z = Math.asin(-$(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(h, l), this._y = Math.atan2(s, i)):(this._x = Math.atan2(-c, d), this._y = 0);
                        break;
                    default:
                        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
                } return this._order = t,!0 == = n && this._onChangeCallback(), this
            }

            setFromQuaternion(e, t, n) {
                return gt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gt, t, n)
            }

            setFromVector3(e, t=this._order) {
                return this.set(e.x, e.y, e.z, t)
            }

            reorder(e) {
                return vt.setFromEuler(this),this.setFromQuaternion(vt, e)
            }

            equals(e) {
                return e._x == = this._x && e._y == = this._y && e._z == = this._z && e._order == = this._order
            }

            fromArray(e) {
                return this._x = e[0],this._y = e[1], this._z = e[2],void
                0 != = e[3] && (this._order = e[3]), this._onChangeCallback(), this
            }

            toArray(e=[], t=0) {
                return e[t] = this._x,e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
            }

            _onChange(e) {
                return this._onChangeCallback = e,this
            }

            _onChangeCallback() {
            }*[Symbol.iterator]()

            {
                yield this._x,yield this._y,yield this._z,yield this._order
            }

            toVector3() {
                console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")
            }
        } yt.DefaultOrder = "XYZ", yt.RotationOrders =["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
        class _t {
            constructor() {
                this.mask = 1
            }

            set(e) {
                this.mask = (1 << e | 0) >>> 0
            }

            enable(e) {
                this.mask |= 1 << e | 0
            }

            enableAll() {
                this.mask = -1
            }

            toggle(e) {
                this.mask ^= 1 << e | 0
            }

            disable(e) {
                this.mask &= ~(1 << e | 0)
            }

            disableAll() {
                this.mask = 0
            }

            test(e) {
                return 0 != = (this.mask & e.mask)
            }

            isEnabled(e) {
                return 0 != = (this.mask & (1 << e | 0))
            }
        } let xt = 0;const
        bt = new Re, wt = new Pe, St = new lt, Mt = new Re, Et = new Re, Tt = new Re, Ct = new Pe, At = new Re(1, 0, 0), Lt = new Re(0, 1, 0), Pt = new Re(0, 0, 1), Rt = {type:
        "added"},Dt = {type:"removed"};
        class kt extends X {
            constructor() {
                super(), this.isObject3D = !0, Object.defineProperty(this, "id", {value:xt++}),
                this.uuid = J(), this.name = "", this.type = "Object3D", this.parent = null, this.children =[],
                this.up = kt.DefaultUp.clone();const e = new Re, t = new yt, n = new Pe, r = new Re(1, 1, 1);
                t._onChange((function() {
                    n.setFromEuler(t, !1)
                })),n._onChange((function() {
                    t.setFromQuaternion(n, void 0, !1)})),Object.defineProperties(this, {position:{
                    configurable:
                    !0, enumerable:!0, value:e
                },rotation:
                {
                    configurable:
                    !0, enumerable:!0, value:t
                },quaternion:
                {
                    configurable:
                    !0, enumerable:!0, value:n
                },scale:
                {
                    configurable:
                    !0, enumerable:!0, value:r
                },modelViewMatrix:
                {
                    value:
                    new lt
                },normalMatrix:
                {
                    value:
                    new se
                }}),
                this.matrix = new lt, this.matrixWorld = new lt, this.matrixAutoUpdate = kt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = kt.DefaultMatrixWorldAutoUpdate, this.layers = new _t, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations =[],
                this.userData = {}
            }

            onBeforeRender() {
            }

            onAfterRender() {
            }

            applyMatrix4(e) {
                this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
            }

            applyQuaternion(e) {
                return this.quaternion.premultiply(e),this
            }

            setRotationFromAxisAngle(e, t) {
                this.quaternion.setFromAxisAngle(e, t)
            }

            setRotationFromEuler(e) {
                this.quaternion.setFromEuler(e, !0)
            }

            setRotationFromMatrix(e) {
                this.quaternion.setFromRotationMatrix(e)
            }

            setRotationFromQuaternion(e) {
                this.quaternion.copy(e)
            }

            rotateOnAxis(e, t) {
                return wt.setFromAxisAngle(e, t),this.quaternion.multiply(wt), this
            }

            rotateOnWorldAxis(e, t) {
                return wt.setFromAxisAngle(e, t),this.quaternion.premultiply(wt), this
            }

            rotateX(e) {
                return this.rotateOnAxis(At, e)
            }

            rotateY(e) {
                return this.rotateOnAxis(Lt, e)
            }

            rotateZ(e) {
                return this.rotateOnAxis(Pt, e)
            }

            translateOnAxis(e, t) {
                return bt.copy(e).applyQuaternion(this.quaternion),this.position.add(bt.multiplyScalar(t)), this
            }

            translateX(e) {
                return this.translateOnAxis(At, e)
            }

            translateY(e) {
                return this.translateOnAxis(Lt, e)
            }

            translateZ(e) {
                return this.translateOnAxis(Pt, e)
            }

            localToWorld(e) {
                return e.applyMatrix4(this.matrixWorld)
            }

            worldToLocal(e) {
                return e.applyMatrix4(St.copy(this.matrixWorld).invert())
            }

            lookAt(e, t, n) {
                e.isVector3 ? Mt.copy(e) : Mt.set(e, t, n);const r = this.parent;
                this.updateWorldMatrix(!0, !1), Et.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? St.lookAt(Et, Mt, this.up) : St.lookAt(Mt, Et, this.up), this.quaternion.setFromRotationMatrix(St), r && (St.extractRotation(r.matrixWorld), wt.setFromRotationMatrix(St), this.quaternion.premultiply(wt.invert()))}

            add(e) {
                if (arguments.length > 1) {
                    for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
                    return this
                }
                return e == = this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
                this):
                (e && e.isObject3D ? (null != = e.parent && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Rt)):
                console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)}

            remove(e) {
                if (arguments.length > 1) {
                    for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                    return this
                }const t = this.children.indexOf(e);
                return -1 != = t && (e.parent = null,this.children.splice(t, 1), e.dispatchEvent(Dt)),this
            }

            removeFromParent() {const e = this.parent;
                return null != = e && e.remove(this),this
            }

            clear() {
                for (let e = 0; e < this.children.length; e++) {const t = this.children[e];
                    t.parent = null, t.dispatchEvent(Dt)
                } return this.children.length = 0,this
            }

            attach(e) {
                return this.updateWorldMatrix(!0, !1),
                St.copy(this.matrixWorld).invert(), null != = e.parent && (e.parent.updateWorldMatrix(!0, !1), St.multiply(e.parent.matrixWorld)),
                e.applyMatrix4(St), this.add(e), e.updateWorldMatrix(!1, !0), this
            }

            getObjectById(e) {
                return this.getObjectByProperty("id", e)
            }

            getObjectByName(e) {
                return this.getObjectByProperty("name", e)
            }

            getObjectByProperty(e, t) {
                if (this[e] == = t) return this; for (let n = 0, r = this.children.length; n < r; n++) {const
                    r = this.children[n].getObjectByProperty(e, t);
                    if ( void 0 != = r)return r
                }
            }

            getWorldPosition(e) {
                return this.updateWorldMatrix(!0, !1),e.setFromMatrixPosition(this.matrixWorld)
            }

            getWorldQuaternion(e) {
                return this.updateWorldMatrix(!0, !1),this.matrixWorld.decompose(Et, e, Tt), e
            }

            getWorldScale(e) {
                return this.updateWorldMatrix(!0, !1),this.matrixWorld.decompose(Et, Ct, e), e
            }

            getWorldDirection(e) {
                this.updateWorldMatrix(!0, !1);const t = this.matrixWorld.elements;
                return e.set(t[8], t[9], t[10]).normalize()
            }

            raycast() {
            }

            traverse(e) {
                e(this);const t = this.children;
                for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e)
            }

            traverseVisible(e) {
                if (!1 == = this.visible) return; e(this);const t = this.children;
                for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e)
            }

            traverseAncestors(e) {const t = this.parent;
                null != = t && (e(t), t.traverseAncestors(e))}

            updateMatrix() {
                this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
            }

            updateMatrixWorld(e) {
                if (!this.visible) return;
                this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null == = this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0)
                ;const t = this.children;
                for (let n = 0, r = t.length; n < r; n++) {const r = t[n];
                    !0 != = r.matrixWorldAutoUpdate && !0 != = e || r.updateMatrixWorld(e)
                }
            }

            updateWorldMatrix(e, t) {const n = this.parent;
                if (!0 == = e && null != = n && !0 == = n.matrixWorldAutoUpdate && n.updateWorldMatrix(!0, !1),
                this.matrixAutoUpdate && this.updateMatrix(), null == = this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 == = t)
                {const e = this.children;
                    for (let t = 0, n = e.length; t < n; t++) {const n = e[t];
                        !0 == = n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0)
                    }
                }
            }

            toJSON(e) {const t = void 0 == = e || "string" == = typeof e, n = {};
                t && (e = {geometries:{
                },materials:
                {
                },textures:
                {
                },images:
                {
                },shapes:
                {
                },skeletons:
                {
                },animations:
                {
                },nodes:
                {
                }},n.metadata = {version:4.5, type:"Object", generator:"Object3D.toJSON"});const r = {};
                function i (t, n){
                    return void 0 == = t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid
                } if (r.uuid = this.uuid,
                r.type = this.type, "" != = this.name && (r.name = this.name), !0 == = this.castShadow && (r.castShadow = !0), !0 == = this.receiveShadow && (r.receiveShadow = !0), !1 == = this.visible && (r.visible = !1), !1 == = this.frustumCulled && (r.frustumCulled = !1), 0 != = this.renderOrder && (r.renderOrder = this.renderOrder), "{}" != = JSON.stringify(this.userData) && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), !1 == = this.matrixAutoUpdate && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), null != = this.instanceColor && (r.instanceColor = this.instanceColor.toJSON())),
                this.isScene)
                this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && !0 != = this.environment.isRenderTargetTexture && (r.environment = this.environment.toJSON(e).uuid);else
                if (this.isMesh || this.isLine || this.isPoints) {
                    r.geometry = i(e.geometries, this.geometry);const t = this.geometry.parameters;
                    if ( void 0 != = t && void 0 != = t.shapes){const n = t.shapes;
                        if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {const r = n[t];
                            i(e.shapes, r)
                        }
                        else i(e.shapes, n)
                    }
                } if (this.isSkinnedMesh && (r.bindMode = this.bindMode,r.bindMatrix = this.bindMatrix.toArray(),void
                0 != = this.skeleton && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)),void
                0 != = this.material)if (Array.isArray(this.material)) {const t =[];
                    for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
                    r.material = t
                } else r.material = i(e.materials, this.material); if (this.children.length > 0) {
                    r.children =[];
                    for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object)
                } if (this.animations.length > 0) {
                    r.animations =[];
                    for (let t = 0; t < this.animations.length; t++) {const n = this.animations[t];
                        r.animations.push(i(e.animations, n))
                    }
                } if (t) {const
                    t = a(e.geometries), r = a(e.materials), i = a(e.textures), s = a(e.images), o = a(e.shapes), l = a(e.skeletons), c = a(e.animations), u = a(e.nodes);
                    t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), s.length > 0 && (n.images = s), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c), u.length > 0 && (n.nodes = u)
                } return n.object = r,n;
                function a (e) {const t =[];
                for (const n in e){const r = e[n];
                    delete r.metadata, t.push(r)
                } return t}}

            clone(e) {
                return (new this.constructor).copy(this, e)
            }

            copy(e, t=!0) {
                if (this.name = e.name,
                this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 == = t)
                for (let n = 0; n < e.children.length; n++) {const t = e.children[n];
                    this.add(t.clone())
                } return this
            }
        } kt.DefaultUp = new Re(0, 1, 0), kt.DefaultMatrixAutoUpdate = !0, kt.DefaultMatrixWorldAutoUpdate = !0;const
        It = new Re, Nt = new Re, Ot = new Re, zt = new Re, Ut = new Re, Ft = new Re, Bt = new Re, Vt = new Re, Ht = new Re, Wt = new Re;
        class Gt {
            constructor(e=new Re, t=new Re, n=new Re) {
                this.a = e, this.b = t, this.c = n
            }

            static getNormal(e, t, n, r) {
                r.subVectors(n, t), It.subVectors(e, t), r.cross(It);const i = r.lengthSq();
                return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0)
            }

            static getBarycoord(e, t, n, r, i) {
                It.subVectors(r, t), Nt.subVectors(n, t), Ot.subVectors(e, t);const
                a = It.dot(It), s = It.dot(Nt), o = It.dot(Ot), l = Nt.dot(Nt), c = Nt.dot(Ot), u = a * l - s * s;
                if (0 == = u) return i.set(-2, -1, -1);const
                h = 1 / u, d = (l * o - s * c) * h, f = (a * c - s * o) * h;
                return i.set(1 - d - f, f, d)
            }

            static containsPoint(e, t, n, r) {
                return this.getBarycoord(e, t, n, r, zt),zt.x >= 0 && zt.y >= 0 && zt.x + zt.y <= 1
            }

            static getUV(e, t, n, r, i, a, s, o) {
                return this.getBarycoord(e, t, n, r, zt),
                o.set(0, 0), o.addScaledVector(i, zt.x), o.addScaledVector(a, zt.y), o.addScaledVector(s, zt.z), o
            }

            static isFrontFacing(e, t, n, r) {
                return It.subVectors(n, t),Nt.subVectors(e, t), It.cross(Nt).dot(r) < 0
            }

            set(e, t, n) {
                return this.a.copy(e),this.b.copy(t), this.c.copy(n), this
            }

            setFromPointsAndIndices(e, t, n, r) {
                return this.a.copy(e[t]),this.b.copy(e[n]), this.c.copy(e[r]), this
            }

            setFromAttributeAndIndices(e, t, n, r) {
                return this.a.fromBufferAttribute(e, t),
                this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this
            }

            clone() {
                return (new this.constructor).copy(this)
            }

            copy(e) {
                return this.a.copy(e.a),this.b.copy(e.b), this.c.copy(e.c), this
            }

            getArea() {
                return It.subVectors(this.c, this.b),Nt.subVectors(this.a, this.b), .5 * It.cross(Nt).length()
            }

            getMidpoint(e) {
                return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            }

            getNormal(e) {
                return Gt.getNormal(this.a, this.b, this.c, e)
            }

            getPlane(e) {
                return e.setFromCoplanarPoints(this.a, this.b, this.c)
            }

            getBarycoord(e, t) {
                return Gt.getBarycoord(e, this.a, this.b, this.c, t)
            }

            getUV(e, t, n, r, i) {
                return Gt.getUV(e, this.a, this.b, this.c, t, n, r, i)
            }

            containsPoint(e) {
                return Gt.containsPoint(e, this.a, this.b, this.c)
            }

            isFrontFacing(e) {
                return Gt.isFrontFacing(this.a, this.b, this.c, e)
            }

            intersectsBox(e) {
                return e.intersectsTriangle(this)
            }

            closestPointToPoint(e, t) {const n = this.a, r = this.b, i = this.c;
                let a, s;
                Ut.subVectors(r, n), Ft.subVectors(i, n), Vt.subVectors(e, n);const o = Ut.dot(Vt), l = Ft.dot(Vt);
                if (o <= 0 && l <= 0) return t.copy(n);
                Ht.subVectors(e, r);const c = Ut.dot(Ht), u = Ft.dot(Ht);
                if (c >= 0 && u <= c) return t.copy(r);const h = o * u - c * l;
                if (h <= 0 && o >= 0 && c <= 0) return a = o / (o - c),t.copy(n).addScaledVector(Ut, a);
                Wt.subVectors(e, i);const d = Ut.dot(Wt), f = Ft.dot(Wt);
                if (f >= 0 && d <= f) return t.copy(i);const p = d * l - o * f;
                if (p <= 0 && l >= 0 && f <= 0) return s = l / (l - f),t.copy(n).addScaledVector(Ft, s);const
                m = c * f - d * u;
                if (m <= 0 && u - c >= 0 && d - f >= 0) return Bt.subVectors(i, r),
                s = (u - c) / (u - c + (d - f)), t.copy(r).addScaledVector(Bt, s);const g = 1 / (m + p + h);
                return a = p * g,s = h * g, t.copy(n).addScaledVector(Ut, a).addScaledVector(Ft, s)
            }

            equals(e) {
                return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
            }
        } let jt = 0;
        class qt extends X {
            constructor() {
                super(), this.isMaterial = !0, Object.defineProperty(this, "id", {value:jt++}),
                this.uuid = J(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = s, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = H, this.stencilZFail = H, this.stencilZPass = H, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
            }

            get alphaTest() {
                return this._alphaTest
            }

            set alphaTest(e) {
                this._alphaTest > 0 != = e > 0 && this.version++, this._alphaTest = e
            }

            onBuild() {
            }

            onBeforeRender() {
            }

            onBeforeCompile() {
            }

            customProgramCacheKey() {
                return this.onBeforeCompile.toString()
            }

            setValues(e) {
                if ( void 0 != = e)for (const t in e){const n = e[t];
                    if ( void 0 == = n){
                        console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                        continue
                    }const r = this[t];
                    void
                    0 != = r ? r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                }
            }

            toJSON(e) {const t = void 0 == = e || "string" == = typeof e;
                t && (e = {textures:{
                },images:
                {
                }});const n = {metadata:{
                    version:
                    4.5, type:"Material", generator:"Material.toJSON"
                }};
                function r (e) {const t =[];
                for (const n in e){const r = e[n];
                    delete r.metadata, t.push(r)
                } return t}if (n.uuid = this.uuid,
                n.type = this.type, "" != = this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()),
                void 0 != = this.roughness && (n.roughness = this.roughness),void
                0 != = this.metalness && (n.metalness = this.metalness),void
                0 != = this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
                void
                0 != = this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 != = this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
                void
                0 != = this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
                void 0 != = this.shininess && (n.shininess = this.shininess),void
                0 != = this.clearcoat && (n.clearcoat = this.clearcoat),void
                0 != = this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
                void 0 != = this.iridescence && (n.iridescence = this.iridescence),void
                0 != = this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR),void
                0 != = this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity),
                this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity),
                this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale),
                this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()),
                this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias),
                this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
                void 0 != = this.combine && (n.combine = this.combine)),void
                0 != = this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),void
                0 != = this.reflectivity && (n.reflectivity = this.reflectivity),void
                0 != = this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
                void
                0 != = this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
                void
                0 != = this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
                void 0 != = this.attenuationDistance && (n.attenuationDistance = this.attenuationDistance),void
                0 != = this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()),void
                0 != = this.size && (n.size = this.size), null != = this.shadowSide && (n.shadowSide = this.shadowSide),
                void
                0 != = this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 != = this.blending && (n.blending = this.blending), 0 != = this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 == = this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass,
                void
                0 != = this.rotation && 0 != = this.rotation && (n.rotation = this.rotation), !0 == = this.polygonOffset && (n.polygonOffset = !0), 0 != = this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 != = this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
                void 0 != = this.linewidth && 1 != = this.linewidth && (n.linewidth = this.linewidth),void
                0 != = this.dashSize && (n.dashSize = this.dashSize),void
                0 != = this.gapSize && (n.gapSize = this.gapSize),void
                0 != = this.scale && (n.scale = this.scale), !0 == = this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 == = this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 == = this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 == = this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" != = this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" != = this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 == = this.flatShading && (n.flatShading = this.flatShading), !1 == = this.visible && (n.visible = !1), !1 == = this.toneMapped && (n.toneMapped = !1), !1 == = this.fog && (n.fog = !1), "{}" != = JSON.stringify(this.userData) && (n.userData = this.userData), t)
                {const t = r(e.textures), i = r(e.images);
                    t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i)
                } return n
            }

            clone() {
                return (new this.constructor).copy(this)
            }

            copy(e) {
                this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;const
                t = e.clippingPlanes;
                let n = null;
                if (null != = t) {const e = t.length;
                    n = new Array(e);
                    for (let r = 0; r != = e; ++r) n[r] = t[r].clone()
                } return this.clippingPlanes = n,
                this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
            }

            dispose() {
                this.dispatchEvent({type:"dispose"})}

            set needsUpdate(e) {
                !0 == = e && this.version++
            }
        } class Xt extends qt {
            constructor(e) {
                super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new _e(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e)
            }

            copy(e) {
                return super.copy(e),
                this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this
            }
        }const Yt = new Re, Kt = new ae; class Zt {
            constructor(e, t, n) {
                if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = void
                0 != = e ? e.length / t : 0, this.normalized = !0 == = n, this.usage = W, this.updateRange = {offset:
                0, count:-1},this.version = 0
            }

            onUploadCallback() {
            }

            set needsUpdate(e) {
                !0 == = e && this.version++
            }

            setUsage(e) {
                return this.usage = e,this
            }

            copy(e) {
                return this.name = e.name,
                this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
            }

            copyAt(e, t, n) {
                e *= this.itemSize, n *= t.itemSize;
                for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
                return this
            }

            copyArray(e) {
                return this.array.set(e),this
            }

            applyMatrix3(e) {
                if (2 == = this.itemSize) for (let t = 0, n = this.count; t < n; t++)
                    Kt.fromBufferAttribute(this, t), Kt.applyMatrix3(e), this.setXY(t, Kt.x, Kt.y);
                else if (3 == = this.itemSize) for (let t = 0, n = this.count; t < n; t++)
                    Yt.fromBufferAttribute(this, t), Yt.applyMatrix3(e), this.setXYZ(t, Yt.x, Yt.y, Yt.z); return this
            }

            applyMatrix4(e) {
                for (let t = 0, n = this.count; t < n; t++)
                    Yt.fromBufferAttribute(this, t), Yt.applyMatrix4(e), this.setXYZ(t, Yt.x, Yt.y, Yt.z);
                return this
            }

            applyNormalMatrix(e) {
                for (let t = 0, n = this.count; t < n; t++)
                    Yt.fromBufferAttribute(this, t), Yt.applyNormalMatrix(e), this.setXYZ(t, Yt.x, Yt.y, Yt.z);
                return this
            }

            transformDirection(e) {
                for (let t = 0, n = this.count; t < n; t++)
                    Yt.fromBufferAttribute(this, t), Yt.transformDirection(e), this.setXYZ(t, Yt.x, Yt.y, Yt.z);
                return this
            }

            set(e, t=0) {
                return this.array.set(e, t),this
            }

            getX(e) {
                let t = this.array[e * this.itemSize];
                return this.normalized && (t = re(t, this.array)),t
            }

            setX(e, t) {
                return this.normalized && (t = ie(t, this.array)),this.array[e * this.itemSize] = t, this
            }

            getY(e) {
                let t = this.array[e * this.itemSize + 1];
                return this.normalized && (t = re(t, this.array)),t
            }

            setY(e, t) {
                return this.normalized && (t = ie(t, this.array)),this.array[e * this.itemSize + 1] = t, this
            }

            getZ(e) {
                let t = this.array[e * this.itemSize + 2];
                return this.normalized && (t = re(t, this.array)),t
            }

            setZ(e, t) {
                return this.normalized && (t = ie(t, this.array)),this.array[e * this.itemSize + 2] = t, this
            }

            getW(e) {
                let t = this.array[e * this.itemSize + 3];
                return this.normalized && (t = re(t, this.array)),t
            }

            setW(e, t) {
                return this.normalized && (t = ie(t, this.array)),this.array[e * this.itemSize + 3] = t, this
            }

            setXY(e, t, n) {
                return e *= this.itemSize,this.normalized && (t = ie(t, this.array), n = ie(n, this.array)),
                this.array[e + 0] = t, this.array[e + 1] = n, this
            }

            setXYZ(e, t, n, r) {
                return e *= this.itemSize,
                this.normalized && (t = ie(t, this.array), n = ie(n, this.array), r = ie(r, this.array)),
                this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this
            }

            setXYZW(e, t, n, r, i) {
                return e *= this.itemSize,
                this.normalized && (t = ie(t, this.array), n = ie(n, this.array), r = ie(r, this.array), i = ie(i, this.array)),
                this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this
            }

            onUpload(e) {
                return this.onUploadCallback = e,this
            }

            clone() {
                return new this.constructor(this.array, this.itemSize).copy(this)
            }

            toJSON() {const e = {itemSize:this.itemSize, type:this.array.constructor.name, array:
                Array.from(this.array), normalized:this.normalized};
                return "" != = this.name && (e.name = this.name),
                this.usage != = W && (e.usage = this.usage), 0 == = this.updateRange.offset && -1 == = this.updateRange.count || (e.updateRange = this.updateRange), e
            }

            copyColorsArray() {
                console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
            }

            copyVector2sArray() {
                console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
            }

            copyVector3sArray() {
                console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
            }

            copyVector4sArray() {
                console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
            }
        } class Jt extends Zt {
            constructor(e, t, n) {
                super(new Uint16Array(e), t, n)
            }
        } class $t extends Zt {
            constructor(e, t, n) {
                super(new Uint32Array(e), t, n)
            }
        } class Qt extends Zt {
            constructor(e, t, n) {
                super(new Float32Array(e), t, n)
            }
        } let en = 0;const tn = new lt, nn = new kt, rn = new Re, an = new Ie, sn = new Ie, on = new Re;
        class ln extends X {
            constructor() {
                super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {value:en++}),
                this.uuid = J(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups =[],
                this.boundingBox = null, this.boundingSphere = null, this.drawRange = {start:0, count:1 / 0},
                this.userData = {}
            }

            getIndex() {
                return this.index
            }

            setIndex(e) {
                return Array.isArray(e) ? this.index = new (oe(e) ? $t : Jt) (e, 1):this.index = e, this
            }

            getAttribute(e) {
                return this.attributes[e]
            }

            setAttribute(e, t) {
                return this.attributes[e] = t,this
            }

            deleteAttribute(e) {
                return delete this.attributes[e], this
            }

            hasAttribute(e) {
                return void 0 != = this.attributes[e]
            }

            addGroup(e, t, n=0) {
                this.groups.push({start:e, count:t, materialIndex:n})}

            clearGroups() {
                this.groups =[]}

            setDrawRange(e, t) {
                this.drawRange.start = e, this.drawRange.count = t
            }

            applyMatrix4(e) {const t = this.attributes.position;
                void 0 != = t && (t.applyMatrix4(e), t.needsUpdate = !0);const n = this.attributes.normal;
                if ( void 0 != = n){const t = (new se).getNormalMatrix(e); n.applyNormalMatrix(t), n.needsUpdate = !0
                }const r = this.attributes.tangent;
                return void 0 != = r && (r.transformDirection(e), r.needsUpdate = !0),
                null != = this.boundingBox && this.computeBoundingBox(), null != = this.boundingSphere && this.computeBoundingSphere(), this
            }

            applyQuaternion(e) {
                return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn), this
            }

            rotateX(e) {
                return tn.makeRotationX(e),this.applyMatrix4(tn), this
            }

            rotateY(e) {
                return tn.makeRotationY(e),this.applyMatrix4(tn), this
            }

            rotateZ(e) {
                return tn.makeRotationZ(e),this.applyMatrix4(tn), this
            }

            translate(e, t, n) {
                return tn.makeTranslation(e, t, n),this.applyMatrix4(tn), this
            }

            scale(e, t, n) {
                return tn.makeScale(e, t, n),this.applyMatrix4(tn), this
            }

            lookAt(e) {
                return nn.lookAt(e),nn.updateMatrix(), this.applyMatrix4(nn.matrix), this
            }

            center() {
                return this.computeBoundingBox(),
                this.boundingBox.getCenter(rn).negate(), this.translate(rn.x, rn.y, rn.z), this
            }

            setFromPoints(e) {const t =[];
                for (let n = 0, r = e.length; n < r; n++) {const r = e[n];
                    t.push(r.x, r.y, r.z || 0)
                } return this.setAttribute("position", new Qt(t, 3)),this
            }

            computeBoundingBox() {
                null == = this.boundingBox && (this.boundingBox = new Ie);const
                e = this.attributes.position, t = this.morphAttributes.position;
                if (e && e.isGLBufferAttribute)
                    return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
                void this.boundingBox.set(new Re(-1 / 0, -1 / 0, -1 / 0), new Re(1 / 0, 1 / 0, 1 / 0));
                if ( void 0 != = e){
                    if (this.boundingBox.setFromBufferAttribute(e),t)
                    for (let n = 0, r = t.length; n < r; n++) {const e = t[n];
                        an.setFromBufferAttribute(e), this.morphTargetsRelative ? (on.addVectors(this.boundingBox.min, an.min), this.boundingBox.expandByPoint(on), on.addVectors(this.boundingBox.max, an.max), this.boundingBox.expandByPoint(on)):
                        (this.boundingBox.expandByPoint(an.min), this.boundingBox.expandByPoint(an.max))}
                }else this.boundingBox.makeEmpty();
                (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
            }

            computeBoundingSphere() {
                null == = this.boundingSphere && (this.boundingSphere = new Qe);const
                e = this.attributes.position, t = this.morphAttributes.position;
                if (e && e.isGLBufferAttribute)
                    return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
                void this.boundingSphere.set(new Re, 1 / 0); if (e) {const n = this.boundingSphere.center;
                    if (an.setFromBufferAttribute(e),t)for (let e = 0, i = t.length; e < i; e++) {const n = t[e];
                        sn.setFromBufferAttribute(n), this.morphTargetsRelative ? (on.addVectors(an.min, sn.min), an.expandByPoint(on), on.addVectors(an.max, sn.max), an.expandByPoint(on)):
                        (an.expandByPoint(sn.min), an.expandByPoint(sn.max))} an.getCenter(n);
                    let r = 0;
                    for (let t = 0, i = e.count; t < i; t++)
                        on.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(on));
                    if (t) for (let i = 0, a = t.length; i < a; i++) {const a = t[i], s = this.morphTargetsRelative;
                        for (let t = 0, i = a.count; t < i; t++)
                            on.fromBufferAttribute(a, t), s && (rn.fromBufferAttribute(e, t), on.add(rn)),
                        r = Math.max(r, n.distanceToSquared(on))
                    }
                    this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }

            computeTangents() {const e = this.index, t = this.attributes;
                if (null == = e || void 0 == = t.position || void 0 == = t.normal || void 0 == = t.uv)return
                void console.
                error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const
                n = e.array, r = t.position.array, i = t.normal.array, a = t.uv.array, s = r.length / 3;
                !1 == = this.hasAttribute("tangent") && this.setAttribute("tangent", new Zt(new Float32Array(4 * s), 4));const
                o = this.getAttribute("tangent").array, l =[],c =[];
                for (let E = 0; E < s; E++) l[E] = new Re, c[E] = new Re;const
                u = new Re, h = new Re, d = new Re, f = new ae, p = new ae, m = new ae, g = new Re, v = new Re;
                function y (e, t, n){
                    u.fromArray(r, 3 * e), h.fromArray(r, 3 * t), d.fromArray(r, 3 * n), f.fromArray(a, 2 * e), p.fromArray(a, 2 * t), m.fromArray(a, 2 * n), h.sub(u), d.sub(u), p.sub(f), m.sub(f);const
                    i = 1 / (p.x * m.y - m.x * p.y);
                    isFinite(i) && (g.copy(h).multiplyScalar(m.y).addScaledVector(d, -p.y).multiplyScalar(i), v.copy(d).multiplyScalar(p.x).addScaledVector(h, -m.x).multiplyScalar(i), l[e].add(g), l[t].add(g), l[n].add(g), c[e].add(v), c[t].add(v), c[n].add(v))}
                let _ = this.groups;
                0 == = _.length && (_ =[{start:0, count:n.length}]);
                for (let E = 0, T = _.length; E < T; ++E) {const e = _[E], t = e.start;
                    for (let r = t, i = t + e.count; r < i; r += 3) y(n[r + 0], n[r + 1], n[r + 2])
                }const x = new Re, b = new Re, w = new Re, S = new Re; function M (e) {w.fromArray(i, 3 * e), S.copy(w);const
                t = l[e];
                x.copy(t), x.sub(w.multiplyScalar(w.dot(t))).normalize(), b.crossVectors(S, t);const
                n = b.dot(c[e]) < 0 ? -1 : 1;
                o[4 * e] = x.x, o[4 * e + 1] = x.y, o[4 * e + 2] = x.z, o[4 * e + 3] = n}
                for (let E = 0, T = _.length; E < T; ++E) {const e = _[E], t = e.start;
                    for (let r = t, i = t + e.count; r < i; r += 3) M(n[r + 0]), M(n[r + 1]), M(n[r + 2])
                }
            }

            computeVertexNormals() {const e = this.index, t = this.getAttribute("position");
                if ( void 0 != = t){
                    let n = this.getAttribute("normal");
                    if ( void 0 == = n)n = new Zt(new Float32Array(3 * t.count), 3), this.setAttribute("normal", n);else
                    for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);const
                    r = new Re, i = new Re, a = new Re, s = new Re, o = new Re, l = new Re, c = new Re, u = new Re;
                    if (e) for (let h = 0, d = e.count; h < d; h += 3) {const
                        d = e.getX(h + 0), f = e.getX(h + 1), p = e.getX(h + 2);
                        r.fromBufferAttribute(t, d), i.fromBufferAttribute(t, f), a.fromBufferAttribute(t, p), c.subVectors(a, i), u.subVectors(r, i), c.cross(u), s.fromBufferAttribute(n, d), o.fromBufferAttribute(n, f), l.fromBufferAttribute(n, p), s.add(c), o.add(c), l.add(c), n.setXYZ(d, s.x, s.y, s.z), n.setXYZ(f, o.x, o.y, o.z), n.setXYZ(p, l.x, l.y, l.z)
                    }
                    else for (let e = 0, h = t.count; e < h; e += 3)
                        r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), c.subVectors(a, i), u.subVectors(r, i), c.cross(u), n.setXYZ(e + 0, c.x, c.y, c.z), n.setXYZ(e + 1, c.x, c.y, c.z), n.setXYZ(e + 2, c.x, c.y, c.z);
                    this.normalizeNormals(), n.needsUpdate = !0
                }
            }

            merge() {
                return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),
                this
            }

            normalizeNormals() {const e = this.attributes.normal;
                for (let t = 0, n = e.count; t < n; t++)
                    on.fromBufferAttribute(e, t), on.normalize(), e.setXYZ(t, on.x, on.y, on.z)
            }

            toNonIndexed() {
                function e (e, t)
                {const n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r);
                    let s = 0, o = 0;
                    for (let l = 0, c = t.length; l < c; l++) {
                        s = e.isInterleavedBufferAttribute ? t[l] * e.data.stride + e.offset : t[l] * r;
                        for (let e = 0; e < r; e++) a[o++] = n[s++]
                    } return new Zt(a, r, i)
                } if (null == = this.index)
                    return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
                this;const t = new ln, n = this.index.array, r = this.attributes; for (const s in r)
                {const i = e(r[s], n);
                    t.setAttribute(s, i)
                }const i = this.morphAttributes;
                for (const s in i){const r =[],a = i[s];
                    for (let t = 0, i = a.length; t < i; t++) {const i = e(a[t], n);
                        r.push(i)
                    } t.morphAttributes[s] = r
                } t.morphTargetsRelative = this.morphTargetsRelative;const a = this.groups;
                for (let s = 0, o = a.length; s < o; s++) {const e = a[s];
                    t.addGroup(e.start, e.count, e.materialIndex)
                } return t
            }

            toJSON() {const e = {metadata:{
                version:
                4.5, type:"BufferGeometry", generator:"BufferGeometry.toJSON"
            }};
                if (e.uuid = this.uuid,
                e.type = this.type, "" != = this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData),
                void 0 != = this.parameters){const t = this.parameters;
                    for (const n in t)void 0 != = t[n] && (e[n] = t[n]); return e
                } e.data = {attributes:{
                }};const t = this.index;
                null != = t && (e.data.index = {type:t.array.constructor.name, array:Array.prototype.slice.call(t.array)})
                ;const n = this.attributes;
                for (const o in n){const t = n[o];
                    e.data.attributes[o] = t.toJSON(e.data)
                }const r = {};
                let i = !1;
                for (const o in this.morphAttributes){const t = this.morphAttributes[o], n =[];
                    for (let r = 0, i = t.length; r < i; r++) {const i = t[r];
                        n.push(i.toJSON(e.data))
                    } n.length > 0 && (r[o] = n, i = !0)}
                i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);const
                a = this.groups;
                a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));const s = this.boundingSphere;
                return null != = s && (e.data.boundingSphere = {center:s.center.toArray(), radius:s.radius}),e
            }

            clone() {
                return (new this.constructor).copy(this)
            }

            copy(e) {
                this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups =[],
                this.boundingBox = null, this.boundingSphere = null;const t = {};
                this.name = e.name;const n = e.index;
                null != = n && this.setIndex(n.clone(t));const r = e.attributes;
                for (const l in r){const e = r[l];
                    this.setAttribute(l, e.clone(t))
                }const i = e.morphAttributes;
                for (const l in i){const e =[],n = i[l];
                    for (let r = 0, i = n.length; r < i; r++) e.push(n[r].clone(t));
                    this.morphAttributes[l] = e
                } this.morphTargetsRelative = e.morphTargetsRelative;const a = e.groups;
                for (let l = 0, c = a.length; l < c; l++) {const e = a[l];
                    this.addGroup(e.start, e.count, e.materialIndex)
                }const s = e.boundingBox;
                null != = s && (this.boundingBox = s.clone());const o = e.boundingSphere;
                return null != = o && (this.boundingSphere = o.clone()),
                this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData,
                void 0 != = e.parameters && (this.parameters = Object.assign({}, e.parameters)), this
            }

            dispose() {
                this.dispatchEvent({type:"dispose"})}
        }const
        cn = new lt, un = new ot, hn = new Qe, dn = new Re, fn = new Re, pn = new Re, mn = new Re, gn = new Re, vn = new Re, yn = new Re, _n = new Re, xn = new Re, bn = new ae, wn = new ae, Sn = new ae, Mn = new Re, En = new Re;
        class Tn extends kt {
            constructor(e=new ln, t=new Xt) {
                super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets()
            }

            copy(e, t) {
                return super.copy(e, t),void
                0 != = e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),void
                0 != = e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this
            }

            updateMorphTargets() {const e = this.geometry.morphAttributes, t = Object.keys(e);
                if (t.length > 0) {const n = e[t[0]];
                    if ( void 0 != = n){
                        this.morphTargetInfluences =[],this.morphTargetDictionary = {};
                        for (let e = 0, t = n.length; e < t; e++) {const t = n[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e
                        }
                    }
                }
            }

            raycast(e, t) {const n = this.geometry, r = this.material, i = this.matrixWorld;
                if ( void 0 == = r)return;
                if (null == = n.boundingSphere && n.computeBoundingSphere(),
                hn.copy(n.boundingSphere), hn.applyMatrix4(i), !1 == = e.ray.intersectsSphere(hn))return;
                if (cn.copy(i).invert(),
                un.copy(e.ray).applyMatrix4(cn), null != = n.boundingBox && !1 == = un.intersectsBox(n.boundingBox))
                return;
                let a;const
                s = n.index, o = n.attributes.position, l = n.morphAttributes.position, c = n.morphTargetsRelative, u = n.attributes.uv, h = n.attributes.uv2, d = n.groups, f = n.drawRange;
                if (null != = s) if (Array.isArray(r))
                    for (let p = 0, m = d.length; p < m; p++) {const n = d[p], i = r[n.materialIndex];
                        for (let r = Math.max(n.start, f.start), d = Math.min(s.count, Math.min(n.start + n.count, f.start + f.count)); r < d; r += 3) {const
                            d = s.getX(r), f = s.getX(r + 1), p = s.getX(r + 2);
                            a = Cn(this, i, e, un, o, l, c, u, h, d, f, p), a && (a.faceIndex = Math.floor(r / 3), a.face.materialIndex = n.materialIndex, t.push(a))}
                    }
                else {
                    for (let n = Math.max(0, f.start), i = Math.min(s.count, f.start + f.count); n < i; n += 3) {const
                        i = s.getX(n), d = s.getX(n + 1), f = s.getX(n + 2);
                        a = Cn(this, r, e, un, o, l, c, u, h, i, d, f), a && (a.faceIndex = Math.floor(n / 3), t.push(a))}
                }
                else if ( void 0 != = o)
                if (Array.isArray(r)) for (let p = 0, m = d.length; p < m; p++) {const n = d[p], i = r[n.materialIndex];
                    for (let r = Math.max(n.start, f.start), s = Math.min(o.count, Math.min(n.start + n.count, f.start + f.count)); r < s; r += 3) {
                        a = Cn(this, i, e, un, o, l, c, u, h, r, r + 1, r + 2), a && (a.faceIndex = Math.floor(r / 3), a.face.materialIndex = n.materialIndex, t.push(a))}
                }
                else {
                    for (let n = Math.max(0, f.start), i = Math.min(o.count, f.start + f.count); n < i; n += 3) {
                        a = Cn(this, r, e, un, o, l, c, u, h, n, n + 1, n + 2), a && (a.faceIndex = Math.floor(n / 3), t.push(a))}
                }
            }
        } function Cn (e, t, n, r, i, s, o, l, c, u, h, d){
            dn.fromBufferAttribute(i, u), fn.fromBufferAttribute(i, h), pn.fromBufferAttribute(i, d);const
            f = e.morphTargetInfluences;
            if (s && f) {
                yn.set(0, 0, 0), _n.set(0, 0, 0), xn.set(0, 0, 0);
                for (let e = 0, t = s.length; e < t; e++) {const t = f[e], n = s[e];
                    0 != = t && (mn.fromBufferAttribute(n, u), gn.fromBufferAttribute(n, h), vn.fromBufferAttribute(n, d), o ? (yn.addScaledVector(mn, t), _n.addScaledVector(gn, t), xn.addScaledVector(vn, t)):
                    (yn.addScaledVector(mn.sub(dn), t), _n.addScaledVector(gn.sub(fn), t), xn.addScaledVector(vn.sub(pn), t)))}
                dn.add(yn), fn.add(_n), pn.add(xn)
            } e.isSkinnedMesh && (e.boneTransform(u, dn), e.boneTransform(h, fn), e.boneTransform(d, pn));const
            p = function(e, t, n, r, i, s, o, l) {
                let c;
                if (c = 1 == = t.side ? r.intersectTriangle(o, s, i, !0, l) : r.intersectTriangle(i, s, o, t.side != = a, l),
                null == = c)return null;
                En.copy(l), En.applyMatrix4(e.matrixWorld);const u = n.ray.origin.distanceTo(En);
                return u < n.near || u > n.far ? null : {distance:u, point:En.clone(), object:e}}
            (e, t, n, r, dn, fn, pn, Mn);
            if (p) {
                l && (bn.fromBufferAttribute(l, u), wn.fromBufferAttribute(l, h), Sn.fromBufferAttribute(l, d), p.uv = Gt.getUV(Mn, dn, fn, pn, bn, wn, Sn, new ae)),
                c && (bn.fromBufferAttribute(c, u), wn.fromBufferAttribute(c, h), Sn.fromBufferAttribute(c, d), p.uv2 = Gt.getUV(Mn, dn, fn, pn, bn, wn, Sn, new ae))
                ;const e = {a:u, b:h, c:d, normal:new Re, materialIndex:0};
                Gt.getNormal(dn, fn, pn, e.normal), p.face = e
            } return p
        } class An extends ln {
            constructor(e=1, t=1, n=1, r=1, i=1, a=1) {
                super(), this.type = "BoxGeometry", this.parameters = {width:e, height:t, depth:n, widthSegments:
                r, heightSegments:i, depthSegments:a};const s = this;
                r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);const o =[],l =[],c =[],u =[];
                let h = 0, d = 0;
                function f (e, t, n, r, i, a, f, p, m, g, v)
                {const y = a / m, _ = f / g, x = a / 2, b = f / 2, w = p / 2, S = m + 1, M = g + 1;
                    let E = 0, T = 0;const C = new Re; for (let s = 0; s < M; s++) {const a = s * _ - b;
                    for (let o = 0; o < S; o++) {const h = o * y - x;
                        C[e] = h * r, C[t] = a * i, C[n] = w, l.push(C.x, C.y, C.z), C[e] = 0, C[t] = 0, C[n] = p > 0 ? 1 : -1, c.push(C.x, C.y, C.z), u.push(o / m), u.push(1 - s / g), E += 1
                    }
                } for (let s = 0; s < g; s++)
                    for (let e = 0; e < m; e++) {const
                        t = h + e + S * s, n = h + e + S * (s + 1), r = h + (e + 1) + S * (s + 1), i = h + (e + 1) + S * s;
                        o.push(t, n, i), o.push(n, r, i), T += 6
                    } s.addGroup(d, T, v), d += T, h += E
                }
                f("z", "y", "x", -1, -1, n, t, e, a, i, 0), f("z", "y", "x", 1, -1, n, t, -e, a, i, 1), f("x", "z", "y", 1, 1, e, n, t, r, a, 2), f("x", "z", "y", 1, -1, e, n, -t, r, a, 3), f("x", "y", "z", 1, -1, e, t, n, r, i, 4), f("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(o), this.setAttribute("position", new Qt(l, 3)), this.setAttribute("normal", new Qt(c, 3)), this.setAttribute("uv", new Qt(u, 2))
            }

            static fromJSON(e) {
                return new An(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
            }
        } function Ln (e) {const t = {};
        for (const n in e){
            t[n] = {};
            for (const r in e[n]){const i = e[n][r];
                i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? t[n][r] = i.clone() : Array.isArray(i) ? t[n][r] = i.slice() : t[n][r] = i
            }
        } return t}function Pn (e) {const t = {};
        for (let n = 0; n < e.length; n++) {const r = Ln(e[n]);
            for (const e in r)t[e] = r[e]
        } return t}const Rn = {clone:Ln, merge:Pn};
        class Dn extends qt {
            constructor(e) {
                super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups =[],
                this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {derivatives:
                !1, fragDepth:!1, drawBuffers:!1, shaderTextureLOD:!1},this.defaultAttributeValues = {color:[1, 1, 1],
                uv:[0, 0],uv2:[0, 0]},this.index0AttributeName = void
                0, this.uniformsNeedUpdate = !1, this.glslVersion = null,void 0 != = e && this.setValues(e)
            }

            copy(e) {
                return super.copy(e),
                this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Ln(e.uniforms), this.uniformsGroups = function(e)
                {const t =[];
                    for (let n = 0; n < e.length; n++) t.push(e[n].clone());
                    return t
                }
                (e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
            }

            toJSON(e) {const t = super.toJSON(e);
                t.glslVersion = this.glslVersion, t.uniforms = {};
                for (const r in this.uniforms){const n = this.uniforms[r].value;
                    n && n.isTexture ? t.uniforms[r] = {type : "t", value:n.toJSON(e).uuid}:
                    n && n.isColor ? t.uniforms[r] = {type : "c", value:n.getHex()}:
                    n && n.isVector2 ? t.uniforms[r] = {type : "v2", value:n.toArray()}:
                    n && n.isVector3 ? t.uniforms[r] = {type : "v3", value:n.toArray()}:
                    n && n.isVector4 ? t.uniforms[r] = {type : "v4", value:n.toArray()}:
                    n && n.isMatrix3 ? t.uniforms[r] = {type : "m3", value:n.toArray()}:
                    n && n.isMatrix4 ? t.uniforms[r] = {type : "m4", value:n.toArray()}:t.uniforms[r] = {value:n}}
                Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;const
                n = {};
                for (const r in this.extensions)!0 == = this.extensions[r] && (n[r] = !0);
                return Object.keys(n).length > 0 && (t.extensions = n),t
            }
        } class kn extends kt {
            constructor() {
                super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new lt, this.projectionMatrix = new lt, this.projectionMatrixInverse = new lt
            }

            copy(e, t) {
                return super.copy(e, t),
                this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
            }

            getWorldDirection(e) {
                this.updateWorldMatrix(!0, !1);const t = this.matrixWorld.elements;
                return e.set(-t[8], -t[9], -t[10]).normalize()
            }

            updateMatrixWorld(e) {
                super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }

            updateWorldMatrix(e, t) {
                super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
            }

            clone() {
                return (new this.constructor).copy(this)
            }
        } class In extends kn {
            constructor(e=50, t=1, n=.1, r=2e3) {
                super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
            }

            copy(e, t) {
                return super.copy(e, t),
                this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null == = e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
            }

            setFocalLength(e) {const t = .5 * this.getFilmHeight() / e;
                this.fov = 2 * Z * Math.atan(t), this.updateProjectionMatrix()
            }

            getFocalLength() {const e = Math.tan(.5 * K * this.fov);
                return .5 * this.getFilmHeight() / e
            }

            getEffectiveFOV() {
                return 2 * Z * Math.atan(Math.tan(.5 * K * this.fov) / this.zoom)
            }

            getFilmWidth() {
                return this.filmGauge * Math.min(this.aspect, 1)
            }

            getFilmHeight() {
                return this.filmGauge / Math.max(this.aspect, 1)
            }

            setViewOffset(e, t, n, r, i, a) {
                this.aspect = e / t, null == = this.view && (this.view = {enabled:!0, fullWidth:1, fullHeight:1, offsetX:
                0, offsetY:0, width:1, height:1}),
                this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
            }

            clearViewOffset() {
                null != = this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
            }

            updateProjectionMatrix() {const e = this.near;
                let t = e * Math.tan(.5 * K * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r;const
                a = this.view;
                if (null != = this.view && this.view.enabled) {const e = a.fullWidth, s = a.fullHeight;
                    i += a.offsetX * r / e, t -= a.offsetY * n / s, r *= a.width / e, n *= a.height / s
                }const s = this.filmOffset;
                0 != = s && (i += e * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }

            toJSON(e) {const t = super.toJSON(e);
                return t.object.fov = this.fov,
                t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null != = this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
            }
        }const Nn = 90;
        class On extends kt {
            constructor(e, t, n) {
                super(), this.type = "CubeCamera", this.renderTarget = n;const r = new In(Nn, 1, e, t);
                r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new Re(1, 0, 0)), this.add(r);const
                i = new In(Nn, 1, e, t);
                i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new Re(-1, 0, 0)), this.add(i);const
                a = new In(Nn, 1, e, t);
                a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new Re(0, 1, 0)), this.add(a);const
                s = new In(Nn, 1, e, t);
                s.layers = this.layers, s.up.set(0, 0, -1), s.lookAt(new Re(0, -1, 0)), this.add(s);const
                o = new In(Nn, 1, e, t);
                o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new Re(0, 0, 1)), this.add(o);const
                l = new In(Nn, 1, e, t);
                l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new Re(0, 0, -1)), this.add(l)
            }

            update(e, t) {
                null == = this.parent && this.updateMatrixWorld();const n = this.renderTarget,[r, i, a, s, o, l]=
                this.children, c = e.getRenderTarget(), u = e.toneMapping, h = e.xr.enabled;
                e.toneMapping = 0, e.xr.enabled = !1;const d = n.texture.generateMipmaps;
                n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, r), e.setRenderTarget(n, 1), e.render(t, i), e.setRenderTarget(n, 2), e.render(t, a), e.setRenderTarget(n, 3), e.render(t, s), e.setRenderTarget(n, 4), e.render(t, o), n.texture.generateMipmaps = d, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(c), e.toneMapping = u, e.xr.enabled = h, n.texture.needsPMREMUpdate = !0
            }
        } class zn extends Ee {
            constructor(e, t, n, r, i, a, s, l, c, u) {
                super(e = void 0 != = e ? e :[],t = void 0 != = t ? t : o, n, r, i, a, s, l, c, u),
                this.isCubeTexture = !0, this.flipY = !1
            }

            get images() {
                return this.image
            }

            set images(e) {
                this.image = e
            }
        } class Un extends Ce {
            constructor(e, t= {
            })

            {
                super(e, e, t), this.isWebGLCubeRenderTarget = !0;const n = {width:e, height:e, depth:1},r =[
                n, n, n, n, n, n];
                this.texture = new zn(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps =
                void 0 != = t.generateMipmaps && t.generateMipmaps, this.texture.minFilter = void
                0 != = t.minFilter ? t.minFilter : y
            }

            fromEquirectangularTexture(e, t) {
                this.texture.type = t.type, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;const
                n = {uniforms:{
                    tEquirect:
                    {
                        value:
                        null
                    }
                },vertexShader:
                "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t", fragmentShader:
                "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"},
                r = new An(5, 5, 5), i = new Dn({name:"CubemapFromEquirect", uniforms:Ln(n.uniforms), vertexShader:
                n.vertexShader, fragmentShader:n.fragmentShader, side:1, blending:0});
                i.uniforms.tEquirect.value = t;const a = new Tn(r, i), s = t.minFilter;
                t.minFilter == = _ && (t.minFilter = y); return new On(1, 10, this).update(e, a),
                t.minFilter = s, a.geometry.dispose(), a.material.dispose(), this
            }

            clear(e, t, n, r) {const i = e.getRenderTarget();
                for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
                e.setRenderTarget(i)
            }
        }const Fn = new Re, Bn = new Re, Vn = new se; class Hn {
            constructor(e=new Re(1,0,0),t=0)

            {
                this.isPlane = !0, this.normal = e, this.constant = t
            }

            set(e, t) {
                return this.normal.copy(e),this.constant = t, this
            }

            setComponents(e, t, n, r) {
                return this.normal.set(e, t, n),this.constant = r, this
            }

            setFromNormalAndCoplanarPoint(e, t) {
                return this.normal.copy(e),this.constant = -t.dot(this.normal), this
            }

            setFromCoplanarPoints(e, t, n) {const r = Fn.subVectors(n, t).cross(Bn.subVectors(e, t)).normalize();
                return this.setFromNormalAndCoplanarPoint(r, e),this
            }

            copy(e) {
                return this.normal.copy(e.normal),this.constant = e.constant, this
            }

            normalize() {const e = 1 / this.normal.length();
                return this.normal.multiplyScalar(e),this.constant *= e, this
            }

            negate() {
                return this.constant *= -1,this.normal.negate(), this
            }

            distanceToPoint(e) {
                return this.normal.dot(e) + this.constant
            }

            distanceToSphere(e) {
                return this.distanceToPoint(e.center) - e.radius
            }

            projectPoint(e, t) {
                return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
            }

            intersectLine(e, t) {const n = e.delta(Fn), r = this.normal.dot(n);
                if (0 == = r) return 0 == = this.distanceToPoint(e.start) ? t.copy(e.start) : null;const
                i = -(e.start.dot(this.normal) + this.constant) / r;
                return i < 0 || i > 1 ? null : t.copy(n).multiplyScalar(i).add(e.start)
            }

            intersectsLine(e) {const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
                return t < 0 && n > 0 || n < 0 && t > 0
            }

            intersectsBox(e) {
                return e.intersectsPlane(this)
            }

            intersectsSphere(e) {
                return e.intersectsPlane(this)
            }

            coplanarPoint(e) {
                return e.copy(this.normal).multiplyScalar(-this.constant)
            }

            applyMatrix4(e, t) {const
                n = t || Vn.getNormalMatrix(e), r = this.coplanarPoint(Fn).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
                return this.constant = -r.dot(i),this
            }

            translate(e) {
                return this.constant -= e.dot(this.normal),this
            }

            equals(e) {
                return e.normal.equals(this.normal) && e.constant == = this.constant
            }

            clone() {
                return (new this.constructor).copy(this)
            }
        }const Wn = new Qe, Gn = new Re; class jn {
            constructor(e=new Hn, t=new Hn, n=new Hn, r=new Hn, i=new Hn, a=new Hn) {
                this.planes =[e, t, n, r, i, a]}

            set(e, t, n, r, i, a) {const s = this.planes;
                return s[0].copy(e),s[1].copy(t), s[2].copy(n), s[3].copy(r), s[4].copy(i), s[5].copy(a), this
            }

            copy(e) {const t = this.planes;
                for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
                return this
            }

            setFromProjectionMatrix(e) {const
                t = this.planes, n = e.elements, r = n[0], i = n[1], a = n[2], s = n[3], o = n[4], l = n[5], c = n[6], u = n[7], h = n[8], d = n[9], f = n[10], p = n[11], m = n[12], g = n[13], v = n[14], y = n[15];
                return t[0].setComponents(s - r, u - o, p - h, y - m).normalize(),
                t[1].setComponents(s + r, u + o, p + h, y + m).normalize(), t[2].setComponents(s + i, u + l, p + d, y + g).normalize(), t[3].setComponents(s - i, u - l, p - d, y - g).normalize(), t[4].setComponents(s - a, u - c, p - f, y - v).normalize(), t[5].setComponents(s + a, u + c, p + f, y + v).normalize(), this
            }

            intersectsObject(e) {const t = e.geometry;
                return null == = t.boundingSphere && t.computeBoundingSphere(),
                Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(Wn)
            }

            intersectsSprite(e) {
                return Wn.center.set(0, 0, 0),
                Wn.radius = .7071067811865476, Wn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Wn)
            }

            intersectsSphere(e) {const t = this.planes, n = e.center, r = -e.radius;
                for (let i = 0; i < 6; i++) {
                    if (t[i].distanceToPoint(n) < r) return !1
                } return !0
            }

            intersectsBox(e) {const t = this.planes;
                for (let n = 0; n < 6; n++) {const r = t[n];
                    if (Gn.x = r.normal.x > 0 ? e.max.x : e.min.x,
                    Gn.y = r.normal.y > 0 ? e.max.y : e.min.y, Gn.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Gn) < 0)
                    return !1
                } return !0
            }

            containsPoint(e) {const t = this.planes;
                for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
                return !0
            }

            clone() {
                return (new this.constructor).copy(this)
            }
        } function qn () {
            let e = null, t = !1, n = null, r = null;
            function i (t, a){
                n(t, a), r = e.requestAnimationFrame(i)
            } return {start:function() {
                !0 != = t && null != = n && (r = e.requestAnimationFrame(i), t = !0)},stop:
            function() {
                e.cancelAnimationFrame(r), t = !1
            },setAnimationLoop:
            function(e) {
                n = e
            },setContext:
            function(t) {
                e = t
            }}} function Xn (e, t){const n = t.isWebGL2, r = new WeakMap; return {get:function(e) {
            return e.isInterleavedBufferAttribute && (e = e.data),r.get(e)
        },remove:
        function(t) {
            t.isInterleavedBufferAttribute && (t = t.data);const n = r.get(t);
            n && (e.deleteBuffer(n.buffer), r.delete(t))},update:
        function(t, i) {
            if (t.isGLBufferAttribute) {const e = r.get(t);
                return void((!e || e.version < t.version) && r.set(t, {buffer:t.buffer, type:t.type, bytesPerElement:
                t.elementSize, version:t.version}))} t.isInterleavedBufferAttribute && (t = t.data);const a = r.get(t);
            void 0 == = a ? r.set(t, function(t, r) {const i = t.array, a = t.usage, s = e.createBuffer();
                let o;
                if (e.bindBuffer(r, s),e.bufferData(r, i, a), t.onUploadCallback(), i instanceof Float32Array)o = 5126;else
                if (i instanceof Uint16Array) if (t.isFloat16BufferAttribute) {
                    if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                    o = 5131
                } else o = 5123;
                else if (i instanceof Int16Array) o = 5122;
                else if (i instanceof Uint32Array) o = 5125;
                else if (i instanceof Int32Array) o = 5124;
                else if (i instanceof Int8Array) o = 5120;
                else if (i instanceof Uint8Array) o = 5121;
                else {
                    if (!(i instanceof Uint8ClampedArray))
                        throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i);
                    o = 5121
                } return {buffer:s, type:o, bytesPerElement:i.BYTES_PER_ELEMENT, version:t.version}} (t, i)):
            a.version < t.version && (!function(t, r, i) {const a = r.array, s = r.updateRange;
                e.bindBuffer(i, t), -1 == = s.count ? e.bufferSubData(i, 0, a) : (n ? e.bufferSubData(i, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : e.bufferSubData(i, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)), s.count = -1)}
            (a.buffer, t, i),a.version = t.version)}}} class Yn extends ln {
            constructor(e=1, t=1, n=1, r=1) {
                super(), this.type = "PlaneGeometry", this.parameters = {width:e, height:t, widthSegments:
                n, heightSegments:r};const
                i = e / 2, a = t / 2, s = Math.floor(n), o = Math.floor(r), l = s + 1, c = o + 1, u = e / s, h = t / o, d =[],
                f =[],p =[],m =[];
                for (let g = 0; g < c; g++) {const e = g * h - a;
                    for (let t = 0; t < l; t++) {const n = t * u - i;
                        f.push(n, -e, 0), p.push(0, 0, 1), m.push(t / s), m.push(1 - g / o)
                    }
                } for (let g = 0; g < o; g++)
                    for (let e = 0; e < s; e++) {const
                        t = e + l * g, n = e + l * (g + 1), r = e + 1 + l * (g + 1), i = e + 1 + l * g;
                        d.push(t, n, i), d.push(n, r, i)
                    }
                this.setIndex(d), this.setAttribute("position", new Qt(f, 3)), this.setAttribute("normal", new Qt(p, 3)), this.setAttribute("uv", new Qt(m, 2))
            }

            static fromJSON(e) {
                return new Yn(e.width, e.height, e.widthSegments, e.heightSegments)
            }
        }const Kn = {alphamap_fragment:
        "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif", alphamap_pars_fragment:
        "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", alphatest_fragment:
        "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif", alphatest_pars_fragment:
        "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif", aomap_fragment:
        "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif", aomap_pars_fragment:
        "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif", begin_vertex:
        "vec3 transformed = vec3( position );", beginnormal_vertex:
        "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs:
        "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\n\tvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif", iridescence_fragment:
        "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\t return vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat R21 = R12;\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif", bumpmap_pars_fragment:
        "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif", clipping_planes_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif", clipping_planes_pars_fragment:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif", clipping_planes_vertex:
        "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif", color_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif", color_pars_fragment:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif", color_pars_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif", color_vertex:
        "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif", common:
        "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}", cube_uv_reflection_fragment:
        "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif", defaultnormal_vertex:
        "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif", displacementmap_pars_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif", displacementmap_vertex:
        "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment:
        "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif", encodings_fragment:
        "gl_FragColor = linearToOutputTexel( gl_FragColor );", encodings_pars_fragment:
        "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif", envmap_common_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif", envmap_pars_fragment:
        "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif", envmap_pars_vertex:
        "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif", envmap_physical_pars_fragment:
        "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif", envmap_vertex:
        "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif", fog_vertex:
        "#ifdef USE_FOG\n\tvFogDepth = length(mvPosition);\n#ifdef FOG_EXP2\n\t vFogDepth = max(0.0, (vFogDepth - fogNear) * (fogFar / (fogFar - fogNear)));\n\t #endif \n#endif", fog_pars_vertex:
        "#ifdef USE_FOG\n\t #ifdef FOG_EXP2\n\t uniform float fogNear; uniform float fogFar;\n\t #endif\n\t  varying float vFogDepth;\n#endif", fog_fragment:
        "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment:
        "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif", gradientmap_pars_fragment:
        "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}", lightmap_fragment:
        "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif", lightmap_pars_fragment:
        "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif", lights_lambert_fragment:
        "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment:
        "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert\n#define Material_LightProbeLOD( material )\t(0)", lights_pars_begin:
        "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif", lights_toon_fragment:
        "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment:
        "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)", lights_phong_fragment:
        "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment:
        "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)", lights_physical_fragment:
        "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif", lights_physical_pars_fragment:
        "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin:
        "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps:
        "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif", lights_fragment_end:
        "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif", logdepthbuf_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment:
        "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif", logdepthbuf_vertex:
        "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif", map_fragment:
        "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment:
        "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif", map_particle_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment:
        "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif", metalnessmap_fragment:
        "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment:
        "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif", morphcolor_vertex:
        "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif", morphnormal_vertex:
        "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif", morphtarget_pars_vertex:
        "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif", morphtarget_vertex:
        "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif", normal_fragment_begin:
        "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;", normal_fragment_maps:
        "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif", normal_pars_vertex:
        "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif", normal_vertex:
        "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif", normalmap_pars_fragment:
        "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif", clearcoat_normal_fragment_begi
n:
        "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif", clearcoat_normal_fragment_maps:
        "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif", clearcoat_pars_fragment:
        "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif", iridescence_pars_fragment:
        "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif", output_fragment:
        "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing:
        "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}", premultiplied_alpha_fragment:
        "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex:
        "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment:
        "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment:
        "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif", roughnessmap_fragment:
        "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment:
        "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif", shadowmap_pars_vertex:
        "#if NUM_SPOT_LIGHT_COORDS > 0\n  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif", shadowmap_vertex:
        "#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif", shadowmask_pars_fragment:
        "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}", skinbase_vertex:
        "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex:
        "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif", skinning_vertex:
        "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex:
        "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif", specularmap_fragment:
        "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif", specularmap_pars_fragment:
        "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif", tonemapping_fragment:
        "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment:
        "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment:
        "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n#endif", transmission_pars_fragment:
        "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif", uv_pars_fragment:
        "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif", uv_pars_vertex:
        "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif", uv_vertex:
        "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif", uv2_pars_fragment:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif", uv2_pars_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif", uv2_vertex:
        "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif", worldpos_vertex:
        "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif", background_vert:
        "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag:
        "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", cube_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}", cube_frag:
        "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", depth_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}", depth_frag:
        "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}", distanceRGBA_vert:
        "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag:
        "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert:
        "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}", equirect_frag:
        "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}", linedashed_vert:
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", linedashed_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", meshbasic_vert:
        "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}", meshbasic_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshlambert_vert:
        "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshlambert_frag:
        "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshmatcap_vert:
        "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag:
        "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshnormal_vert:
        "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag:
        "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}", meshphong_vert:
        "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshphong_frag:
        "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshphysical_vert:
        "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag:
        "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", meshtoon_vert:
        "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", meshtoon_frag:
        "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}", points_vert:
        "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}", points_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}", shadow_vert:
        "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}", shadow_frag:
        "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}", sprite_vert:
        "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}", sprite_frag:
        "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}"},
        Zn = {common:{
            diffuse:
            {
                value:
                new _e(16777215)
            },opacity:
            {
                value:
                1
            },map:
            {
                value:
                null
            },uvTransform:
            {
                value:
                new se
            },uv2Transform:
            {
                value:
                new se
            },alphaMap:
            {
                value:
                null
            },alphaTest:
            {
                value:
                0
            }
        },specularmap:
        {
            specularMap:
            {
                value:
                null
            }
        },envmap:
        {
            envMap:
            {
                value:
                null
            },flipEnvMap:
        {
            value:
            -1
        },reflectivity:
        {
            value:
            1
        },ior:
        {
            value:
            1.5
        },refractionRatio:
        {
            value:
            .98
        }
        },aomap:
        {
            aoMap:
            {
                value:
                null
            },aoMapIntensity:
        {
            value:
            1
        }
        },lightmap:
        {
            lightMap:
            {
                value:
                null
            },lightMapIntensity:
        {
            value:
            1
        }
        },emissivemap:
        {
            emissiveMap:
            {
                value:
                null
            }
        },bumpmap:
        {
            bumpMap:
            {
                value:
                null
            },bumpScale:
        {
            value:
            1
        }
        },normalmap:
        {
            normalMap:
            {
                value:
                null
            },normalScale:
        {
            value:
            new ae(1, 1)
        }
        },displacementmap:
        {
            displacementMap:
            {
                value:
                null
            },displacementScale:
        {
            value:
            1
        },displacementBias:
        {
            value:
            0
        }
        },roughnessmap:
        {
            roughnessMap:
            {
                value:
                null
            }
        },metalnessmap:
        {
            metalnessMap:
            {
                value:
                null
            }
        },gradientmap:
        {
            gradientMap:
            {
                value:
                null
            }
        },fog:
        {
            fogDensity:
            {
                value:
                25e-5
            },fogNear:
        {
            value:
            1
        },fogFar:
        {
            value:
            2e3
        },fogColor:
        {
            value:
            new _e(16777215)
        }
        },lights:
        {
            ambientLightColor:
            {
                value:[]},lightProbe:
        {
            value:[]},directionalLights:
        {
            value:[],properties:
        {
            direction:
            {
            },color:
        {
        }
        }
        },directionalLightShadows:
        {
            value:[],properties:
        {
            shadowBias:
            {
            },shadowNormalBias:
        {
        },shadowRadius:
        {
        },shadowMapSize:
        {
        }
        }
        },directionalShadowMap:
        {
            value:[]},directionalShadowMatrix:
        {
            value:[]},spotLights:
        {
            value:[],properties:
        {
            color:
            {
            },position:
        {
        },direction:
        {
        },distance:
        {
        },coneCos:
        {
        },penumbraCos:
        {
        },decay:
        {
        }
        }
        },spotLightShadows:
        {
            value:[],properties:
        {
            shadowBias:
            {
            },shadowNormalBias:
        {
        },shadowRadius:
        {
        },shadowMapSize:
        {
        }
        }
        },spotLightMap:
        {
            value:[]},spotShadowMap:
        {
            value:[]},spotLightMatrix:
        {
            value:[]},pointLights:
        {
            value:[],properties:
        {
            color:
            {
            },position:
        {
        },decay:
        {
        },distance:
        {
        }
        }
        },pointLightShadows:
        {
            value:[],properties:
        {
            shadowBias:
            {
            },shadowNormalBias:
        {
        },shadowRadius:
        {
        },shadowMapSize:
        {
        },shadowCameraNear:
        {
        },shadowCameraFar:
        {
        }
        }
        },pointShadowMap:
        {
            value:[]},pointShadowMatrix:
        {
            value:[]},hemisphereLights:
        {
            value:[],properties:
        {
            direction:
            {
            },skyColor:
        {
        },groundColor:
        {
        }
        }
        },rectAreaLights:
        {
            value:[],properties:
        {
            color:
            {
            },position:
        {
        },width:
        {
        },height:
        {
        }
        }
        },ltc_1:
        {
            value:
            null
        },ltc_2:
        {
            value:
            null
        }
        },points:
        {
            diffuse:
            {
                value:
                new _e(16777215)
            },opacity:
        {
            value:
            1
        },size:
        {
            value:
            1
        },scale:
        {
            value:
            1
        },map:
        {
            value:
            null
        },alphaMap:
        {
            value:
            null
        },alphaTest:
        {
            value:
            0
        },uvTransform:
        {
            value:
            new se
        }
        },sprite:
        {
            diffuse:
            {
                value:
                new _e(16777215)
            },opacity:
        {
            value:
            1
        },center:
        {
            value:
            new ae(.5, .5)
        },rotation:
        {
            value:
            0
        },map:
        {
            value:
            null
        },alphaMap:
        {
            value:
            null
        },alphaTest:
        {
            value:
            0
        },uvTransform:
        {
            value:
            new se
        }
        }},Jn = {basic:{
            uniforms:
            Pn([Zn.common, Zn.specularmap, Zn.envmap, Zn.aomap, Zn.lightmap, Zn.fog]),vertexShader:
            Kn.meshbasic_vert, fragmentShader:Kn.meshbasic_frag
        },lambert:
        {
            uniforms:
            Pn([Zn.common, Zn.specularmap, Zn.envmap, Zn.aomap, Zn.lightmap, Zn.emissivemap, Zn.bumpmap, Zn.normalmap, Zn.displacementmap, Zn.fog, Zn.lights, {emissive:
            {
                value:
                new _e(0)
            }}]),vertexShader:
        Kn.meshlambert_vert, fragmentShader:Kn.meshlambert_frag
        },phong:
        {
            uniforms:
            Pn([Zn.common, Zn.specularmap, Zn.envmap, Zn.aomap, Zn.lightmap, Zn.emissivemap, Zn.bumpmap, Zn.normalmap, Zn.displacementmap, Zn.fog, Zn.lights, {emissive:
            {
                value:
                new _e(0)
            },specular:
        {
            value:
            new _e(1118481)
        },shininess:
        {
            value:
            30
        }}]),vertexShader:
        Kn.meshphong_vert, fragmentShader:Kn.meshphong_frag
        },standard:
        {
            uniforms:
            Pn([Zn.common, Zn.envmap, Zn.aomap, Zn.lightmap, Zn.emissivemap, Zn.bumpmap, Zn.normalmap, Zn.displacementmap, Zn.roughnessmap, Zn.metalnessmap, Zn.fog, Zn.lights, {emissive:
            {
                value:
                new _e(0)
            },roughness:
        {
            value:
            1
        },metalness:
        {
            value:
            0
        },envMapIntensity:
        {
            value:
            1
        }}]),vertexShader:
        Kn.meshphysical_vert, fragmentShader:Kn.meshphysical_frag
        },toon:
        {
            uniforms:
            Pn([Zn.common, Zn.aomap, Zn.lightmap, Zn.emissivemap, Zn.bumpmap, Zn.normalmap, Zn.displacementmap, Zn.gradientmap, Zn.fog, Zn.lights, {emissive:
            {
                value:
                new _e(0)
            }}]),vertexShader:
        Kn.meshtoon_vert, fragmentShader:Kn.meshtoon_frag
        },matcap:
        {
            uniforms:
            Pn([Zn.common, Zn.bumpmap, Zn.normalmap, Zn.displacementmap, Zn.fog, {matcap:{
            value:
            null
        }}]),vertexShader:
        Kn.meshmatcap_vert, fragmentShader:Kn.meshmatcap_frag
        },points:
        {
            uniforms:
            Pn([Zn.points, Zn.fog]),vertexShader:
        Kn.points_vert, fragmentShader:Kn.points_frag
        },dashed:
        {
            uniforms:
            Pn([Zn.common, Zn.fog, {scale:{
            value:
            1
        },dashSize:
        {
            value:
            1
        },totalSize:
        {
            value:
            2
        }}]),vertexShader:
        Kn.linedashed_vert, fragmentShader:Kn.linedashed_frag
        },depth:
        {
            uniforms:
            Pn([Zn.common, Zn.displacementmap]),vertexShader:
        Kn.depth_vert, fragmentShader:Kn.depth_frag
        },normal:
        {
            uniforms:
            Pn([Zn.common, Zn.bumpmap, Zn.normalmap, Zn.displacementmap, {opacity:{
            value:
            1
        }}]),vertexShader:
        Kn.meshnormal_vert, fragmentShader:Kn.meshnormal_frag
        },sprite:
        {
            uniforms:
            Pn([Zn.sprite, Zn.fog]),vertexShader:
        Kn.sprite_vert, fragmentShader:Kn.sprite_frag
        },background:
        {
            uniforms:
            {
                uvTransform:
                {
                    value:
                    new se
                },t2D:
            {
                value:
                null
            }
            },vertexShader:
        Kn.background_vert, fragmentShader:Kn.background_frag
        },cube:
        {
            uniforms:
            Pn([Zn.envmap, {opacity:{
            value:
            1
        }}]),vertexShader:
        Kn.cube_vert, fragmentShader:Kn.cube_frag
        },equirect:
        {
            uniforms:
            {
                tEquirect:
                {
                    value:
                    null
                }
            },vertexShader:
        Kn.equirect_vert, fragmentShader:Kn.equirect_frag
        },distanceRGBA:
        {
            uniforms:
            Pn([Zn.common, Zn.displacementmap, {referencePosition:{
            value:
            new Re
        },nearDistance:
        {
            value:
            1
        },farDistance:
        {
            value:
            1e3
        }}]),vertexShader:
        Kn.distanceRGBA_vert, fragmentShader:Kn.distanceRGBA_frag
        },shadow:
        {
            uniforms:
            Pn([Zn.lights, Zn.fog, {color:{
            value:
            new _e(0)
        },opacity:
        {
            value:
            1
        }}]),vertexShader:
        Kn.shadow_vert, fragmentShader:Kn.shadow_frag
        }};
        function $n (e, t, n, r, i, a){const s = new _e(0);
            let o, l, c = !0 == = i ? 0 : 1, u = null, d = 0, f = null; function p (e, t){
                n.buffers.color.setClear(e.r, e.g, e.b, t, a)
            } return {getClearColor:function() {
                return s
            },setClearColor:
            function(e, t = 1) {
                s.set(e), c = t, p(s, c)
            },getClearAlpha:
            function() {
                return c
            },setClearAlpha:
            function(e) {
                c = e, p(s, c)
            },render:
            function(n, i) {
                let a = !1, m = !0 == = i.isScene ? i.background : null; m && m.isTexture && (m = t.get(m));const
                g = e.xr, v = g.getSession && g.getSession();
                v && "additive" == = v.environmentBlendMode && (m = null), null == = m ? p(s, c) : m && m.isColor && (p(m, 1), a = !0),
                (e.autoClear || a) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), m && (m.isCubeTexture || m.mapping == = h) ? (
                void 0 == = l && (l = new Tn(new An(1, 1, 1), new Dn({name:"BackgroundCubeMaterial", uniforms:
                Ln(Jn.cube.uniforms), vertexShader:Jn.cube.vertexShader, fragmentShader:Jn.cube.fragmentShader, side:
                1, depthTest:!1, depthWrite:!1, fog:!1})),
                l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n)
                {
                    this.matrixWorld.copyPosition(n.matrixWorld)
                },Object.defineProperty(l.material, "envMap", {get:function() {
                    return this.uniforms.envMap.value
                }}),r.update(l)),
                l.material.uniforms.envMap.value = m, l.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 == = m.isRenderTargetTexture ? -1 : 1, u == = m && d == = m.version && f == = e.toneMapping || (l.material.needsUpdate = !0, u = m, d = m.version, f = e.toneMapping),
                l.layers.enableAll(), n.unshift(l, l.geometry, l.material, 0, 0, null)):m && m.isTexture && ( void
                0 == = o && (o = new Tn(new Yn(2, 2), new Dn({name:"BackgroundMaterial", uniforms:
                Ln(Jn.background.uniforms), vertexShader:Jn.background.vertexShader, fragmentShader:
                Jn.background.fragmentShader, side:0, depthTest:!1, depthWrite:!1, fog:!1})),
                o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {get:function() {
                    return this.uniforms.t2D.value
                }}),r.update(o)),
                o.material.uniforms.t2D.value = m, !0 == = m.matrixAutoUpdate && m.updateMatrix(), o.material.uniforms.uvTransform.value.copy(m.matrix), u == = m && d == = m.version && f == = e.toneMapping || (o.material.needsUpdate = !0, u = m, d = m.version, f = e.toneMapping),
                o.layers.enableAll(), n.unshift(o, o.geometry, o.material, 0, 0, null))}}} function Qn (e, t, n, r){const
            i = e.getParameter(34921), a = r.isWebGL2 ? null : t.get("OES_vertex_array_object"), s = r.isWebGL2 || null != = a, o = {}, l = f(null);
            let c = l, u = !1;
            function h (t) { return r.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t)}function d (t) {
            return r.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t)}function f (e) {const t =[],n =[],r =[]
            ;
            for (let a = 0; a < i; a++) t[a] = 0, n[a] = 0, r[a] = 0;
            return {geometry:null, program:null, wireframe:!1, newAttributes:t, enabledAttributes:n, attributeDivisors:
            r, object:e, attributes:{
            },index:
            null}}function p () {const e = c.newAttributes;
                for (let t = 0, n = e.length; t < n; t++) e[t] = 0
            } function m (e) {g(e, 0)} function g (n, i)
            {const a = c.newAttributes, s = c.enabledAttributes, o = c.attributeDivisors;
                if (a[n] = 1,0 == = s[n] && (e.enableVertexAttribArray(n), s[n] = 1),o[n] != = i){
                (r.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[r.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"]
                (n, i),o[n] = i
            }
            } function v () {const t = c.newAttributes, n = c.enabledAttributes;
                for (let r = 0, i = n.length; r < i; r++) n[r] != = t[r] && (e.disableVertexAttribArray(r), n[r] = 0)}
            function y (t, n, i, a, s, o){
                !0 != = r.isWebGL2 || 5124 != = i && 5125 != = i ? e.vertexAttribPointer(t, n, i, a, s, o) : e.vertexAttribIPointer(t, n, i, s, o)
            } function _ () {
                x(), u = !0, c != = l && (c = l, h(c.object))} function x () {
                l.geometry = null, l.program = null, l.wireframe = !1
            } return {setup:function(i, l, d, _, x) {
                let b = !1;
                if (s) {const t = function(t, n, i) {const s = !0 == = i.wireframe; let l = o[t.id];
                    void 0 == = l && (l = {}, o[t.id] = l);
                    let c = l[n.id];
                    void 0 == = c && (c = {}, l[n.id] = c);
                    let u = c[s];
                    void 0 == = u && (u = f(r.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()), c[s] = u);
                    return u
                } (_, d, l);
                    c != = t && (c = t, h(c.object)),b = function(e, t, n, r) {const i = c.attributes, a = t.attributes;
                        let s = 0;const o = n.getAttributes();
                        for (const l in o){
                            if (o[l].location >= 0) {const t = i[l];
                                let n = a[l];
                                if ( void
                                0 == = n && ("instanceMatrix" == = l && e.instanceMatrix && (n = e.instanceMatrix), "instanceColor" == = l && e.instanceColor && (n = e.instanceColor)),
                                void 0 == = t)return !0;
                                if (t.attribute != = n) return !0; if (n && t.data != = n.data) return !0; s++
                            }
                        } return c.attributesNum != = s || c.index != = r
                    } (i, _, d, x),b && function(e, t, n, r) {const i = {}, a = t.attributes;
                        let s = 0;const o = n.getAttributes();
                        for (const l in o){
                            if (o[l].location >= 0) {
                                let t = a[l];
                                void
                                0 == = t && ("instanceMatrix" == = l && e.instanceMatrix && (t = e.instanceMatrix), "instanceColor" == = l && e.instanceColor && (t = e.instanceColor))
                                ;const n = {};
                                n.attribute = t, t && t.data && (n.data = t.data), i[l] = n, s++
                            }
                        } c.attributes = i, c.attributesNum = s, c.index = r
                    } (i, _, d, x)} else {const e = !0 == = l.wireframe;
                    c.geometry == = _.id && c.program == = d.id && c.wireframe == = e || (c.geometry = _.id, c.program = d.id, c.wireframe = e, b = !0)}
                null != = x && n.update(x, 34963), (b || u) && (u = !1, function(i, a, s, o) {
                    if (!1 == = r.isWebGL2 && (i.isInstancedMesh || o.isInstancedBufferGeometry) && null == = t.get("ANGLE_instanced_arrays"))
                        return; p();const l = o.attributes, c = s.getAttributes(), u = a.defaultAttributeValues;
                    for (const t in c){const r = c[t];
                        if (r.location >= 0) {
                            let a = l[t];
                            if ( void
                            0 == = a && ("instanceMatrix" == = t && i.instanceMatrix && (a = i.instanceMatrix), "instanceColor" == = t && i.instanceColor && (a = i.instanceColor)),
                            void 0 != = a){const t = a.normalized, s = a.itemSize, l = n.get(a);
                                if ( void 0 == = l)continue;const c = l.buffer, u = l.type, h = l.bytesPerElement;
                                if (a.isInterleavedBufferAttribute) {const n = a.data, l = n.stride, d = a.offset;
                                    if (n.isInstancedInterleavedBuffer) {
                                        for (let e = 0; e < r.locationSize; e++) g(r.location + e, n.meshPerAttribute);
                                        !0 != = i.isInstancedMesh && void
                                        0 == = o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)
                                    } else for (let e = 0; e < r.locationSize; e++) m(r.location + e);
                                    e.bindBuffer(34962, c);
                                    for (let e = 0; e < r.locationSize; e++)
                                        y(r.location + e, s / r.locationSize, u, t, l * h, (d + s / r.locationSize * e) * h)
                                } else {
                                    if (a.isInstancedBufferAttribute) {
                                        for (let e = 0; e < r.locationSize; e++) g(r.location + e, a.meshPerAttribute);
                                        !0 != = i.isInstancedMesh && void
                                        0 == = o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count)
                                    } else for (let e = 0; e < r.locationSize; e++) m(r.location + e);
                                    e.bindBuffer(34962, c);
                                    for (let e = 0; e < r.locationSize; e++)
                                        y(r.location + e, s / r.locationSize, u, t, s * h, s / r.locationSize * e * h)
                                }
                            }else if ( void 0 != = u){const n = u[t];
                                if ( void 0 != = n)switch (n.length) {
                                    case 2:
                                        e.vertexAttrib2fv(r.location, n);
                                        break;
                                    case 3:
                                        e.vertexAttrib3fv(r.location, n);
                                        break;
                                    case 4:
                                        e.vertexAttrib4fv(r.location, n);
                                        break;
                                    default:
                                        e.vertexAttrib1fv(r.location, n)
                                }
                            }
                        }
                    } v()
                } (i, l, d, _),null != = x && e.bindBuffer(34963, n.get(x).buffer))},reset:
            _, resetDefaultState:x, dispose:function() {
                _();
                for (const e in o){const t = o[e];
                    for (const e in t){const n = t[e];
                        for (const e in n)d(n[e].object), delete n[e];
                        delete t[ e]} delete o[ e]}
            },releaseStatesOfGeometry:
            function(e) {
                if ( void 0 == = o[e.id])return;const t = o[e.id];
                for (const n in t){const e = t[n];
                    for (const t in e)d(e[t].object), delete e[t];
                    delete t[ n]} delete o[ e.id]},releaseStatesOfProgram:
            function(e) {
                for (const t in o){const n = o[t];
                    if ( void 0 == = n[e.id])continue;const r = n[e.id];
                    for (const e in r)d(r[e].object), delete r[e];
                    delete n[ e.id]}
            },initAttributes:
            p, enableAttribute:m, disableUnusedAttributes:v}} function er (e, t, n, r){const i = r.isWebGL2;
            let a;
            this.setMode = function(e) {
                a = e
            },this.render = function(t, r) {
                e.drawArrays(a, t, r), n.update(r, a, 1)
            },this.renderInstances = function(r, s, o) {
                if (0 == = o) return; let l, c;
                if (i) l = e, c = "drawArraysInstanced";
                else if (l = t.get("ANGLE_instanced_arrays"),c = "drawArraysInstancedANGLE", null == = l)return
                void console.
                error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                l[c] (a, r, s, o),n.update(s, a, o)
            }
        } function tr (e, t, n){
            let r;
            function i (t) { if ("highp" == = t) {
                if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0)
                    return "highp";
                t = "mediump"
            }
            return "mediump" == = t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"}const
            a = "undefined" != = typeof
            WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != = typeof
            WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext;
            let s = void 0 != = n.precision ? n.precision : "highp";const o = i(s);
            o != = s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."), s = o);const
            l = a || t.has("WEBGL_draw_buffers"), c = !0 == = n.logarithmicDepthBuffer, u = e.getParameter(34930), h = e.getParameter(35660), d = e.getParameter(3379), f = e.getParameter(34076), p = e.getParameter(34921), m = e.getParameter(36347), g = e.getParameter(36348), v = e.getParameter(36349), y = h > 0, _ = a || t.has("OES_texture_float");
            return {isWebGL2:a, drawBuffers:l, getMaxAnisotropy:function() {
                if ( void 0 != = r)return r;
                if (!0 == = t.has("EXT_texture_filter_anisotropic")) {const n = t.get("EXT_texture_filter_anisotropic");
                    r = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                } else r = 0; return r
            },getMaxPrecision:
            i, precision:s, logarithmicDepthBuffer:c, maxTextures:u, maxVertexTextures:h, maxTextureSize:
            d, maxCubemapSize:f, maxAttributes:p, maxVertexUniforms:m, maxVaryings:g, maxFragmentUniforms:
            v, vertexTextures:y, floatFragmentTextures:_, floatVertexTextures:y && _, maxSamples:
            a ? e.getParameter(36183) : 0}} function nr (e) {const t = this;
        let n = null, r = 0, i = !1, a = !1;const s = new Hn, o = new se, l = {value:null, needsUpdate:!1};
        function c () {
            l.value != = n && (l.value = n, l.needsUpdate = r > 0),t.numPlanes = r, t.numIntersection = 0
        } function u (e, n, r, i){const a = null != = e ? e.length : 0; let c = null;
            if (0 != = a) {
                if (c = l.value,!0 != = i || null == = c){const t = r + 4 * a, i = n.matrixWorldInverse;
                    o.getNormalMatrix(i), (null == = c || c.length < t) && (c = new Float32Array(t));
                    for (let n = 0, l = r; n != = a; ++n, l += 4)
                        s.copy(e[n]).applyMatrix4(i, o), s.normal.toArray(c, l), c[l + 3] = s.constant
                } l.value = c, l.needsUpdate = !0
            } return t.numPlanes = a,t.numIntersection = 0, c
        } this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t, a)
        {const s = 0 != = e.length || t || 0 != = r || i; return i = t,n = u(e, a, 0), r = e.length, s
        },this.beginShadows = function() {
            a = !0, u(null)
        },this.endShadows = function() {
            a = !1, c()
        },this.setState = function(t, s, o)
        {const h = t.clippingPlanes, d = t.clipIntersection, f = t.clipShadows, p = e.get(t);
            if (!i || null == = h || 0 == = h.length || a && !f) a ? u(null) : c();
            else {const e = a ? 0 : r, t = 4 * e;
                let i = p.clippingState || null;
                l.value = i, i = u(h, s, t, o);
                for (let r = 0; r != = t; ++r) i[r] = n[r];
                p.clippingState = i, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += e
            }
        }}function rr (e) {let t = new WeakMap; function n (e, t){
            return t == = c ? e.mapping = o : t == = u && (e.mapping = l),e
        } function r (e) {const n = e.target;
        n.removeEventListener("dispose", r);const i = t.get(n);
        void 0 != = i && (t.delete(n), i.dispose())}return {get:function(i) {
            if (i && i.isTexture && !1 == = i.isRenderTargetTexture) {const a = i.mapping;
                if (a == = c || a == = u) {
                    if (t.has(i)) {
                        return n(t.get(i).texture, i.mapping)
                    } {const a = i.image;
                        if (a && a.height > 0) {const s = new Un(a.height / 2);
                            return s.fromEquirectangularTexture(e, i),
                            t.set(i, s), i.addEventListener("dispose", r), n(s.texture, i.mapping)
                        } return null
                    }
                }
            } return i
        },dispose:
        function() {
            t = new WeakMap
        }}}Jn.physical = {uniforms:Pn([Jn.standard.uniforms, {clearcoat:{
            value:
            0
        },clearcoatMap:
        {
            value:
            null
        },clearcoatRoughness:
        {
            value:
            0
        },clearcoatRoughnessMap:
        {
            value:
            null
        },clearcoatNormalScale:
        {
            value:
            new ae(1, 1)
        },clearcoatNormalMap:
        {
            value:
            null
        },iridescence:
        {
            value:
            0
        },iridescenceMap:
        {
            value:
            null
        },iridescenceIOR:
        {
            value:
            1.3
        },iridescenceThicknessMinimum:
        {
            value:
            100
        },iridescenceThicknessMaximum:
        {
            value:
            400
        },iridescenceThicknessMap:
        {
            value:
            null
        },sheen:
        {
            value:
            0
        },sheenColor:
        {
            value:
            new _e(0)
        },sheenColorMap:
        {
            value:
            null
        },sheenRoughness:
        {
            value:
            1
        },sheenRoughnessMap:
        {
            value:
            null
        },transmission:
        {
            value:
            0
        },transmissionMap:
        {
            value:
            null
        },transmissionSamplerSize:
        {
            value:
            new ae
        },transmissionSamplerMap:
        {
            value:
            null
        },thickness:
        {
            value:
            0
        },thicknessMap:
        {
            value:
            null
        },attenuationDistance:
        {
            value:
            0
        },attenuationColor:
        {
            value:
            new _e(0)
        },specularIntensity:
        {
            value:
            1
        },specularIntensityMap:
        {
            value:
            null
        },specularColor:
        {
            value:
            new _e(1, 1, 1)
        },specularColorMap:
        {
            value:
            null
        }}]),vertexShader:
        Kn.meshphysical_vert, fragmentShader:Kn.meshphysical_frag};
        class ir extends kn {
            constructor(e=-1, t=1, n=1, r=-1, i=.1, a=2e3) {
                super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix()
            }

            copy(e, t) {
                return super.copy(e, t),
                this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null == = e.view ? null : Object.assign({}, e.view), this
            }

            setViewOffset(e, t, n, r, i, a) {
                null == = this.view && (this.view = {enabled:!0, fullWidth:1, fullHeight:1, offsetX:0, offsetY:0, width:
                1, height:1}),
                this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix()
            }

            clearViewOffset() {
                null != = this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
            }

            updateProjectionMatrix() {const
                e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
                let i = n - e, a = n + e, s = r + t, o = r - t;
                if (null != = this.view && this.view.enabled) {const
                    e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                    i += e * this.view.offsetX, a = i + e * this.view.width, s -= t * this.view.offsetY, o = s - t * this.view.height
                }
                this.projectionMatrix.makeOrthographic(i, a, s, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
            }

            toJSON(e) {const t = super.toJSON(e);
                return t.object.zoom = this.zoom,
                t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null != = this.view && (t.object.view = Object.assign({}, this.view)), t
            }
        }const ar =[.125, .215, .35, .446, .526, .582],sr = 20, or = new ir, lr = new _e; let cr = null;const
        ur = (1 + Math.sqrt(5)) / 2, hr = 1 / ur, dr =[
        new Re(1, 1, 1), new Re(-1, 1, 1), new Re(1, 1, -1), new Re(-1, 1, -1), new Re(0, ur, hr), new Re(0, ur, -hr), new Re(hr, 0, ur), new Re(-hr, 0, ur), new Re(ur, hr, 0), new Re(-ur, hr, 0)]
        ;
        class fr {
            constructor(e) {
                this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes =[],
                this._sizeLods =[],this._sigmas =[],
                this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
            }

            fromScene(e, t=0, n=.1, r=100) {
                cr = this._renderer.getRenderTarget(), this._setSize(256);const i = this._allocateTargets();
                return i.depthBuffer = !0,
                this._sceneToCubeUV(e, n, r, i), t > 0 && this._blur(i, 0, 0, t), this._applyPMREM(i), this._cleanup(i), i
            }

            fromEquirectangular(e, t=null) {
                return this._fromTexture(e, t)
            }

            fromCubemap(e, t=null) {
                return this._fromTexture(e, t)
            }

            compileCubemapShader() {
                null == = this._cubemapMaterial && (this._cubemapMaterial = vr(), this._compileMaterial(this._cubemapMaterial))}

            compileEquirectangularShader() {
                null == = this._equirectMaterial && (this._equirectMaterial = gr(), this._compileMaterial(this._equirectMaterial))}

            dispose() {
                this._dispose(), null != = this._cubemapMaterial && this._cubemapMaterial.dispose(), null != = this._equirectMaterial && this._equirectMaterial.dispose()
            }

            _setSize(e) {
                this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax)
            }

            _dispose() {
                null != = this._blurMaterial && this._blurMaterial.dispose(), null != = this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
                for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose()
            }

            _cleanup(e) {
                this._renderer.setRenderTarget(cr), e.scissorTest = !1, mr(e, 0, 0, e.width, e.height)
            }

            _fromTexture(e, t) {
                e.mapping == = o || e.mapping == = l ? this._setSize(0 == = e.image.length ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), cr = this._renderer.getRenderTarget();const
                n = t || this._allocateTargets();
                return this._textureToCubeUV(e, n),this._applyPMREM(n), this._cleanup(n), n
            }

            _allocateTargets() {const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {magFilter:
                y, minFilter:y, generateMipmaps:!1, type:S, format:E, encoding:U, depthBuffer:!1},r = pr(e, t, n);
                if (null == = this._pingPongRenderTarget || this._pingPongRenderTarget.width != = e) {
                    null != = this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = pr(e, t, n);const
                    {
                        _lodMax:
                        r
                    }=this;
                    ({sizeLods:this._sizeLods, lodPlanes:this._lodPlanes, sigmas:this._sigmas}=function(e)
                    {const t =[],n =[],r =[];
                        let i = e;const a = e - 4 + 1 + ar.length;
                        for (let s = 0; s < a; s++) {const a = Math.pow(2, i);
                            n.push(a);
                            let o = 1 / a;
                            s > e - 4 ? o = ar[s - e + 4 - 1] : 0 == = s && (o = 0), r.push(o);const
                            l = 1 / (a - 2), c = -l, u = 1 + l, h =[c, c, u, c, u, u, c, c, u, u, c, u],
                            d = 6, f = 6, p = 3, m = 2, g = 1, v = new Float32Array(p * f * d), y = new Float32Array(m * f * d), _ = new Float32Array(g * f * d);
                            for (let e = 0; e < d; e++) {const t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r =[
                                t, n, 0, t + 2 / 3, n, 0, t + 2 / 3, n + 1, 0, t, n, 0, t + 2 / 3, n + 1, 0, t, n + 1, 0]
                                ;
                                v.set(r, p * f * e), y.set(h, m * f * e);const i =[e, e, e, e, e, e];
                                _.set(i, g * f * e)
                            }const x = new ln;
                            x.setAttribute("position", new Zt(v, p)), x.setAttribute("uv", new Zt(y, m)), x.setAttribute("faceIndex", new Zt(_, g)), t.push(x), i > 4 && i--
                        } return {lodPlanes:t, sizeLods:n, sigmas:r}} (r)),this._blurMaterial = function(e, t, n)
                    {const r = new Float32Array(sr), i = new Re(0, 1, 0);
                        return new Dn({name:"SphericalGaussianBlur", defines:{
                        n:
                        sr, CUBEUV_TEXEL_WIDTH:1 / t, CUBEUV_TEXEL_HEIGHT:1 / n, CUBEUV_MAX_MIP:`$ {
                            e
                        } .0`},uniforms:
                    {
                        envMap:
                        {
                            value:
                            null
                        },samples:
                    {
                        value:
                        1
                    },weights:
                    {
                        value:
                        r
                    },latitudinal:
                    {
                        value:
                        !1
                    },dTheta:
                    {
                        value:
                        0
                    },mipInt:
                    {
                        value:
                        0
                    },poleAxis:
                    {
                        value:
                        i
                    }
                    },vertexShader:
                    yr(), fragmentShader:
                        "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t", blending:
                        0, depthTest:!1, depthWrite:!1})} (r, e, t)} return r
            }

            _compileMaterial(e) {const t = new Tn(this._lodPlanes[0], e);
                this._renderer.compile(t, or)
            }

            _sceneToCubeUV(e, t, n, r) {const i = new In(90, 1, t, n), a =[1, -1, 1, 1, 1, 1],s =[1, 1, 1, -1, -1, -1],
                o = this._renderer, l = o.autoClear, c = o.toneMapping;
                o.getClearColor(lr), o.toneMapping = 0, o.autoClear = !1;const u = new Xt({name:"PMREM.Background", side:
                1, depthWrite:!1, depthTest:!1}),h = new Tn(new An, u); let d = !1;const f = e.background;
                f ? f.isColor && (u.color.copy(f), e.background = null, d = !0):(u.color.copy(lr), d = !0);
                for (let p = 0; p < 6; p++) {const t = p % 3;
                    0 == = t ? (i.up.set(0, a[p], 0), i.lookAt(s[p], 0, 0)):
                    1 == = t ? (i.up.set(0, 0, a[p]), i.lookAt(0, s[p], 0)):(i.up.set(0, a[p], 0), i.lookAt(0, 0, s[p]))
                    ;const n = this._cubeSize;
                    mr(r, t * n, p > 2 ? n : 0, n, n), o.setRenderTarget(r), d && o.render(h, i), o.render(e, i)
                } h.geometry.dispose(), h.material.dispose(), o.toneMapping = c, o.autoClear = l, e.background = f
            }

            _textureToCubeUV(e, t) {const n = this._renderer, r = e.mapping == = o || e.mapping == = l;
                r ? (null == = this._cubemapMaterial && (this._cubemapMaterial = vr()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 == = e.isRenderTargetTexture ? -1 : 1):
                null == = this._equirectMaterial && (this._equirectMaterial = gr());const
                i = r ? this._cubemapMaterial : this._equirectMaterial, a = new Tn(this._lodPlanes[0], i);
                i.uniforms.envMap.value = e;const s = this._cubeSize;
                mr(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, or)
            }

            _applyPMREM(e) {const t = this._renderer, n = t.autoClear;
                t.autoClear = !1;
                for (let r = 1; r < this._lodPlanes.length; r++) {const
                    t = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), n = dr[(r - 1) % dr.length];
                    this._blur(e, r - 1, r, t, n)
                } t.autoClear = n
            }

            _blur(e, t, n, r, i) {const a = this._pingPongRenderTarget;
                this._halfBlur(e, a, t, n, r, "latitudinal", i), this._halfBlur(a, e, n, n, r, "longitudinal", i)
            }

            _halfBlur(e, t, n, r, i, a, s) {const o = this._renderer, l = this._blurMaterial;
                "latitudinal" != = a && "longitudinal" != = a && console.error("blur direction must be either latitudinal or longitudinal!");const
                c = new Tn(this._lodPlanes[r], l), u = l.uniforms, h = this._sizeLods[n] - 1, d = isFinite(i) ? Math.PI / (2 * h) : 2 * Math.PI / 39, f = i / d, p = isFinite(i) ? 1 + Math.floor(3 * f) : sr;
                p > sr && console.warn(`sigmaRadians, $ {
                    i
                },is too large and will clip, as it requested $ {
                    p
                } samples when the maximum is set to 20`);const m =[];
                let g = 0;
                for (let _ = 0; _ < sr; ++_) {const e = _ / f, t = Math.exp(-e * e / 2);
                    m.push(t), 0 == = _ ? g += t : _ < p && (g += 2 * t)
                } for (let _ = 0; _ < m.length; _++) m[_] = m[_] / g;
                u.envMap.value = e.texture, u.samples.value = p, u.weights.value = m, u.latitudinal.value = "latitudinal" == = a, s && (u.poleAxis.value = s);const
                {
                    _lodMax:
                    v
                }=this;
                u.dTheta.value = d, u.mipInt.value = v - n;const y = this._sizeLods[r];
                mr(t, 3 * y * (r > v - 4 ? r - v + 4 : 0), 4 * (this._cubeSize - y), 3 * y, 2 * y), o.setRenderTarget(t), o.render(c, or)
            }
        } function pr (e, t, n){const r = new Ce(e, t, n);
            return r.texture.mapping = h,r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r
        } function mr (e, t, n, r, i){
            e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i)
        } function gr () {
            return new Dn({name:"EquirectangularToCubeUV", uniforms:{
                envMap:
                {
                    value:
                    null
                }
            },vertexShader:
            yr(), fragmentShader:
            "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t", blending:
            0, depthTest:!1, depthWrite:!1})} function vr () {
            return new Dn({name:"CubemapToCubeUV", uniforms:{
                envMap:
                {
                    value:
                    null
                },flipEnvMap:
                {
                    value:
                    -1
                }
            },vertexShader:
            yr(), fragmentShader:
            "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t", blending:
            0, depthTest:!1, depthWrite:!1})} function yr () {
            return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"
        } function _r (e) {let t = new WeakMap, n = null; function r (e) {const n = e.target;
        n.removeEventListener("dispose", r);const i = t.get(n);
        void 0 != = i && (t.delete(n), i.dispose())}return {get:function(i) {
            if (i && i.isTexture) {const a = i.mapping, s = a == = c || a == = u, h = a == = o || a == = l;
                if (s || h) {
                    if (i.isRenderTargetTexture && !0 == = i.needsPMREMUpdate) {
                        i.needsPMREMUpdate = !1;
                        let r = t.get(i);
                        return null == = n && (n = new fr(e)),
                        r = s ? n.fromEquirectangular(i, r) : n.fromCubemap(i, r), t.set(i, r), r.texture
                    } if (t.has(i)) return t.get(i).texture;
                    {const a = i.image;
                        if (s && a && a.height > 0 || h && a && function(e) {
                        let t = 0;const n = 6;
                        for (let r = 0; r < n; r++) void 0 != = e[r] && t++; return t == = n
                    } (a)){
                        null == = n && (n = new fr(e));const a = s ? n.fromEquirectangular(i) : n.fromCubemap(i);
                        return t.set(i, a),i.addEventListener("dispose", r), a.texture
                    } return null
                    }
                }
            } return i
        },dispose:
        function() {
            t = new WeakMap, null != = n && (n.dispose(), n = null)}}}function xr (e) {const t = {};
        function n (n) { if ( void 0 != = t[n])return t[n];
        let r;
        switch (n) {
            case "WEBGL_depth_texture":
                r = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                break;
            case "EXT_texture_filter_anisotropic":
                r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                break;
            case "WEBGL_compressed_texture_s3tc":
                r = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                break;
            case "WEBGL_compressed_texture_pvrtc":
                r = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                break;
            default:
                r = e.getExtension(n)
        } return t[n] = r,r}return {has:function(e) {
            return null != = n(e)
        },init:
        function(e) {
            e.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")),
            n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture")
        },get:
        function(e) {const t = n(e);
            return null == = t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."),t
        }}}function br (e, t, n, r){const i = {}, a = new WeakMap; function s (e) {const o = e.target;
            null != = o.index && t.remove(o.index); for (const n in o.attributes)t.remove(o.attributes[n]);
            o.removeEventListener("dispose", s), delete i[o.id];const l = a.get(o);
            l && (t.remove(l), a.delete(o)),r.releaseStatesOfGeometry(o), !0 == = o.isInstancedBufferGeometry && delete
            o._maxInstanceCount, n.memory.geometries--}function o (e) {const n =[],
            r = e.index, i = e.attributes.position;
            let s = 0;
            if (null != = r) {const e = r.array;
                s = r.version;
                for (let t = 0, r = e.length; t < r; t += 3) {const r = e[t + 0], i = e[t + 1], a = e[t + 2];
                    n.push(r, i, i, a, a, r)
                }
            } else {const e = i.array;
                s = i.version;
                for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {const e = t + 0, r = t + 1, i = t + 2;
                    n.push(e, r, r, i, i, e)
                }
            }const o = new (oe(n) ? $t : Jt) (n, 1);
            o.version = s;const l = a.get(e);
            l && t.remove(l), a.set(e, o)}return {get:function(e, t) {
                return !0 == = i[t.id] || (t.addEventListener("dispose", s),i[t.id] = !0, n.memory.geometries++),t
            },update:
            function(e) {const n = e.attributes;
                for (const i in n)t.update(n[i], 34962);const r = e.morphAttributes;
                for (const i in r){const e = r[i];
                    for (let n = 0, r = e.length; n < r; n++) t.update(e[n], 34962)
                }
            },getWireframeAttribute:
            function(e) {const t = a.get(e);
                if (t) {const n = e.index;
                    null != = n && t.version < n.version && o(e)
                } else o(e); return a.get(e)
            }}} function wr (e, t, n, r){const i = r.isWebGL2;
            let a, s, o;
            this.setMode = function(e) {
                a = e
            },this.setIndex = function(e) {
                s = e.type, o = e.bytesPerElement
            },this.render = function(t, r) {
                e.drawElements(a, r, s, t * o), n.update(r, a, 1)
            },this.renderInstances = function(r, l, c) {
                if (0 == = c) return; let u, h;
                if (i) u = e, h = "drawElementsInstanced";
                else if (u = t.get("ANGLE_instanced_arrays"),h = "drawElementsInstancedANGLE", null == = u)return
                void console.
                error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                u[h] (a, l, s, r * o, c),n.update(l, a, c)
            }
        } function Sr (e) {const t = {frame:0, calls:0, triangles:0, points:0, lines:0};
        return {memory:{
            geometries:
            0, textures:0
        },render:
        t, programs:null, autoReset:!0, reset:function() {
            t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
        },update:
        function(e, n, r) {
            switch (t.calls++,n){
                case 4:
                    t.triangles += r * (e / 3);
                    break;
                case 1:
                    t.lines += r * (e / 2);
                    break;
                case 3:
                    t.lines += r * (e - 1);
                    break;
                case 2:
                    t.lines += r * e;
                    break;
                case 0:
                    t.points += r * e;
                    break;
                default:
                    console.error("THREE.WebGLInfo: Unknown draw mode:", n)
            }
        }}}function Mr (e, t){
            return e[0] - t[0]
        } function Er (e, t){
            return Math.abs(t[1]) - Math.abs(e[1])
        } function Tr (e, t, n){const r = {}, i = new Float32Array(8), a = new WeakMap, s = new Te, o =[];
            for (let l = 0; l < 8; l++) o[l] =[l, 0];
            return {update:function(l, c, u, h) {const d = l.morphTargetInfluences;
                if (!0 == = t.isWebGL2) {const
                    r = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color, i = void
                    0 != = r ? r.length : 0; let o = a.get(c);
                    if ( void 0 == = o || o.count != = i){
                        void 0 != = o && o.texture.dispose();const e = void 0 != = c.morphAttributes.position, n = void
                        0 != = c.morphAttributes.normal, r = void
                        0 != = c.morphAttributes.color, l = c.morphAttributes.position ||[],
                        u = c.morphAttributes.normal ||[],h = c.morphAttributes.color ||[];
                        let d = 0;
                        !0 == = e && (d = 1), !0 == = n && (d = 2), !0 == = r && (d = 3);
                        let f = c.attributes.position.count * d, p = 1;
                        f > t.maxTextureSize && (p = Math.ceil(f / t.maxTextureSize), f = t.maxTextureSize);const
                        m = new Float32Array(f * p * 4 * i), g = new Ae(m, f, p, i);
                        g.type = w, g.needsUpdate = !0;const v = 4 * d;
                        for (let t = 0; t < i; t++) {const i = l[t], a = u[t], o = h[t], c = f * p * 4 * t;
                            for (let t = 0; t < i.count; t++) {const l = t * v;
                                !0 == = e && (s.fromBufferAttribute(i, t), m[c + l + 0] = s.x, m[c + l + 1] = s.y, m[c + l + 2] = s.z, m[c + l + 3] = 0),
                                !0 == = n && (s.fromBufferAttribute(a, t), m[c + l + 4] = s.x, m[c + l + 5] = s.y, m[c + l + 6] = s.z, m[c + l + 7] = 0),
                                !0 == = r && (s.fromBufferAttribute(o, t), m[c + l + 8] = s.x, m[c + l + 9] = s.y, m[c + l + 10] = s.z, m[c + l + 11] = 4 == = o.itemSize ? s.w : 1)}
                        } function y () {
                            g.dispose(), a.delete(c), c.removeEventListener("dispose", y)
                        } o = {count:i, texture:g, size:new ae(f, p)},a.set(c, o), c.addEventListener("dispose", y)
                    } let l = 0;
                    for (let e = 0; e < d.length; e++) l += d[e];const u = c.morphTargetsRelative ? 1 : 1 - l;
                    h.getUniforms().setValue(e, "morphTargetBaseInfluence", u), h.getUniforms().setValue(e, "morphTargetInfluences", d), h.getUniforms().setValue(e, "morphTargetsTexture", o.texture, n), h.getUniforms().setValue(e, "morphTargetsTextureSize", o.size)
                } else {const t = void 0 == = d ? 0 : d.length; let n = r[c.id];
                    if ( void 0 == = n || n.length != = t){
                        n =[];
                        for (let e = 0; e < t; e++) n[e] =[e, 0];
                        r[c.id] = n
                    } for (let e = 0; e < t; e++) {const t = n[e];
                        t[0] = e, t[1] = d[e]
                    } n.sort(Er);
                    for (let e = 0; e < 8; e++) e < t && n[e][1] ? (o[e][0] = n[e][0], o[e][1] = n[e][1]):
                    (o[e][0] = Number.MAX_SAFE_INTEGER, o[e][1] = 0);
                    o.sort(Mr);const a = c.morphAttributes.position, s = c.morphAttributes.normal;
                    let l = 0;
                    for (let e = 0; e < 8; e++) {const t = o[e], n = t[0], r = t[1];
                        n != = Number.MAX_SAFE_INTEGER && r ? (a && c.getAttribute("morphTarget" + e) != = a[n] && c.setAttribute("morphTarget" + e, a[n]), s && c.getAttribute("morphNormal" + e) != = s[n] && c.setAttribute("morphNormal" + e, s[n]), i[e] = r, l += r):
                        (a && !0 == = c.hasAttribute("morphTarget" + e) && c.deleteAttribute("morphTarget" + e), s && !0 == = c.hasAttribute("morphNormal" + e) && c.deleteAttribute("morphNormal" + e), i[e] = 0)}const
                    u = c.morphTargetsRelative ? 1 : 1 - l;
                    h.getUniforms().setValue(e, "morphTargetBaseInfluence", u), h.getUniforms().setValue(e, "morphTargetInfluences", i)
                }
            }}} function Cr (e, t, n, r){
            let i = new WeakMap; function a (e) {const t = e.target;
            t.removeEventListener("dispose", a), n.remove(t.instanceMatrix), null != = t.instanceColor && n.remove(t.instanceColor)}
            return {update:function(e) {const s = r.render.frame, o = e.geometry, l = t.get(e, o);
                return i.get(l) != = s && (t.update(l),i.set(l, s)),
                e.isInstancedMesh && (!1 == = e.hasEventListener("dispose", a) && e.addEventListener("dispose", a), n.update(e.instanceMatrix, 34962), null != = e.instanceColor && n.update(e.instanceColor, 34962)),
                l
            },dispose:
            function() {
                i = new WeakMap
            }}}const Ar = new Ee, Lr = new Ae, Pr = new Le, Rr = new zn, Dr =[],kr =[],
        Ir = new Float32Array(16), Nr = new Float32Array(9), Or = new Float32Array(4);
        function zr (e, t, n){const r = e[0];
            if (r <= 0 || r > 0) return e;const i = t * n;
            let a = Dr[i];
            if ( void 0 == = a && (a = new Float32Array(i), Dr[i] = a),0 != = t){
                r.toArray(a, 0);
                for (let r = 1, i = 0; r != = t; ++r) i += n, e[r].toArray(a, i)
            } return a
        } function Ur (e, t){
            if (e.length != = t.length) return !1;
            for (let n = 0, r = e.length; n < r; n++) if (e[n] != = t[n]) return !1; return !0
        } function Fr (e, t){
            for (let n = 0, r = t.length; n < r; n++) e[n] = t[n]
        } function Br (e, t){
            let n = kr[t];
            void 0 == = n && (n = new Int32Array(t), kr[t] = n);
            for (let r = 0; r != = t; ++r) n[r] = e.allocateTextureUnit(); return n
        } function Vr (e, t){const n = this.cache;
            n[0] != = t && (e.uniform1f(this.addr, t), n[0] = t)} function Hr (e, t){const n = this.cache;
            if ( void 0 != = t.x)
            n[0] == = t.x && n[1] == = t.y || (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);else{
                if (Ur(n, t)) return;
                e.uniform2fv(this.addr, t), Fr(n, t)
            }
        } function Wr (e, t){const n = this.cache;
            if ( void 0 != = t.x)
            n[0] == = t.x && n[1] == = t.y && n[2] == = t.z || (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z)
            ;else if ( void 0 != = t.r)
            n[0] == = t.r && n[1] == = t.g && n[2] == = t.b || (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b)
            ;else{
                if (Ur(n, t)) return;
                e.uniform3fv(this.addr, t), Fr(n, t)
            }
        } function Gr (e, t){const n = this.cache;
            if ( void 0 != = t.x)
            n[0] == = t.x && n[1] == = t.y && n[2] == = t.z && n[3] == = t.w || (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w)
            ;else{
                if (Ur(n, t)) return;
                e.uniform4fv(this.addr, t), Fr(n, t)
            }
        } function jr (e, t){const n = this.cache, r = t.elements;
            if ( void 0 == = r){
                if (Ur(n, t)) return;
                e.uniformMatrix2fv(this.addr, !1, t), Fr(n, t)
            }else{
                if (Ur(n, r)) return;
                Or.set(r), e.uniformMatrix2fv(this.addr, !1, Or), Fr(n, r)
            }
        } function qr (e, t){const n = this.cache, r = t.elements;
            if ( void 0 == = r){
                if (Ur(n, t)) return;
                e.uniformMatrix3fv(this.addr, !1, t), Fr(n, t)
            }else{
                if (Ur(n, r)) return;
                Nr.set(r), e.uniformMatrix3fv(this.addr, !1, Nr), Fr(n, r)
            }
        } function Xr (e, t){const n = this.cache, r = t.elements;
            if ( void 0 == = r){
                if (Ur(n, t)) return;
                e.uniformMatrix4fv(this.addr, !1, t), Fr(n, t)
            }else{
                if (Ur(n, r)) return;
                Ir.set(r), e.uniformMatrix4fv(this.addr, !1, Ir), Fr(n, r)
            }
        } function Yr (e, t){const n = this.cache;
            n[0] != = t && (e.uniform1i(this.addr, t), n[0] = t)} function Kr (e, t){const n = this.cache;
            Ur(n, t) || (e.uniform2iv(this.addr, t), Fr(n, t))} function Zr (e, t){const n = this.cache;
            Ur(n, t) || (e.uniform3iv(this.addr, t), Fr(n, t))} function Jr (e, t){const n = this.cache;
            Ur(n, t) || (e.uniform4iv(this.addr, t), Fr(n, t))} function $r (e, t){const n = this.cache;
            n[0] != = t && (e.uniform1ui(this.addr, t), n[0] = t)} function Qr (e, t){const n = this.cache;
            Ur(n, t) || (e.uniform2uiv(this.addr, t), Fr(n, t))} function ei (e, t){const n = this.cache;
            Ur(n, t) || (e.uniform3uiv(this.addr, t), Fr(n, t))} function ti (e, t){const n = this.cache;
            Ur(n, t) || (e.uniform4uiv(this.addr, t), Fr(n, t))} function ni (e, t, n)
        {const r = this.cache, i = n.allocateTextureUnit();
            r[0] != = i && (e.uniform1i(this.addr, i), r[0] = i),n.setTexture2D(t || Ar, i)
        } function ri (e, t, n){const r = this.cache, i = n.allocateTextureUnit();
            r[0] != = i && (e.uniform1i(this.addr, i), r[0] = i),n.setTexture3D(t || Pr, i)
        } function ii (e, t, n){const r = this.cache, i = n.allocateTextureUnit();
            r[0] != = i && (e.uniform1i(this.addr, i), r[0] = i),n.setTextureCube(t || Rr, i)
        } function ai (e, t, n){const r = this.cache, i = n.allocateTextureUnit();
            r[0] != = i && (e.uniform1i(this.addr, i), r[0] = i),n.setTexture2DArray(t || Lr, i)
        } function si (e, t){
            e.uniform1fv(this.addr, t)
        } function oi (e, t){const n = zr(t, this.size, 2);
            e.uniform2fv(this.addr, n)
        } function li (e, t){const n = zr(t, this.size, 3);
            e.uniform3fv(this.addr, n)
        } function ci (e, t){const n = zr(t, this.size, 4);
            e.uniform4fv(this.addr, n)
        } function ui (e, t){const n = zr(t, this.size, 4);
            e.uniformMatrix2fv(this.addr, !1, n)
        } function hi (e, t){const n = zr(t, this.size, 9);
            e.uniformMatrix3fv(this.addr, !1, n)
        } function di (e, t){const n = zr(t, this.size, 16);
            e.uniformMatrix4fv(this.addr, !1, n)
        } function fi (e, t){
            e.uniform1iv(this.addr, t)
        } function pi (e, t){
            e.uniform2iv(this.addr, t)
        } function mi (e, t){
            e.uniform3iv(this.addr, t)
        } function gi (e, t){
            e.uniform4iv(this.addr, t)
        } function vi (e, t){
            e.uniform1uiv(this.addr, t)
        } function yi (e, t){
            e.uniform2uiv(this.addr, t)
        } function _i (e, t){
            e.uniform3uiv(this.addr, t)
        } function xi (e, t){
            e.uniform4uiv(this.addr, t)
        } function bi (e, t, n){const r = t.length, i = Br(n, r);
            e.uniform1iv(this.addr, i);
            for (let a = 0; a != = r; ++a) n.setTexture2D(t[a] || Ar, i[a])
        } function wi (e, t, n){const r = t.length, i = Br(n, r);
            e.uniform1iv(this.addr, i);
            for (let a = 0; a != = r; ++a) n.setTexture3D(t[a] || Pr, i[a])
        } function Si (e, t, n){const r = t.length, i = Br(n, r);
            e.uniform1iv(this.addr, i);
            for (let a = 0; a != = r; ++a) n.setTextureCube(t[a] || Rr, i[a])
        } function Mi (e, t, n){const r = t.length, i = Br(n, r);
            e.uniform1iv(this.addr, i);
            for (let a = 0; a != = r; ++a) n.setTexture2DArray(t[a] || Lr, i[a])
        } class Ei {
            constructor(e, t, n) {
                this.id = e, this.addr = n, this.cache =[],this.setValue = function(e) {
                    switch (e) {
                        case 5126:
                            return Vr;
                        case 35664:
                            return Hr;
                        case 35665:
                            return Wr;
                        case 35666:
                            return Gr;
                        case 35674:
                            return jr;
                        case 35675:
                            return qr;
                        case 35676:
                            return Xr;
                        case 5124:
                        case 35670:
                            return Yr;
                        case 35667:
                        case 35671:
                            return Kr;
                        case 35668:
                        case 35672:
                            return Zr;
                        case 35669:
                        case 35673:
                            return Jr;
                        case 5125:
                            return $r;
                        case 36294:
                            return Qr;
                        case 36295:
                            return ei;
                        case 36296:
                            return ti;
                        case 35678:
                        case 36198:
                        case 36298:
                        case 36306:
                        case 35682:
                            return ni;
                        case 35679:
                        case 36299:
                        case 36307:
                            return ri;
                        case 35680:
                        case 36300:
                        case 36308:
                        case 36293:
                            return ii;
                        case 36289:
                        case 36303:
                        case 36311:
                        case 36292:
                            return ai
                    }
                } (t.type)
            }
        } class Ti {
            constructor(e, t, n) {
                this.id = e, this.addr = n, this.cache =[],this.size = t.size, this.setValue = function(e) {
                    switch (e) {
                        case 5126:
                            return si;
                        case 35664:
                            return oi;
                        case 35665:
                            return li;
                        case 35666:
                            return ci;
                        case 35674:
                            return ui;
                        case 35675:
                            return hi;
                        case 35676:
                            return di;
                        case 5124:
                        case 35670:
                            return fi;
                        case 35667:
                        case 35671:
                            return pi;
                        case 35668:
                        case 35672:
                            return mi;
                        case 35669:
                        case 35673:
                            return gi;
                        case 5125:
                            return vi;
                        case 36294:
                            return yi;
                        case 36295:
                            return _i;
                        case 36296:
                            return xi;
                        case 35678:
                        case 36198:
                        case 36298:
                        case 36306:
                        case 35682:
                            return bi;
                        case 35679:
                        case 36299:
                        case 36307:
                            return wi;
                        case 35680:
                        case 36300:
                        case 36308:
                        case 36293:
                            return Si;
                        case 36289:
                        case 36303:
                        case 36311:
                        case 36292:
                            return Mi
                    }
                } (t.type)
            }
        } class Ci {
            constructor(e) {
                this.id = e, this.seq =[],this.map = {}
            }

            setValue(e, t, n) {const r = this.seq;
                for (let i = 0, a = r.length; i != = a; ++i) {const a = r[i];
                    a.setValue(e, t[a.id], n)
                }
            }
        }const Ai =/(\w +)(\])?(\[|\.)?/g;
        function Li (e, t){
            e.seq.push(t), e.map[t.id] = t
        } function Pi (e, t, n){const r = e.name, i = r.length;
            for (Ai.lastIndex = 0; ; ) {const a = Ai.exec(r), s = Ai.lastIndex;
                let o = a[1];const l = "]" == = a[2], c = a[3]; if (l && (o |= 0),void
                0 == = c || "[" == = c && s + 2 == = i){
                    Li(n, void 0 == = c ? new Ei(o, e, t) : new Ti(o, e, t));
                    break
                } {
                    let e = n.map[o];
                    void 0 == = e && (e = new Ci(o), Li(n, e)),n = e
                }
            }
        } class Ri {
            constructor(e, t) {
                this.seq =[],this.map = {};const n = e.getProgramParameter(t, 35718);
                for (let r = 0; r < n; ++r) {const n = e.getActiveUniform(t, r);
                    Pi(n, e.getUniformLocation(t, n.name), this)
                }
            }

            setValue(e, t, n, r) {const i = this.map[t];
                void 0 != = i && i.setValue(e, n, r)
            }

            setOptional(e, t, n) {const r = t[n];
                void 0 != = r && this.setValue(e, n, r)
            }

            static upload(e, t, n, r) {
                for (let i = 0, a = t.length; i != = a; ++i) {const a = t[i], s = n[a.id];
                    !1 != = s.needsUpdate && a.setValue(e, s.value, r)
                }
            }

            static seqWithValue(e, t) {const n =[];
                for (let r = 0, i = e.length; r != = i; ++r) {const i = e[r];
                    i.id in t && n.push(i)
                } return n
            }
        } function Di (e, t, n){const r = e.createShader(t);
            return e.shaderSource(r, n),e.compileShader(r), r
        } let ki = 0;
        function Ii (e, t, n){const r = e.getShaderParameter(t, 35713), i = e.getShaderInfoLog(t).trim();
            if (r && "" == = i) return "";const a =/ERROR:
            0:(\d +)/.exec(i);
            if (a) {const r = parseInt(a[1]);
                return n.toUpperCase() + "\n\n" + i + "\n\n" + function(e, t)
                {const n = e.split("\n"), r =[],i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
                    for (let s = i; s < a; s++) {const e = s + 1;
                        r.push(`$ {
                            e == = t ? ">" : " "
                        } $ {
                            e
                        }:$ {
                            n[s]
                        }`)} return r.join("\n")
                } (e.getShaderSource(t), r)} return i
        } function Ni (e, t){const n = function(e) {
            switch (e) {
                case U:
                    return["Linear", "( value )"];
                case F:
                    return["sRGB", "( value )"];
                default:
                    return console.warn("THREE.WebGLProgram: Unsupported encoding:", e),["Linear", "( value )"]}
        } (t);
            return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
        } function Oi (e, t){
            let n;
            switch (t) {
                case 1:
                    n = "Linear";
                    break;
                case 2:
                    n = "Reinhard";
                    break;
                case 3:
                    n = "OptimizedCineon";
                    break;
                case 4:
                    n = "ACESFilmic";
                    break;
                case 5:
                    n = "Custom";
                    break;
                default:
                    console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), n = "Linear"
            } return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
        } function zi (e) { return "" != = e}function Ui (e, t)
        {const n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
            return e.replace( / NUM_DIR_LIGHTS / g,t.numDirLights).replace( / NUM_SPOT_LIGHTS / g, t.numSpotLights).
            replace( / NUM_SPOT_LIGHT_MAPS / g, t.numSpotLightMaps).replace( / NUM_SPOT_LIGHT_COORDS / g, n).
            replace( / NUM_RECT_AREA_LIGHTS / g, t.numRectAreaLights).replace( / NUM_POINT_LIGHTS / g, t.numPointLights).
            replace( / NUM_HEMI_LIGHTS / g, t.numHemiLights).replace( / NUM_DIR_LIGHT_SHADOWS / g, t.numDirLightShadows).
            replace( / NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS / g, t.numSpotLightShadowsWithMaps).
            replace( / NUM_SPOT_LIGHT_SHADOWS / g, t.numSpotLightShadows).
            replace( / NUM_POINT_LIGHT_SHADOWS / g, t.numPointLightShadows)} function Fi (e, t){
            return e.replace( / NUM_CLIPPING_PLANES / g,t.numClippingPlanes).
            replace( / UNION_CLIPPING_PLANES / g, t.numClippingPlanes - t.numClipIntersection)}const Bi =/^[ \t]*#
        include + < ([\w\d. /]+)>/gm;
        function Vi (e) { return e.replace(Bi, Hi)}function Hi (e, t){const n = Kn[t];
            if ( void 0 == = n)throw new Error("Can not resolve #include <" + t + ">");
            return Vi(n)
        }const Wi =/#pragma unroll_loop_start\s + for\s *\(\s * int\s + i\s *=\s * (\d +)\s *;\s * i\s * <\s * (\d +)\
        s *;\s * i\s *\+\+\s *\)\s * {([\s\S]+ ?)}\s +#pragma unroll_loop_end/g;
        function Gi (e) { return e.replace(Wi, ji)}function ji (e, t, n, r){
            let i = "";
            for (let a = parseInt(t); a < parseInt(n); a++) i += r.replace( /\[\s * i\s *\]/g, "[ " + a + " ]").
            replace( / UNROLLED_LOOP_INDEX / g, a);
            return i
        } function qi (e) {let t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
        return "highp" == = e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" == = e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" == = e.precision && (t += "\n#define LOW_PRECISION"),
        t}function Xi (e, t, n, r){const a = e.getContext(), s = n.defines;
            let c = n.vertexShader, u = n.fragmentShader;const d = function(e) {
                let t = "SHADOWMAP_TYPE_BASIC";
                return 1 == = e.shadowMapType ? t = "SHADOWMAP_TYPE_PCF" : e.shadowMapType == = i ? t = "SHADOWMAP_TYPE_PCF_SOFT" : 3 == = e.shadowMapType && (t = "SHADOWMAP_TYPE_VSM"),
                t
            } (n), f = function(e) {
                let t = "ENVMAP_TYPE_CUBE";
                if (e.envMap) switch (e.envMapMode) {
                    case o:
                    case l:
                        t = "ENVMAP_TYPE_CUBE";
                        break;
                    case h:
                        t = "ENVMAP_TYPE_CUBE_UV"
                } return t
            } (n), p = function(e) {
                let t = "ENVMAP_MODE_REFLECTION";
                if (e.envMap) switch (e.envMapMode) {
                    case l:
                        t = "ENVMAP_MODE_REFRACTION"
                } return t
            } (n), m = function(e) {
                let t = "ENVMAP_BLENDING_NONE";
                if (e.envMap) switch (e.combine) {
                    case 0:
                        t = "ENVMAP_BLENDING_MULTIPLY";
                        break;
                    case 1:
                        t = "ENVMAP_BLENDING_MIX";
                        break;
                    case 2:
                        t = "ENVMAP_BLENDING_ADD"
                } return t
            } (n), g = function(e) {const t = e.envMapCubeUVHeight;
                if (null == = t) return null;const n = Math.log2(t) - 2, r = 1 / t;
                return {texelWidth:1 / (3 * Math.max(Math.pow(2, n), 112)), texelHeight:r, maxMip:n}}
            (n), v = n.isWebGL2 ? "" : function(e) {
                return[
                e.extensionDerivatives || e.envMapCubeUVHeight || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" == = e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap || e.transmission) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].
                filter(zi).join("\n")
            } (n), y = function(e) {const t =[];
                for (const n in e){const r = e[n];
                    !1 != = r && t.push("#define " + n + " " + r)
                } return t.join("\n")
            } (s), _ = a.createProgram();
            let x, b, w = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
            n.isRawShaderMaterial ? (x =[y].filter(zi).join("\n"), x.length > 0 && (x += "\n"), b =[v, y].
            filter(zi).join("\n"), b.length > 0 && (b += "\n")):
            (x =[qi(n), "#define SHADER_NAME " + n.shaderName, y, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 == = n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].
            filter(zi).join("\n"), b =[
            v, qi(n), "#define SHADER_NAME " + n.shaderName, y, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + f : "", n.envMap ? "#define " + p : "", n.envMap ? "#define " + m : "", g ? "#define CUBEUV_TEXEL_WIDTH " + g.texelWidth : "", g ? "#define CUBEUV_TEXEL_HEIGHT " + g.texelHeight : "", g ? "#define CUBEUV_MAX_MIP " + g.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + d : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 != = n.toneMapping ? "#define TONE_MAPPING" : "", 0 != = n.toneMapping ? Kn.tonemapping_pars_fragment : "", 0 != = n.toneMapping ? Oi("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", Kn.encodings_pars_fragment, Ni("linearToOutputTexel", n.outputEncoding), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].
            filter(zi).join("\n")),
            c = Vi(c), c = Ui(c, n), c = Fi(c, n), u = Vi(u), u = Ui(u, n), u = Fi(u, n), c = Gi(c), u = Gi(u), n.isWebGL2 && !0 != = n.isRawShaderMaterial && (w = "#version 300 es\n", x =[
            "precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].
            join("\n") + "\n" + x, b =[
            "#define varying in", n.glslVersion == = j ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion == = j ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].
            join("\n") + "\n" + b);const S = w + b + u, M = Di(a, 35633, w + x + c), E = Di(a, 35632, S);
            if (a.attachShader(_, M),a.attachShader(_, E),void
            0 != = n.index0AttributeName ? a.bindAttribLocation(_, 0, n.index0AttributeName) : !0 == = n.morphTargets && a.bindAttribLocation(_, 0, "position"), a.linkProgram(_), e.debug.checkShaderErrors)
            {const
                e = a.getProgramInfoLog(_).trim(), t = a.getShaderInfoLog(M).trim(), n = a.getShaderInfoLog(E).trim();
                let r = !0, i = !0;
                if (!1 == = a.getProgramParameter(_, 35714)) {
                    r = !1;const t = Ii(a, M, "vertex"), n = Ii(a, E, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + a.getError() + " - VALIDATE_STATUS " + a.getProgramParameter(_, 35715) + "\n\nProgram Info Log: " + e + "\n" + t + "\n" + n)
                } else
                    "" != = e ? console.warn("THREE.WebGLProgram: Program Info Log:", e) : "" != = t && "" != = n || (i = !1);
                i && (this.diagnostics = {runnable:r, programLog:e, vertexShader:{
                log:
                t, prefix:x
            },fragmentShader:
            {
                log:
                n, prefix:b
            }})} let T, C;
            return a.deleteShader(M),a.deleteShader(E), this.getUniforms = function() {
                return void 0 == = T && (T = new Ri(a, _)), T
            },this.getAttributes = function() {
                return void 0 == = C && (C = function(e, t) {const n = {}, r = e.getProgramParameter(t, 35721);
                    for (let i = 0; i < r; i++) {const r = e.getActiveAttrib(t, i), a = r.name;
                        let s = 1;
                        35674 == = r.type && (s = 2), 35675 == = r.type && (s = 3), 35676 == = r.type && (s = 4), n[a] = {type:
                        r.type, location:e.getAttribLocation(t, a), locationSize:s}} return n
                } (a, _)),C
            },this.destroy = function() {
                r.releaseStatesOfProgram(this), a.deleteProgram(_), this.program = void 0
            },
            this.name = n.shaderName, this.id = ki++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = M, this.fragmentShader = E, this
        } let Yi = 0;
        class Ki {
            constructor() {
                this.shaderCache = new Map, this.materialCache = new Map
            }

            update(e) {const
                t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), i = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
                return !1 == = a.has(r) && (a.add(r),r.usedTimes++),!1 == = a.has(i) && (a.add(i), i.usedTimes++),this
            }

            remove(e) {const t = this.materialCache.get(e);
                for (const n of t)n.usedTimes--, 0 == = n.usedTimes && this.shaderCache.delete(n.code);
                return this.materialCache.delete(e),this
            }

            getVertexShaderID(e) {
                return this._getShaderStage(e.vertexShader).id
            }

            getFragmentShaderID(e) {
                return this._getShaderStage(e.fragmentShader).id
            }

            dispose() {
                this.shaderCache.clear(), this.materialCache.clear()
            }

            _getShaderCacheForMaterial(e) {const t = this.materialCache;
                let n = t.get(e);
                return void 0 == = n && (n = new Set, t.set(e, n)),n
            }

            _getShaderStage(e) {const t = this.shaderCache;
                let n = t.get(e);
                return void 0 == = n && (n = new Zi(e), t.set(e, n)),n
            }
        } class Zi {
            constructor(e) {
                this.id = Yi++, this.code = e, this.usedTimes = 0
            }
        } function Ji (e, t, n, r, i, s, o)
        {const l = new _t, c = new Ki, u =[],d = i.isWebGL2, f = i.logarithmicDepthBuffer, p = i.vertexTextures;
            let m = i.precision;const g = {MeshDepthMaterial:"depth", MeshDistanceMaterial:
            "distanceRGBA", MeshNormalMaterial:"normal", MeshBasicMaterial:"basic", MeshLambertMaterial:
            "lambert", MeshPhongMaterial:"phong", MeshToonMaterial:"toon", MeshStandardMaterial:
            "physical", MeshPhysicalMaterial:"physical", MeshMatcapMaterial:"matcap", LineBasicMaterial:
            "basic", LineDashedMaterial:"dashed", PointsMaterial:"points", ShadowMaterial:"shadow", SpriteMaterial:
            "sprite"};
            return {getParameters:function(s, l, u, v, y) {const
            _ = v.fog, x = y.geometry, b = s.isMeshStandardMaterial ? v.environment : null, w = (s.isMeshStandardMaterial ? n : t).get(s.envMap || b), S = w && w.mapping == = h ? w.image.height : null, M = g[s.type];
            null != = s.precision && (m = i.getMaxPrecision(s.precision), m != = s.precision && console.warn("THREE.WebGLProgram.getParameters:", s.precision, "not supported, using", m, "instead."))
            ;const E = x.morphAttributes.position || x.morphAttributes.normal || x.morphAttributes.color, T = void
            0 != = E ? E.length : 0; let C, A, L, P, R = 0;
            if ( void 0 != = x.morphAttributes.position && (R = 1),void 0 != = x.morphAttributes.normal && (R = 2),void
            0 != = x.morphAttributes.color && (R = 3), M){const e = Jn[M];
                C = e.vertexShader, A = e.fragmentShader
            }else
            C = s.vertexShader, A = s.fragmentShader, c.update(s), L = c.getVertexShaderID(s), P = c.getFragmentShaderID(s);const
            D = e.getRenderTarget(), k = s.alphaTest > 0, I = s.clearcoat > 0, N = s.iridescence > 0;
            return {isWebGL2:d, shaderID:M, shaderName:s.type, vertexShader:C, fragmentShader:A, defines:
            s.defines, customVertexShaderID:L, customFragmentShaderID:P, isRawShaderMaterial:
            !0 == = s.isRawShaderMaterial, glslVersion:s.glslVersion, precision:m, instancing:
            !0 == = y.isInstancedMesh, instancingColor:
            !0 == = y.isInstancedMesh && null != = y.instanceColor, supportsVertexTextures:p, outputEncoding:
            null == = D ? e.outputEncoding : !0 == = D.isXRRenderTarget ? D.texture.encoding : U, map:!!s.map, matcap:
            !!s.matcap, envMap:!!w, envMapMode:w && w.mapping, envMapCubeUVHeight:S, lightMap:!!s.lightMap, aoMap:
            !!s.aoMap, emissiveMap:!!s.emissiveMap, bumpMap:!!s.bumpMap, normalMap:!!s.normalMap, objectSpaceNormalMap:
            1 == = s.normalMapType, tangentSpaceNormalMap:0 == = s.normalMapType, decodeVideoTexture:
            !!s.map && !0 == = s.map.isVideoTexture && s.map.encoding == = F, clearcoat:I, clearcoatMap:
            I && !!s.clearcoatMap, clearcoatRoughnessMap:I && !!s.clearcoatRoughnessMap, clearcoatNormalMap:
            I && !!s.clearcoatNormalMap, iridescence:N, iridescenceMap:N && !!s.iridescenceMap, iridescenceThicknessMap:
            N && !!s.iridescenceThicknessMap, displacementMap:!!s.displacementMap, roughnessMap:
            !!s.roughnessMap, metalnessMap:!!s.metalnessMap, specularMap:!!s.specularMap, specularIntensityMap:
            !!s.specularIntensityMap, specularColorMap:!!s.specularColorMap, opaque:
            !1 == = s.transparent && 1 == = s.blending, alphaMap:!!s.alphaMap, alphaTest:k, gradientMap:
            !!s.gradientMap, sheen:s.sheen > 0, sheenColorMap:!!s.sheenColorMap, sheenRoughnessMap:
            !!s.sheenRoughnessMap, transmission:s.transmission > 0, transmissionMap:!!s.transmissionMap, thicknessMap:
            !!s.thicknessMap, combine:s.combine, vertexTangents:!!s.normalMap && !!x.attributes.tangent, vertexColors:
            s.vertexColors, vertexAlphas:
            !0 == = s.vertexColors && !!x.attributes.color && 4 == = x.attributes.color.itemSize, vertexUvs:
            !!s.map || !!s.bumpMap || !!s.normalMap || !!s.specularMap || !!s.alphaMap || !!s.emissiveMap || !!s.roughnessMap || !!s.metalnessMap || !!s.clearcoatMap || !!s.clearcoatRoughnessMap || !!s.clearcoatNormalMap || !!s.iridescenceMap || !!s.iridescenceThicknessMap || !!s.displacementMap || !!s.transmissionMap || !!s.thicknessMap || !!s.specularIntensityMap || !!s.specularColorMap || !!s.sheenColorMap || !!s.sheenRoughnessMap, uvsVertexOnly:
            !(s.map || s.bumpMap || s.normalMap || s.specularMap || s.alphaMap || s.emissiveMap || s.roughnessMap || s.metalnessMap || s.clearcoatNormalMap || s.iridescenceMap || s.iridescenceThicknessMap || s.transmission > 0 || s.transmissionMap || s.thicknessMap || s.specularIntensityMap || s.specularColorMap || s.sheen > 0 || s.sheenColorMap || s.sheenRoughnessMap) && !!s.displacementMap, fog:
            !!_, useFog:!0 == = s.fog, fogExp2:_ && _.isFogExp2, flatShading:!!s.flatShading, sizeAttenuation:
            s.sizeAttenuation, logarithmicDepthBuffer:f, skinning:!0 == = y.isSkinnedMesh, morphTargets:void
            0 != = x.morphAttributes.position, morphNormals:void 0 != = x.morphAttributes.normal, morphColors:void
            0 != = x.morphAttributes.color, morphTargetsCount:T, morphTextureStride:R, numDirLights:
            l.directional.length, numPointLights:l.point.length, numSpotLights:l.spot.length, numSpotLightMaps:
            l.spotLightMap.length, numRectAreaLights:l.rectArea.length, numHemiLights:l.hemi.length, numDirLightShadows:
            l.directionalShadowMap.length, numPointLightShadows:l.pointShadowMap.length, numSpotLightShadows:
            l.spotShadowMap.length, numSpotLightShadowsWithMaps:l.numSpotLightShadowsWithMaps, numClippingPlanes:
            o.numPlanes, numClipIntersection:o.numIntersection, dithering:s.dithering, shadowMapEnabled:
            e.shadowMap.enabled && u.length > 0, shadowMapType:e.shadowMap.type, toneMapping:
            s.toneMapped ? e.toneMapping : 0, physicallyCorrectLights:e.physicallyCorrectLights, premultipliedAlpha:
            s.premultipliedAlpha, doubleSided:s.side == = a, flipSided:1 == = s.side, useDepthPacking:
            !!s.depthPacking, depthPacking:s.depthPacking || 0, index0AttributeName:
            s.index0AttributeName, extensionDerivatives:s.extensions && s.extensions.derivatives, extensionFragDepth:
            s.extensions && s.extensions.fragDepth, extensionDrawBuffers:
            s.extensions && s.extensions.drawBuffers, extensionShaderTextureLOD:
            s.extensions && s.extensions.shaderTextureLOD, rendererExtensionFragDepth:
            d || r.has("EXT_frag_depth"), rendererExtensionDrawBuffers:
            d || r.has("WEBGL_draw_buffers"), rendererExtensionShaderTextureLod:
            d || r.has("EXT_shader_texture_lod"), customProgramCacheKey:s.customProgramCacheKey()}},getProgramCacheKey:
        function(t) {const n =[];
            if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),void
            0 != = t.defines)for (const e in t.defines)n.push(e), n.push(t.defines[e]);
            return !1 == = t.isRawShaderMaterial && (!function(e, t) {
                e.push(t.precision), e.push(t.outputEncoding), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.combine), e.push(t.vertexUvs), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking)
            } (n, t),function(e, t) {
                l.disableAll(), t.isWebGL2 && l.enable(0);
                t.supportsVertexTextures && l.enable(1);
                t.instancing && l.enable(2);
                t.instancingColor && l.enable(3);
                t.map && l.enable(4);
                t.matcap && l.enable(5);
                t.envMap && l.enable(6);
                t.lightMap && l.enable(7);
                t.aoMap && l.enable(8);
                t.emissiveMap && l.enable(9);
                t.bumpMap && l.enable(10);
                t.normalMap && l.enable(11);
                t.objectSpaceNormalMap && l.enable(12);
                t.tangentSpaceNormalMap && l.enable(13);
                t.clearcoat && l.enable(14);
                t.clearcoatMap && l.enable(15);
                t.clearcoatRoughnessMap && l.enable(16);
                t.clearcoatNormalMap && l.enable(17);
                t.iridescence && l.enable(18);
                t.iridescenceMap && l.enable(19);
                t.iridescenceThicknessMap && l.enable(20);
                t.displacementMap && l.enable(21);
                t.specularMap && l.enable(22);
                t.roughnessMap && l.enable(23);
                t.metalnessMap && l.enable(24);
                t.gradientMap && l.enable(25);
                t.alphaMap && l.enable(26);
                t.alphaTest && l.enable(27);
                t.vertexColors && l.enable(28);
                t.vertexAlphas && l.enable(29);
                t.vertexUvs && l.enable(30);
                t.vertexTangents && l.enable(31);
                t.uvsVertexOnly && l.enable(32);
                e.push(l.mask), l.disableAll(), t.fog && l.enable(0);
                t.useFog && l.enable(1);
                t.flatShading && l.enable(2);
                t.logarithmicDepthBuffer && l.enable(3);
                t.skinning && l.enable(4);
                t.morphTargets && l.enable(5);
                t.morphNormals && l.enable(6);
                t.morphColors && l.enable(7);
                t.premultipliedAlpha && l.enable(8);
                t.shadowMapEnabled && l.enable(9);
                t.physicallyCorrectLights && l.enable(10);
                t.doubleSided && l.enable(11);
                t.flipSided && l.enable(12);
                t.useDepthPacking && l.enable(13);
                t.dithering && l.enable(14);
                t.specularIntensityMap && l.enable(15);
                t.specularColorMap && l.enable(16);
                t.transmission && l.enable(17);
                t.transmissionMap && l.enable(18);
                t.thicknessMap && l.enable(19);
                t.sheen && l.enable(20);
                t.sheenColorMap && l.enable(21);
                t.sheenRoughnessMap && l.enable(22);
                t.decodeVideoTexture && l.enable(23);
                t.opaque && l.enable(24);
                e.push(l.mask)
            } (n, t),n.push(e.outputEncoding)),n.push(t.customProgramCacheKey), n.join()
        },getUniforms:
        function(e) {const t = g[e.type];
            let n;
            if (t) {const e = Jn[t];
                n = Rn.clone(e.uniforms)
            } else n = e.uniforms; return n
        },acquireProgram:
        function(t, n) {
            let r;
            for (let e = 0, i = u.length; e < i; e++) {const t = u[e];
                if (t.cacheKey == = n) {
                    r = t, ++r.usedTimes;
                    break
                }
            } return void 0 == = r && (r = new Xi(e, n, t, s), u.push(r)),r
        },releaseProgram:
        function(e) {
            if (0 == = --e.usedTimes) {const t = u.indexOf(e);
                u[t] = u[u.length - 1], u.pop(), e.destroy()
            }
        },releaseShaderCache:
        function(e) {
            c.remove(e)
        },programs:
        u, dispose:function() {
            c.dispose()
        }}} function $i () {
            let e = new WeakMap; return {get:function(t) {
                let n = e.get(t);
                return void 0 == = n && (n = {}, e.set(t, n)),n
            },remove:
            function(t) {
                e.delete(t)
            },update:
            function(t, n, r) {
                e.get(t)[n] = r
            },dispose:
            function() {
                e = new WeakMap
            }}} function Qi (e, t){
            return e.groupOrder != = t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder != = t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id != = t.material.id ? e.material.id - t.material.id : e.z != = t.z ? e.z - t.z : e.id - t.id
        } function ea (e, t){
            return e.groupOrder != = t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder != = t.renderOrder ? e.renderOrder - t.renderOrder : e.z != = t.z ? t.z - e.z : e.id - t.id
        } function ta () {const e =[];
            let t = 0;const n =[],r =[],i =[];
            function a (n, r, i, a, s, o){
                let l = e[t];
                return void 0 == = l ? (l = {id : n.id, object:n, geometry:r, material:i, groupOrder:a, renderOrder:
                n.renderOrder, z:s, group:o},e[t] = l):
                (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = o),
                t++, l
            } return {opaque:n, transmissive:r, transparent:i, init:function() {
                t = 0, n.length = 0, r.length = 0, i.length = 0
            },push:
            function(e, t, s, o, l, c) {const u = a(e, t, s, o, l, c);
                s.transmission > 0 ? r.push(u) : !0 == = s.transparent ? i.push(u) : n.push(u)
            },unshift:
            function(e, t, s, o, l, c) {const u = a(e, t, s, o, l, c);
                s.transmission > 0 ? r.unshift(u) : !0 == = s.transparent ? i.unshift(u) : n.unshift(u)
            },finish:
            function() {
                for (let n = t, r = e.length; n < r; n++) {const t = e[n];
                    if (null == = t.id) break;
                    t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null
                }
            },sort:
            function(e, t) {
                n.length > 1 && n.sort(e || Qi), r.length > 1 && r.sort(t || ea), i.length > 1 && i.sort(t || ea)
            }}} function na () {
            let e = new WeakMap; return {get:function(t, n) {const r = e.get(t);
                let i;
                return void 0 == = r ? (i = new ta, e.set(t,[i])):n >= r.length ? (i = new ta, r.push(i)):i = r[n], i
            },dispose:
            function() {
                e = new WeakMap
            }}} function ra () {const e = {};
            return {get:function(t) {
                if ( void 0 != = e[t.id])return e[t.id];
                let n;
                switch (t.type) {
                    case "DirectionalLight":
                        n = {direction:new Re, color:new _e};
                        break;
                    case "SpotLight":
                        n = {position:new Re, direction:new Re, color:new _e, distance:0, coneCos:0, penumbraCos:0, decay:0};
                        break;
                    case "PointLight":
                        n = {position:new Re, color:new _e, distance:0, decay:0};
                        break;
                    case "HemisphereLight":
                        n = {direction:new Re, skyColor:new _e, groundColor:new _e};
                        break;
                    case "RectAreaLight":
                        n = {color:new _e, position:new Re, halfWidth:new Re, halfHeight:new Re}} return e[t.id] = n,n
            }}} let ia = 0;
        function aa (e, t){
            return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0)
        } function sa (e, t){const n = new ra, r = function() {const e = {};
            return {get:function(t) {
                if ( void 0 != = e[t.id])return e[t.id];
                let n;
                switch (t.type) {
                    case "DirectionalLight":
                    case "SpotLight":
                        n = {shadowBias:0, shadowNormalBias:0, shadowRadius:1, shadowMapSize:new ae};
                        break;
                    case "PointLight":
                        n = {shadowBias:0, shadowNormalBias:0, shadowRadius:1, shadowMapSize:new ae, shadowCameraNear:1, shadowCameraFar:1e3}}
                return e[t.id] = n,n
            }}} (), i = {version:0, hash:{
            directionalLength:
            -1, pointLength:-1, spotLength:-1, rectAreaLength:-1, hemiLength:-1, numDirectionalShadows:
            -1, numPointShadows:-1, numSpotShadows:-1, numSpotMaps:-1
        },ambient:[0, 0, 0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],
            directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],
            rectArea:[],rectAreaLTC1:
            null, rectAreaLTC2:null, point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],
            numSpotLightShadowsWithMaps:
            0};
            for (let l = 0; l < 9; l++) i.probe.push(new Re);const a = new Re, s = new lt, o = new lt; return {setup:
            function(a, s) {
                let o = 0, l = 0, c = 0;
                for (let e = 0; e < 9; e++) i.probe[e].set(0, 0, 0);
                let u = 0, h = 0, d = 0, f = 0, p = 0, m = 0, g = 0, v = 0, y = 0, _ = 0;
                a.sort(aa);const x = !0 != = s ? Math.PI : 1; for (let e = 0, t = a.length; e < t; e++) {const
                    t = a[e], s = t.color, b = t.intensity, w = t.distance, S = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
                    if (t.isAmbientLight) o += s.r * b * x, l += s.g * b * x, c += s.b * b * x;
                    else if (t.isLightProbe)
                        for (let e = 0; e < 9; e++) i.probe[e].addScaledVector(t.sh.coefficients[e], b);
                    else if (t.isDirectionalLight) {const e = n.get(t);
                        if (e.color.copy(t.color).multiplyScalar(t.intensity * x),t.castShadow)
                        {const e = t.shadow, n = r.get(t);
                            n.shadowBias = e.bias, n.shadowNormalBias = e.normalBias, n.shadowRadius = e.radius, n.shadowMapSize = e.mapSize, i.directionalShadow[u] = n, i.directionalShadowMap[u] = S, i.directionalShadowMatrix[u] = t.shadow.matrix, m++
                        } i.directional[u] = e, u++
                    } else if (t.isSpotLight) {const e = n.get(t);
                        e.position.setFromMatrixPosition(t.matrixWorld), e.color.copy(s).multiplyScalar(b * x), e.distance = w, e.coneCos = Math.cos(t.angle), e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)), e.decay = t.decay, i.spot[d] = e;const
                        a = t.shadow;
                        if (t.map && (i.spotLightMap[y] = t.map,y++, a.updateMatrices(t), t.castShadow && _++),
                        i.spotLightMatrix[d] = a.matrix, t.castShadow){const e = r.get(t);
                            e.shadowBias = a.bias, e.shadowNormalBias = a.normalBias, e.shadowRadius = a.radius, e.shadowMapSize = a.mapSize, i.spotShadow[d] = e, i.spotShadowMap[d] = S, v++
                        } d++
                    } else if (t.isRectAreaLight) {const e = n.get(t);
                        e.color.copy(s).multiplyScalar(b), e.halfWidth.set(.5 * t.width, 0, 0), e.halfHeight.set(0, .5 * t.height, 0), i.rectArea[f] = e, f++
                    } else if (t.isPointLight) {const e = n.get(t);
                        if (e.color.copy(t.color).multiplyScalar(t.intensity * x),
                        e.distance = t.distance, e.decay = t.decay, t.castShadow){const e = t.shadow, n = r.get(t);
                            n.shadowBias = e.bias, n.shadowNormalBias = e.normalBias, n.shadowRadius = e.radius, n.shadowMapSize = e.mapSize, n.shadowCameraNear = e.camera.near, n.shadowCameraFar = e.camera.far, i.pointShadow[h] = n, i.pointShadowMap[h] = S, i.pointShadowMatrix[h] = t.shadow.matrix, g++
                        } i.point[h] = e, h++
                    } else if (t.isHemisphereLight) {const e = n.get(t);
                        e.skyColor.copy(t.color).multiplyScalar(b * x), e.groundColor.copy(t.groundColor).multiplyScalar(b * x), i.hemi[p] = e, p++
                    }
                }
                f > 0 && (t.isWebGL2 || !0 == = e.has("OES_texture_float_linear") ? (i.rectAreaLTC1 = Zn.LTC_FLOAT_1, i.rectAreaLTC2 = Zn.LTC_FLOAT_2):
                !0 == = e.has("OES_texture_half_float_linear") ? (i.rectAreaLTC1 = Zn.LTC_HALF_1, i.rectAreaLTC2 = Zn.LTC_HALF_2):
                console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
                i.ambient[0] = o, i.ambient[1] = l, i.ambient[2] = c;const b = i.hash;
                b.directionalLength == = u && b.pointLength == = h && b.spotLength == = d && b.rectAreaLength == = f && b.hemiLength == = p && b.numDirectionalShadows == = m && b.numPointShadows == = g && b.numSpotShadows == = v && b.numSpotMaps == = y || (i.directional.length = u, i.spot.length = d, i.rectArea.length = f, i.point.length = h, i.hemi.length = p, i.directionalShadow.length = m, i.directionalShadowMap.length = m, i.pointShadow.length = g, i.pointShadowMap.length = g, i.spotShadow.length = v, i.spotShadowMap.length = v, i.directionalShadowMatrix.length = m, i.pointShadowMatrix.length = g, i.spotLightMatrix.length = v + y - _, i.spotLightMap.length = y, i.numSpotLightShadowsWithMaps = _, b.directionalLength = u, b.pointLength = h, b.spotLength = d, b.rectAreaLength = f, b.hemiLength = p, b.numDirectionalShadows = m, b.numPointShadows = g, b.numSpotShadows = v, b.numSpotMaps = y, i.version = ia++)},
            setupView:
            function(e, t) {
                let n = 0, r = 0, l = 0, c = 0, u = 0;const h = t.matrixWorldInverse;
                for (let d = 0, f = e.length; d < f; d++) {const t = e[d];
                    if (t.isDirectionalLight) {const e = i.directional[n];
                        e.direction.setFromMatrixPosition(t.matrixWorld), a.setFromMatrixPosition(t.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(h), n++
                    } else if (t.isSpotLight) {const e = i.spot[l];
                        e.position.setFromMatrixPosition(t.matrixWorld), e.position.applyMatrix4(h), e.direction.setFromMatrixPosition(t.matrixWorld), a.setFromMatrixPosition(t.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(h), l++
                    } else if (t.isRectAreaLight) {const e = i.rectArea[c];
                        e.position.setFromMatrixPosition(t.matrixWorld), e.position.applyMatrix4(h), o.identity(), s.copy(t.matrixWorld), s.premultiply(h), o.extractRotation(s), e.halfWidth.set(.5 * t.width, 0, 0), e.halfHeight.set(0, .5 * t.height, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), c++
                    } else if (t.isPointLight) {const e = i.point[r];
                        e.position.setFromMatrixPosition(t.matrixWorld), e.position.applyMatrix4(h), r++
                    } else if (t.isHemisphereLight) {const e = i.hemi[u];
                        e.direction.setFromMatrixPosition(t.matrixWorld), e.direction.transformDirection(h), u++
                    }
                }
            },state:
            i}} function oa (e, t){const n = new sa(e, t), r =[],i =[];
            return {init:function() {
                r.length = 0, i.length = 0
            },state:
            {
                lightsArray:
                r, shadowsArray:i, lights:n
            },setupLights:
            function(e) {
                n.setup(r, e)
            },setupLightsView:
            function(e) {
                n.setupView(r, e)
            },pushLight:
            function(e) {
                r.push(e)
            },pushShadow:
            function(e) {
                i.push(e)
            }}} function la (e, t){
            let n = new WeakMap; return {get:function(r, i = 0) {const a = n.get(r);
                let s;
                return void 0 == = a ? (s = new oa(e, t), n.set(r,[s])):i >= a.length ? (s = new oa(e, t), a.push(s)):
                s = a[i], s
            },dispose:
            function() {
                n = new WeakMap
            }}} class ca extends qt {
            constructor(e) {
                super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
            }

            copy(e) {
                return super.copy(e),
                this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
            }
        } class ua extends qt {
            constructor(e) {
                super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.referencePosition = new Re, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e)
            }

            copy(e) {
                return super.copy(e),
                this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
            }
        } function ha (e, t, n){
            let r = new jn;const i = new ae, s = new ae, o = new Te, l = new ca({depthPacking:3201}),
            c = new ua, u = {}, h = n.maxTextureSize, d = {0:1, 1:0, 2:a},f = new Dn({defines:{
                VSM_SAMPLES:
                8
            },uniforms:
            {
                shadow_pass:
                {
                    value:
                    null
                },resolution:
            {
                value:
                new ae
            },radius:
            {
                value:
                4
            }
            },vertexShader:
            "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}", fragmentShader:
            "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),
            p = f.clone();
            p.defines.HORIZONTAL_PASS = 1;const g = new ln;
            g.setAttribute("position", new Zt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));const
            v = new Tn(g, f), y = this;
            function _ (n, r){const a = t.update(v);
                f.defines.VSM_SAMPLES != = n.blurSamples && (f.defines.VSM_SAMPLES = n.blurSamples, p.defines.VSM_SAMPLES = n.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0),
                null == = n.mapPass && (n.mapPass = new Ce(i.x, i.y)), f.uniforms.shadow_pass.value = n.map.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, f, v, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, p, v, null)
            } function x (t, n, r, i, a, s){
                let o = null;const h = !0 == = r.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
                if (o = void
                0 != = h ? h : !0 == = r.isPointLight ? c : l, e.localClippingEnabled && !0 == = n.clipShadows && Array.isArray(n.clippingPlanes) && 0 != = n.clippingPlanes.length || n.displacementMap && 0 != = n.displacementScale || n.alphaMap && n.alphaTest > 0)
                {const e = o.uuid, t = n.uuid;
                    let r = u[e];
                    void 0 == = r && (r = {}, u[e] = r);
                    let i = r[t];
                    void 0 == = i && (i = o.clone(), r[t] = i),o = i
                } return o.visible = n.visible,
                o.wireframe = n.wireframe, o.side = 3 == = s ? null != = n.shadowSide ? n.shadowSide : n.side : null != = n.shadowSide ? n.shadowSide : d[n.side], o.alphaMap = n.alphaMap, o.alphaTest = n.alphaTest, o.clipShadows = n.clipShadows, o.clippingPlanes = n.clippingPlanes, o.clipIntersection = n.clipIntersection, o.displacementMap = n.displacementMap, o.displacementScale = n.displacementScale, o.displacementBias = n.displacementBias, o.wireframeLinewidth = n.wireframeLinewidth, o.linewidth = n.linewidth, !0 == = r.isPointLight && !0 == = o.isMeshDistanceMaterial && (o.referencePosition.setFromMatrixPosition(r.matrixWorld), o.nearDistance = i, o.farDistance = a),
                o
            } function b (n, i, a, s, o){
                if (!1 == = n.visible) return;
                if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 == = o) && (!n.frustumCulled || r.intersectsObject(n))) {
                    n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);const
                    r = t.update(n), i = n.material;
                    if (Array.isArray(i)) {const t = r.groups;
                        for (let l = 0, c = t.length; l < c; l++) {const c = t[l], u = i[c.materialIndex];
                            if (u && u.visible) {const t = x(n, u, s, a.near, a.far, o);
                                e.renderBufferDirect(a, null, r, t, n, c)
                            }
                        }
                    } else if (i.visible) {const t = x(n, i, s, a.near, a.far, o);
                        e.renderBufferDirect(a, null, r, t, n, null)
                    }
                }const l = n.children;
                for (let e = 0, t = l.length; e < t; e++) b(l[e], i, a, s, o)
            }
            this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(t, n, a)
            {
                if (!1 == = y.enabled) return; if (!1 == = y.autoUpdate && !1 == = y.needsUpdate) return;
                if (0 == = t.length) return;const
                l = e.getRenderTarget(), c = e.getActiveCubeFace(), u = e.getActiveMipmapLevel(), d = e.state;
                d.setBlending(0), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
                for (let f = 0, p = t.length; f < p; f++) {const l = t[f], c = l.shadow;
                    if ( void 0 == = c){
                        console.warn("THREE.WebGLShadowMap:", l, "has no shadow.");
                        continue
                    } if (!1 == = c.autoUpdate && !1 == = c.needsUpdate) continue; i.copy(c.mapSize);const
                    u = c.getFrameExtents();
                    if (i.multiply(u),
                    s.copy(c.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / u.x), i.x = s.x * u.x, c.mapSize.x = s.x),
                    i.y > h && (s.y = Math.floor(h / u.y), i.y = s.y * u.y, c.mapSize.y = s.y)),null == = c.map)
                    {const e = 3 != = this.type ? {minFilter : m, magFilter:m}:{
                    }
                        ;
                        c.map = new Ce(i.x, i.y, e), c.map.texture.name = l.name + ".shadowMap", c.camera.updateProjectionMatrix()
                    } e.setRenderTarget(c.map), e.clear();const p = c.getViewportCount();
                    for (let e = 0; e < p; e++) {const t = c.getViewport(e);
                        o.set(s.x * t.x, s.y * t.y, s.x * t.z, s.y * t.w), d.viewport(o), c.updateMatrices(l, e), r = c.getFrustum(), b(n, a, c.camera, l, this.type)
                    } !0 != = c.isPointLightShadow && 3 == = this.type && _(c, a), c.needsUpdate = !1
                } y.needsUpdate = !1, e.setRenderTarget(l, c, u)
            }
        } function da (e, t, n){const r = n.isWebGL2;const i = new function() {
            let t = !1;const n=new Te;
            let r = null;const i=new

            Te(0,0,0,0);return

            {
                setMask:
                function(n) {
                r == = n || t || (e.colorMask(n, n, n, n), r = n)},setLocked:
            function(e) {
                t = e
            },setClear:
            function(t, r, a, s, o) {
                !0 == = o && (t *= s, r *= s, a *= s),
                n.set(t, r, a, s), !1 == = i.equals(n) && (e.clearColor(t, r, a, s), i.copy(n))},reset:
            function() {
                t = !1, r = null, i.set(-1, 0, 0, 0)
            }
            }
        }, o = new function() {
            let t = !1, n = null, r = null, i = null;return

            {
                setTest:
                function(e) {
                e ? H(2929) : W(2929)
            },setMask:
            function(r) {
                n == = r || t || (e.depthMask(r), n = r)},setFunc:
            function(t) {
                if (r != = t) {
                    if (t) switch (t) {
                        case 0:
                            e.depthFunc(512);
                            break;
                        case 1:
                            e.depthFunc(519);
                            break;
                        case 2:
                            e.depthFunc(513);
                            break;
                        case 3:
                            e.depthFunc(515);
                            break;
                        case 4:
                            e.depthFunc(514);
                            break;
                        case 5:
                            e.depthFunc(518);
                            break;
                        case 6:
                            e.depthFunc(516);
                            break;
                        case 7:
                            e.depthFunc(517);
                            break;
                        default:
                            e.depthFunc(515)
                    }
                    else e.depthFunc(515); r = t
                }
            },setLocked:
            function(e) {
                t = e
            },setClear:
            function(t) {
                i != = t && (e.clearDepth(t), i = t)},reset:
            function() {
                t = !1, n = null, r = null, i = null
            }
            }
        }, l = new function() {
            let t = !1, n = null, r = null, i = null, a = null, s = null, o = null, l = null, c = null;return

            {
                setTest:
                function(e) {
                t || (e ? H(2960) : W(2960))
            },setMask:
            function(r) {
                n == = r || t || (e.stencilMask(r), n = r)},setFunc:
            function(t, n, s) {
                r == = t && i == = n && a == = s || (e.stencilFunc(t, n, s), r = t, i = n, a = s)},setOp:
            function(t, n, r) {
                s == = t && o == = n && l == = r || (e.stencilOp(t, n, r), s = t, o = n, l = r)},setLocked:
            function(e) {
                t = e
            },setClear:
            function(t) {
                c != = t && (e.clearStencil(t), c = t)},reset:
            function() {
                t = !1, n = null, r = null, i = null, a = null, s = null, o = null, l = null, c = null
            }
            }
        }, c = new WeakMap, u = new WeakMap; let h = {}, d = {}, f = new WeakMap, p =[],
            m = null, g = !1, v = null, y = null, _ = null, x = null, b = null, w = null, S = null, M = !1, E = null, T = null, C = null, A = null, L = null;const
            P = e.getParameter(35661);
            let R = !1, D = 0;const k = e.getParameter(7938);
            -1 != = k.indexOf("WebGL") ? (D = parseFloat( / ^ WebGL(\d) /.exec(k)[1]),R = D >= 1):
            -1 != = k.indexOf("OpenGL ES") && (D = parseFloat( / ^ OpenGL ES(\d) /.exec(k)[1]),R = D >= 2);
            let I = null, N = {};const
            O = e.getParameter(3088), z = e.getParameter(2978), U = (new Te).fromArray(O), F = (new Te).fromArray(z);
            function B (t, n, r){const i = new Uint8Array(4), a = e.createTexture();
                e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
                for (let s = 0; s < r; s++) e.texImage2D(n + s, 0, 6408, 1, 1, 0, 6408, 5121, i);
                return a
            }const V = {};
            function H (t) {!0 != = h[t] && (e.enable(t), h[t] = !0)}function W
            (t) {!1 != = h[t] && (e.disable(t), h[t] = !1)}
            V[3553] = B(3553, 3553, 1), V[34067] = B(34067, 34069, 6), i.setClear(0, 0, 0, 1), o.setClear(1), l.setClear(0), H(2929), o.setFunc(3), X(!1), Y(1), H(2884), q(0);const
            G = {[s]:32774, 101:32778, 102:32779};
            if (r) G[103] = 32775, G[104] = 32776;
            else {const e = t.get("EXT_blend_minmax");
                null != = e && (G[103] = e.MIN_EXT, G[104] = e.MAX_EXT)}const j = {200:0, 201:1, 202:768, 204:770, 210:
            776, 208:774, 206:772, 203:769, 205:771, 209:775, 207:773};
            function q (t, n, r, i, a, o, l, c){
                if (0 != = t) {
                    if (!1 == = g && (H(3042),g = !0),5 == = t)
                    a = a || n, o = o || r, l = l || i, n == = y && a == = b || (e.blendEquationSeparate(G[n], G[a]), y = n, b = a),
                    r == = _ && i == = x && o == = w && l == = S || (e.blendFuncSeparate(j[r], j[i], j[o], j[l]), _ = r, x = i, w = o, S = l),
                    v = t, M = null;else if (t != = v || c != = M) {
                        if (y == = s && b == = s || (e.blendEquation(32774),y = s, b = s),c)switch (t) {
                            case 1:
                                e.blendFuncSeparate(1, 771, 1, 771);
                                break;
                            case 2:
                                e.blendFunc(1, 1);
                                break;
                            case 3:
                                e.blendFuncSeparate(0, 769, 0, 1);
                                break;
                            case 4:
                                e.blendFuncSeparate(0, 768, 0, 770);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", t)
                        }else switch (t) {
                            case 1:
                                e.blendFuncSeparate(770, 771, 1, 771);
                                break;
                            case 2:
                                e.blendFunc(770, 1);
                                break;
                            case 3:
                                e.blendFuncSeparate(0, 769, 0, 1);
                                break;
                            case 4:
                                e.blendFunc(0, 768);
                                break;
                            default:
                                console.error("THREE.WebGLState: Invalid blending: ", t)
                        } _ = null, x = null, w = null, S = null, v = t, M = c
                    }
                } else !0 == = g && (W(3042), g = !1)} function X
            (t) {E != = t && (t ? e.frontFace(2304) : e.frontFace(2305), E = t)}function Y
            (t) {0 != = t ? (H(2884), t != = T && (1 == = t ? e.cullFace(1029) : 2 == = t ? e.cullFace(1028) : e.cullFace(1032))):
            W(2884), T = t}function K (t, n, r){
                t ? (H(32823), A == = n && L == = r || (e.polygonOffset(n, r), A = n, L = r)):W(32823)
            } function Z (t) { void 0 == = t && (t = 33984 + P - 1), I != = t && (e.activeTexture(t), I = t)}
            return {buffers:{
                color:
                i, depth:o, stencil:l
            },enable:
            H, disable:W, bindFramebuffer:function(t, n) {
                return d[t] != = n && (e.bindFramebuffer(t, n),
                d[t] = n, r && (36009 == = t && (d[36160] = n), 36160 == = t && (d[36009] = n)),!0)},drawBuffers:
            function(r, i) {
                let a = p, s = !1;
                if (r) if (a = f.get(i),void 0 == = a && (a =[],f.set(i, a)),r.isWebGLMultipleRenderTargets)
                {const e = r.texture;
                    if (a.length != = e.length || 36064 != = a[0]) {
                        for (let t = 0, n = e.length; t < n; t++) a[t] = 36064 + t;
                        a.length = e.length, s = !0
                    }
                }else 36064 != = a[0] && (a[0] = 36064, s = !0);else 1029 != = a[0] && (a[0] = 1029, s = !0);
                s && (n.isWebGL2 ? e.drawBuffers(a) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a))
            },useProgram:
            function(t) {
                return m != = t && (e.useProgram(t),m = t, !0)},setBlending:
            q, setMaterial:function(e, t) {
                e.side == = a ? W(2884) : H(2884); let n = 1 == = e.side;
                t && (n = !n), X(n), 1 == = e.blending && !1 == = e.transparent ? q(0) : q(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), o.setFunc(e.depthFunc), o.setTest(e.depthTest), o.setMask(e.depthWrite), i.setMask(e.colorWrite);const
                r = e.stencilWrite;
                l.setTest(r), r && (l.setMask(e.stencilWriteMask), l.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), l.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
                K(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits), !0 == = e.alphaToCoverage ? H(32926) : W(32926)
            },setFlipSided:
            X, setCullFace:Y, setLineWidth:function(t) {
                t != = C && (R && e.lineWidth(t), C = t)},setPolygonOffset:
            K, setScissorTest:function(e) {
                e ? H(3089) : W(3089)
            },activeTexture:
            Z, bindTexture:function(t, n) {
                null == = I && Z(); let r = N[I];
                void 0 == = r && (r = {type:void 0, texture:void 0},N[I] = r),
                r.type == = t && r.texture == = n || (e.bindTexture(t, n || V[t]), r.type = t, r.texture = n)},
            unbindTexture:
            function() {const t = N[I];
                void 0 != = t && void 0 != = t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void
                0)},compressedTexImage2D:
            function() {
                try {
                    e.compressedTexImage2D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },texImage2D:
            function() {
                try {
                    e.texImage2D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },texImage3D:
            function() {
                try {
                    e.texImage3D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },updateUBOMapping:
            function(t, n) {
                let r = u.get(n);
                void 0 == = r && (r = new WeakMap, u.set(n, r));
                let i = r.get(t);
                void 0 == = i && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i))},uniformBlockBinding:
            function(t, n) {const r = u.get(n).get(t);
                c.get(t) != = r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), c.set(t, r))},texStorage2D:
            function() {
                try {
                    e.texStorage2D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },texStorage3D:
            function() {
                try {
                    e.texStorage3D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },texSubImage2D:
            function() {
                try {
                    e.texSubImage2D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },texSubImage3D:
            function() {
                try {
                    e.texSubImage3D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },compressedTexSubImage2D:
            function() {
                try {
                    e.compressedTexSubImage2D.apply(e, arguments)
                } catch (t) {
                    console.error("THREE.WebGLState:", t)
                }
            },scissor:
            function(t) {
                !1 == = U.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), U.copy(t))},viewport:
            function(t) {
                !1 == = F.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), F.copy(t))},reset:
            function() {
                e.disable(3042), e.disable(2884), e.disable(2929), e.disable(32823), e.disable(3089), e.disable(2960), e.disable(32926), e.blendEquation(32774), e.blendFunc(1, 0), e.blendFuncSeparate(1, 0, 1, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(513), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(519, 0, 4294967295), e.stencilOp(7680, 7680, 7680), e.clearStencil(0), e.cullFace(1029), e.frontFace(2305), e.polygonOffset(0, 0), e.activeTexture(33984), e.bindFramebuffer(36160, null), !0 == = r && (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)),
                e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), h = {}, I = null, N = {}, d = {}, f = new WeakMap, p =[],
                m = null, g = !1, v = null, y = null, _ = null, x = null, b = null, w = null, S = null, M = !1, E = null, T = null, C = null, A = null, L = null, U.set(0, 0, e.canvas.width, e.canvas.height), F.set(0, 0, e.canvas.width, e.canvas.height), i.reset(), o.reset(), l.reset()
            }}} function fa (e, t, n, r, i, a, s){const
            o = i.isWebGL2, l = i.maxTextures, c = i.maxCubemapSize, u = i.maxTextureSize, h = i.maxSamples, A = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, L =/
            OculusBrowser / g.test(navigator.userAgent), P = new WeakMap; let R;const D = new WeakMap; let k = !1;
            try {
                k = "undefined" != = typeof OffscreenCanvas && null != = new OffscreenCanvas(1, 1).getContext("2d")
            } catch (ue) {
            } function I (e, t){
                return k ? new OffscreenCanvas(e, t) : le("canvas")
            } function N (e, t, n, r){
                let i = 1;
                if ((e.width > r || e.height > r) && (i = r / Math.max(e.width, e.height)),i < 1 || !0 == = t){
                    if ("undefined" != = typeof
                    HTMLImageElement && e instanceof HTMLImageElement || "undefined" != = typeof
                    HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != = typeof
                    ImageBitmap && e instanceof ImageBitmap)
                    {const r = t ? ne : Math.floor, a = r(i * e.width), s = r(i * e.height);
                        void 0 == = R && (R = I(a, s));const o = n ? I(a, s) : R;
                        o.width = a, o.height = s;
                        return o.getContext("2d").drawImage(e, 0, 0, a, s),
                        console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + a + "x" + s + ")."), o
                    } return "data" in e&&
                    console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ")."), e
                } return e
            } function O (e) { return te(e.width) && te(e.height)}function z (e, t){
                return e.generateMipmaps && t && e.minFilter != = m && e.minFilter != = y
            } function B (t) {e.generateMipmap(t)} function V (n, r, i, a, s = !1){
                if (!1 == = o) return r; if (null != = n) {
                    if ( void 0 != = e[n])return e[n];
                    console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
                } let l = r;
                return 6403 == = r && (5126 == = i && (l = 33326),5131 == = i && (l = 33325), 5121 == = i && (l = 33321)),
                33319 == = r && (5126 == = i && (l = 33328), 5131 == = i && (l = 33327), 5121 == = i && (l = 33323)),
                6408 == = r && (5126 == = i && (l = 34836), 5131 == = i && (l = 34842), 5121 == = i && (l = a == = F && !1 == = s ? 35907 : 32856), 32819 == = i && (l = 32854), 32820 == = i && (l = 32855)),
                33325 != = l && 33326 != = l && 33327 != = l && 33328 != = l && 34842 != = l && 34836 != = l || t.get("EXT_color_buffer_float"), l
            } function H (e, t, n){
                return !0 == = z(e, n) || e.isFramebufferTexture && e.minFilter != = m && e.minFilter != = y ? Math.log2(Math.max(t.width, t.height)) + 1 :
                void
                0 != = e.mipmaps && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1
            } function W (e) { return e == = m || e == = g || e == = v ? 9728 : 9729}function G (e) {const t = e.target;
            t.removeEventListener("dispose", G), function(e) {const t = r.get(e);
                if ( void 0 == = t.__webglInit)return;const n = e.source, i = D.get(n);
                if (i) {const r = i[t.__cacheKey];
                    r.usedTimes--, 0 == = r.usedTimes && X(e), 0 == = Object.keys(i).length && D.delete(n)
                } r.remove(e)
            } (t), t.isVideoTexture && P.delete(t)}function j (t) {const n = t.target;
            n.removeEventListener("dispose", j), function(t) {const n = t.texture, i = r.get(t), a = r.get(n);
                void 0 != = a.__webglTexture && (e.deleteTexture(a.__webglTexture), s.memory.textures--);
                t.depthTexture && t.depthTexture.dispose();
                if (t.isWebGLCubeRenderTarget) for (let r = 0; r < 6; r++)
                    e.deleteFramebuffer(i.__webglFramebuffer[r]), i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer[r]);
                else {
                    if (e.deleteFramebuffer(i.__webglFramebuffer),
                    i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer), i.__webglMultisampledFramebuffer && e.deleteFramebuffer(i.__webglMultisampledFramebuffer), i.__webglColorRenderbuffer)
                    for (let t = 0; t < i.__webglColorRenderbuffer.length; t++)
                        i.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(i.__webglColorRenderbuffer[t]);
                    i.__webglDepthRenderbuffer && e.deleteRenderbuffer(i.__webglDepthRenderbuffer)
                } if (t.isWebGLMultipleRenderTargets) for (let o = 0, l = n.length; o < l; o++) {const t = r.get(n[o]);
                    t.__webglTexture && (e.deleteTexture(t.__webglTexture), s.memory.textures--),r.remove(n[o])
                } r.remove(n), r.remove(t)
            } (n)}function X (t) {const n = r.get(t);
            e.deleteTexture(n.__webglTexture);const i = t.source;
            delete D.get(i)[n.__cacheKey], s.memory.textures--}let Y = 0;
            function K (e, t){const i = r.get(e);
                if (e.isVideoTexture && function(e) {const t = s.render.frame;
                    P.get(e) != = t && (P.set(e, t), e.update())}
                (e), !1 == = e.isRenderTargetTexture && e.version > 0 && i.__version != = e.version){const n = e.image;
                    if (null == = n)
                        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                    else {
                        if (!1 != = n.complete) return void ee (i, e, t);
                        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
                    }
                } n.activeTexture(33984 + t), n.bindTexture(3553, i.__webglTexture)
            }const Z = {[d]:10497,[f]:33071,[p]:33648},J = {[m]:9728,[g]:9984,[v]:9986,[y]:9729, 1007:9985,[_]:9987};
            function $ (n, a, s){
                if (s ? (e.texParameteri(n, 10242, Z[a.wrapS]),
                e.texParameteri(n, 10243, Z[a.wrapT]), 32879 != = n && 35866 != = n || e.texParameteri(n, 32882, Z[a.wrapR]), e.texParameteri(n, 10240, J[a.magFilter]), e.texParameteri(n, 10241, J[a.minFilter])):
                (e.texParameteri(n, 10242, 33071), e.texParameteri(n, 10243, 33071), 32879 != = n && 35866 != = n || e.texParameteri(n, 32882, 33071), a.wrapS == = f && a.wrapT == = f || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(n, 10240, W(a.magFilter)), e.texParameteri(n, 10241, W(a.minFilter)), a.minFilter != = m && a.minFilter != = y && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),
                !0 == = t.has("EXT_texture_filter_anisotropic")){const s = t.get("EXT_texture_filter_anisotropic");
                    if (a.type == = w && !1 == = t.has("OES_texture_float_linear")) return;
                    if (!1 == = o && a.type == = S && !1 == = t.has("OES_texture_half_float_linear")) return;
                    (a.anisotropy > 1 || r.get(a).__currentAnisotropy) && (e.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy)}
            } function Q (t, n){
                let r = !1;
                void 0 == = t.__webglInit && (t.__webglInit = !0, n.addEventListener("dispose", G));const i = n.source;
                let a = D.get(i);
                void 0 == = a && (a = {}, D.set(i, a));const o = function(e) {const t =[];
                    return t.push(e.wrapS),
                    t.push(e.wrapT), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.encoding), t.join()
                } (n);
                if (o != = t.__cacheKey) {
                    void 0 == = a[o] && (a[o] = {texture:e.createTexture(), usedTimes:0},s.memory.textures++, r = !0),
                    a[o].usedTimes++;const i = a[t.__cacheKey];
                    void 0 != = i && (a[t.__cacheKey].usedTimes--, 0 == = i.usedTimes && X(n)),
                    t.__cacheKey = o, t.__webglTexture = a[o].texture
                } return r
            } function ee (t, r, i){
                let s = 3553;
                r.isDataArrayTexture && (s = 35866), r.isData3DTexture && (s = 32879);const l = Q(t, r), c = r.source;
                if (n.activeTexture(33984 + i),
                n.bindTexture(s, t.__webglTexture), c.version != = c.__currentVersion || !0 == = l){
                    e.pixelStorei(37440, r.flipY), e.pixelStorei(37441, r.premultiplyAlpha), e.pixelStorei(3317, r.unpackAlignment), e.pixelStorei(37443, 0);const
                    t = function(e) {
                        return !o && (e.wrapS != = f || e.wrapT != = f || e.minFilter != = m && e.minFilter != = y)
                    } (r) && !1 == = O(r.image); let i = N(r.image, t, !1, u);
                    i = ce(r, i);const h = O(i) || o, d = a.convert(r.format, r.encoding);
                    let p, g = a.convert(r.type), v = V(r.internalFormat, d, g, r.encoding, r.isVideoTexture);
                    $(s, r, h);const _ = r.mipmaps, x = o && !0 != = r.isVideoTexture, S = void
                    0 == = c.__currentVersion || !0 == = l, A = H(r, i, h); if (r.isDepthTexture)
                        v = 6402, o ? v = r.type == = w ? 36012 : r.type == = b ? 33190 : r.type == = M ? 35056 : 33189 : r.type == = w && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), r.format == = T && 6402 == = v && 1012 != = r.type && r.type != = b && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = b, g = a.convert(r.type)),
                    r.format == = C && 6402 == = v && (v = 34041, r.type != = M && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = M, g = a.convert(r.type))),
                    S && (x ? n.texStorage2D(3553, 1, v, i.width, i.height) : n.texImage2D(3553, 0, v, i.width, i.height, 0, d, g, null));else
                    if (r.isDataTexture) if (_.length > 0 && h) {
                        x && S && n.texStorage2D(3553, A, v, _[0].width, _[0].height);
                        for (let e = 0, t = _.length; e < t; e++)
                            p = _[e], x ? n.texSubImage2D(3553, e, 0, 0, p.width, p.height, d, g, p.data) : n.texImage2D(3553, e, v, p.width, p.height, 0, d, g, p.data);
                        r.generateMipmaps = !1
                    } else
                        x ? (S && n.texStorage2D(3553, A, v, i.width, i.height), n.texSubImage2D(3553, 0, 0, 0, i.width, i.height, d, g, i.data)):
                    n.texImage2D(3553, 0, v, i.width, i.height, 0, d, g, i.data);else if (r.isCompressedTexture) {
                        x && S && n.texStorage2D(3553, A, v, _[0].width, _[0].height);
                        for (let e = 0, t = _.length; e < t; e++)
                            p = _[e], r.format != = E ? null != = d ? x ? n.compressedTexSubImage2D(3553, e, 0, 0, p.width, p.height, d, p.data) : n.compressedTexImage2D(3553, e, v, p.width, p.height, 0, p.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : x ? n.texSubImage2D(3553, e, 0, 0, p.width, p.height, d, g, p.data) : n.texImage2D(3553, e, v, p.width, p.height, 0, d, g, p.data)
                    } else if (r.isDataArrayTexture)
                        x ? (S && n.texStorage3D(35866, A, v, i.width, i.height, i.depth), n.texSubImage3D(35866, 0, 0, 0, 0, i.width, i.height, i.depth, d, g, i.data)):
                    n.texImage3D(35866, 0, v, i.width, i.height, i.depth, 0, d, g, i.data);else if (r.isData3DTexture)
                        x ? (S && n.texStorage3D(32879, A, v, i.width, i.height, i.depth), n.texSubImage3D(32879, 0, 0, 0, 0, i.width, i.height, i.depth, d, g, i.data)):
                    n.texImage3D(32879, 0, v, i.width, i.height, i.depth, 0, d, g, i.data);else
                    if (r.isFramebufferTexture) {
                        if (S) if (x) n.texStorage2D(3553, A, v, i.width, i.height);
                        else {
                            let e = i.width, t = i.height;
                            for (let r = 0; r < A; r++) n.texImage2D(3553, r, v, e, t, 0, d, g, null), e >>= 1, t >>= 1
                        }
                    } else if (_.length > 0 && h) {
                        x && S && n.texStorage2D(3553, A, v, _[0].width, _[0].height);
                        for (let e = 0, t = _.length; e < t; e++)
                            p = _[e], x ? n.texSubImage2D(3553, e, 0, 0, d, g, p) : n.texImage2D(3553, e, v, d, g, p);
                        r.generateMipmaps = !1
                    } else
                        x ? (S && n.texStorage2D(3553, A, v, i.width, i.height), n.texSubImage2D(3553, 0, 0, 0, d, g, i)):
                    n.texImage2D(3553, 0, v, d, g, i);
                    z(r, h) && B(s), c.__currentVersion = c.version, r.onUpdate && r.onUpdate(r)
                } t.__version = r.version
            } function re (t, i, s, o, l){const
                c = a.convert(s.format, s.encoding), u = a.convert(s.type), h = V(s.internalFormat, c, u, s.encoding);
                r.get(i).__hasExternalTextures || (32879 == = l || 35866 == = l ? n.texImage3D(l, 0, h, i.width, i.height, i.depth, 0, c, u, null) : n.texImage2D(l, 0, h, i.width, i.height, 0, c, u, null)), n.bindFramebuffer(36160, t), oe(i) ? A.framebufferTexture2DMultisampleEXT(36160, o, l, r.get(s).__webglTexture, 0, se(i)) : e.framebufferTexture2D(36160, o, l, r.get(s).__webglTexture, 0), n.bindFramebuffer(36160, null)
            } function ie (t, n, r){
                if (e.bindRenderbuffer(36161, t),n.depthBuffer && !n.stencilBuffer){
                    let i = 33189;
                    if (r || oe(n)) {const t = n.depthTexture;
                        t && t.isDepthTexture && (t.type == = w ? i = 36012 : t.type == = b && (i = 33190));const
                        r = se(n);
                        oe(n) ? A.renderbufferStorageMultisampleEXT(36161, r, i, n.width, n.height) : e.renderbufferStorageMultisample(36161, r, i, n.width, n.height)
                    } else e.renderbufferStorage(36161, i, n.width, n.height);
                    e.framebufferRenderbuffer(36160, 36096, 36161, t)
                }else if (n.depthBuffer && n.stencilBuffer) {const i = se(n);
                    r && !1 == = oe(n) ? e.renderbufferStorageMultisample(36161, i, 35056, n.width, n.height) : oe(n) ? A.renderbufferStorageMultisampleEXT(36161, i, 35056, n.width, n.height) : e.renderbufferStorage(36161, 34041, n.width, n.height), e.framebufferRenderbuffer(36160, 33306, 36161, t)
                } else {const t = !0 == = n.isWebGLMultipleRenderTargets ? n.texture :[n.texture];
                    for (let i = 0; i < t.length; i++) {const
                        s = t[i], o = a.convert(s.format, s.encoding), l = a.convert(s.type), c = V(s.internalFormat, o, l, s.encoding), u = se(n);
                        r && !1 == = oe(n) ? e.renderbufferStorageMultisample(36161, u, c, n.width, n.height) : oe(n) ? A.renderbufferStorageMultisampleEXT(36161, u, c, n.width, n.height) : e.renderbufferStorage(36161, c, n.width, n.height)
                    }
                } e.bindRenderbuffer(36161, null)
            } function ae (t) {const i = r.get(t), a = !0 == = t.isWebGLCubeRenderTarget;
            if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
                if (a) throw new Error("target.depthTexture not supported in Cube render targets");
                !function(t, i) {
                    if (i && i.isWebGLCubeRenderTarget)
                        throw new Error("Depth Texture with cube render targets is not supported");
                    if (n.bindFramebuffer(36160, t),!i.depthTexture || !i.depthTexture.isDepthTexture)
                    throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                    r.get(i.depthTexture).__webglTexture && i.depthTexture.image.width == = i.width && i.depthTexture.image.height == = i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0),
                    K(i.depthTexture, 0);const a = r.get(i.depthTexture).__webglTexture, s = se(i);
                    if (i.depthTexture.format == = T)
                        oe(i) ? A.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, a, 0, s) : e.framebufferTexture2D(36160, 36096, 3553, a, 0);
                    else {
                        if (i.depthTexture.format != = C) throw new Error("Unknown depthTexture format");
                        oe(i) ? A.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, a, 0, s) : e.framebufferTexture2D(36160, 33306, 3553, a, 0)
                    }
                } (i.__webglFramebuffer, t)} else if (a) {
                i.__webglDepthbuffer =[];
                for (let r = 0; r < 6; r++)
                    n.bindFramebuffer(36160, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] = e.createRenderbuffer(), ie(i.__webglDepthbuffer[r], t, !1)
            } else
                n.bindFramebuffer(36160, i.__webglFramebuffer), i.__webglDepthbuffer = e.createRenderbuffer(), ie(i.__webglDepthbuffer, t, !1);
            n.bindFramebuffer(36160, null)}function se (e) { return Math.min(h, e.samples)}function oe (e) {const
            n = r.get(e);
            return o && e.samples > 0 && !0 == = t.has("WEBGL_multisampled_render_to_texture") && !1 != = n.__useRenderToTexture}
            function ce (e, n){const r = e.encoding, i = e.format, a = e.type;
                return !0 == = e.isCompressedTexture || !0 == = e.isVideoTexture || e.format == = q || r != = U && (r == = F ? !1 == = o ? !0 == = t.has("EXT_sRGB") && i == = E ? (e.format = q,
                e.minFilter = y, e.generateMipmaps = !1):n = be.sRGBToLinear(n):
                i == = E && a == = x || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):
                console.error("THREE.WebGLTextures: Unsupported texture encoding:", r)),n
            } this.allocateTextureUnit = function() {const e = Y;
                return e >= l && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + l),
                Y += 1, e
            },this.resetTextureUnits = function() {
                Y = 0
            },this.setTexture2D = K, this.setTexture2DArray = function(e, t) {const i = r.get(e);
                e.version > 0 && i.__version != = e.version ? ee(i, e, t) : (n.activeTexture(33984 + t), n.bindTexture(35866, i.__webglTexture))},
            this.setTexture3D = function(e, t) {const i = r.get(e);
                e.version > 0 && i.__version != = e.version ? ee(i, e, t) : (n.activeTexture(33984 + t), n.bindTexture(32879, i.__webglTexture))},
            this.setTextureCube = function(t, i) {const s = r.get(t);
                t.version > 0 && s.__version != = t.version ? function(t, r, i) {
                    if (6 != = r.image.length) return;const s = Q(t, r), l = r.source;
                    if (n.activeTexture(33984 + i),
                    n.bindTexture(34067, t.__webglTexture), l.version != = l.__currentVersion || !0 == = s){
                        e.pixelStorei(37440, r.flipY), e.pixelStorei(37441, r.premultiplyAlpha), e.pixelStorei(3317, r.unpackAlignment), e.pixelStorei(37443, 0);const
                        t = r.isCompressedTexture || r.image[0].isCompressedTexture, i = r.image[0] && r.image[0].isDataTexture, u =[]
                        ;
                        for (let e = 0; e < 6; e++)
                            u[e] = t || i ? i ? r.image[e].image : r.image[e] : N(r.image[e], !1, !0, c), u[e] = ce(r, u[e]);const
                        h = u[0], d = O(h) || o, f = a.convert(r.format, r.encoding), p = a.convert(r.type), m = V(r.internalFormat, f, p, r.encoding), g = o && !0 != = r.isVideoTexture, v =
                        void 0 == = l.__currentVersion || !0 == = s; let y, _ = H(r, h, d);
                        if ($(34067, r, d),t){
                            g && v && n.texStorage2D(34067, _, m, h.width, h.height);
                            for (let e = 0; e < 6; e++) {
                                y = u[e].mipmaps;
                                for (let t = 0; t < y.length; t++) {const i = y[t];
                                    r.format != = E ? null != = f ? g ? n.compressedTexSubImage2D(34069 + e, t, 0, 0, i.width, i.height, f, i.data) : n.compressedTexImage2D(34069 + e, t, m, i.width, i.height, 0, i.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : g ? n.texSubImage2D(34069 + e, t, 0, 0, i.width, i.height, f, p, i.data) : n.texImage2D(34069 + e, t, m, i.width, i.height, 0, f, p, i.data)
                                }
                            }
                        }else{
                            y = r.mipmaps, g && v && (y.length > 0 && _++, n.texStorage2D(34067, _, m, u[0].width, u[0].height))
                            ;
                            for (let e = 0; e < 6; e++)
                                if (i) {
                                    g ? n.texSubImage2D(34069 + e, 0, 0, 0, u[e].width, u[e].height, f, p, u[e].data) : n.texImage2D(34069 + e, 0, m, u[e].width, u[e].height, 0, f, p, u[e].data);
                                    for (let t = 0; t < y.length; t++) {const r = y[t].image[e].image;
                                        g ? n.texSubImage2D(34069 + e, t + 1, 0, 0, r.width, r.height, f, p, r.data) : n.texImage2D(34069 + e, t + 1, m, r.width, r.height, 0, f, p, r.data)
                                    }
                                } else {
                                    g ? n.texSubImage2D(34069 + e, 0, 0, 0, f, p, u[e]) : n.texImage2D(34069 + e, 0, m, f, p, u[e]);
                                    for (let t = 0; t < y.length; t++) {const r = y[t];
                                        g ? n.texSubImage2D(34069 + e, t + 1, 0, 0, f, p, r.image[e]) : n.texImage2D(34069 + e, t + 1, m, f, p, r.image[e])
                                    }
                                }
                        } z(r, d) && B(34067), l.__currentVersion = l.version, r.onUpdate && r.onUpdate(r)
                    } t.__version = r.version
                } (s, t, i):(n.activeTexture(33984 + i), n.bindTexture(34067, s.__webglTexture))},
            this.rebindTextures = function(e, t, n) {const i = r.get(e);
                void 0 != = t && re(i.__webglFramebuffer, e, e.texture, 36064, 3553),void 0 != = n && ae(e)
            },this.setupRenderTarget = function(t) {const l = t.texture, c = r.get(t), u = r.get(l);
                t.addEventListener("dispose", j), !0 != = t.isWebGLMultipleRenderTargets && ( void
                0 == = u.__webglTexture && (u.__webglTexture = e.createTexture()), u.__version = l.version, s.memory.textures++)
                ;const h = !0 == = t.isWebGLCubeRenderTarget, d = !0 == = t.isWebGLMultipleRenderTargets, f = O(t) || o;
                if (h) {
                    c.__webglFramebuffer =[];
                    for (let t = 0; t < 6; t++) c.__webglFramebuffer[t] = e.createFramebuffer()
                } else {
                    if (c.__webglFramebuffer = e.createFramebuffer(),d)if (i.drawBuffers) {const n = t.texture;
                        for (let t = 0, i = n.length; t < i; t++) {const i = r.get(n[t]);
                            void 0 == = i.__webglTexture && (i.__webglTexture = e.createTexture(), s.memory.textures++)}
                    } else
                        console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
                    if (o && t.samples > 0 && !1 == = oe(t)) {const r = d ? l :[l];
                        c.__webglMultisampledFramebuffer = e.createFramebuffer(), c.__webglColorRenderbuffer =[],
                        n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
                        for (let n = 0; n < r.length; n++) {const i = r[n];
                            c.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(36161, c.__webglColorRenderbuffer[n]);const
                            s = a.convert(i.format, i.encoding), o = a.convert(i.type), l = V(i.internalFormat, s, o, i.encoding), u = se(t);
                            e.renderbufferStorageMultisample(36161, u, l, t.width, t.height), e.framebufferRenderbuffer(36160, 36064 + n, 36161, c.__webglColorRenderbuffer[n])
                        }
                        e.bindRenderbuffer(36161, null), t.depthBuffer && (c.__webglDepthRenderbuffer = e.createRenderbuffer(), ie(c.__webglDepthRenderbuffer, t, !0)),
                        n.bindFramebuffer(36160, null)
                    }
                } if (h) {
                    n.bindTexture(34067, u.__webglTexture), $(34067, l, f);
                    for (let e = 0; e < 6; e++) re(c.__webglFramebuffer[e], t, l, 36064, 34069 + e);
                    z(l, f) && B(34067), n.unbindTexture()
                } else if (d) {const e = t.texture;
                    for (let i = 0, a = e.length; i < a; i++) {const a = e[i], s = r.get(a);
                        n.bindTexture(3553, s.__webglTexture), $(3553, a, f), re(c.__webglFramebuffer, t, a, 36064 + i, 3553), z(a, f) && B(3553)
                    } n.unbindTexture()
                } else {
                    let e = 3553;
                    (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (o ? e = t.isWebGL3DRenderTarget ? 32879 : 35866 : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(e, u.__webglTexture), $(e, l, f), re(c.__webglFramebuffer, t, l, 36064, e), z(l, f) && B(e), n.unbindTexture()
                } t.depthBuffer && ae(t)
            },this.updateRenderTargetMipmap = function(e)
            {const t = O(e) || o, i = !0 == = e.isWebGLMultipleRenderTargets ? e.texture :[e.texture];
                for (let a = 0, s = i.length; a < s; a++) {const s = i[a];
                    if (z(s, t)) {const t = e.isWebGLCubeRenderTarget ? 34067 : 3553, i = r.get(s).__webglTexture;
                        n.bindTexture(t, i), B(t), n.unbindTexture()
                    }
                }
            },this.updateMultisampleRenderTarget = function(t) {
                if (o && t.samples > 0 && !1 == = oe(t)) {const i = t.isWebGLMultipleRenderTargets ? t.texture :[
                    t.texture],a = t.width, s = t.height;
                    let o = 16384;const l =[],
                    c = t.stencilBuffer ? 33306 : 36096, u = r.get(t), h = !0 == = t.isWebGLMultipleRenderTargets;
                    if (h) for (let t = 0; t < i.length; t++)
                        n.bindFramebuffer(36160, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064 + t, 36161, null), n.bindFramebuffer(36160, u.__webglFramebuffer), e.framebufferTexture2D(36009, 36064 + t, 3553, null, 0);
                    n.bindFramebuffer(36008, u.__webglMultisampledFramebuffer), n.bindFramebuffer(36009, u.__webglFramebuffer);
                    for (let n = 0; n < i.length; n++) {
                        l.push(36064 + n), t.depthBuffer && l.push(c);const d = void
                        0 != = u.__ignoreDepthValues && u.__ignoreDepthValues;
                        if (!1 == = d && (t.depthBuffer && (o |= 256),t.stencilBuffer && (o |= 1024)),
                        h && e.framebufferRenderbuffer(36008, 36064, 36161, u.__webglColorRenderbuffer[n]), !0 == = d && (e.invalidateFramebuffer(36008,[c]), e.invalidateFramebuffer(36009,[c])),
                        h){const t = r.get(i[n]).__webglTexture;
                            e.framebufferTexture2D(36009, 36064, 3553, t, 0)
                        } e.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, 9728), L && e.invalidateFramebuffer(36008, l)
                    } if (n.bindFramebuffer(36008, null),n.bindFramebuffer(36009, null), h)
                    for (let t = 0; t < i.length; t++) {
                        n.bindFramebuffer(36160, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064 + t, 36161, u.__webglColorRenderbuffer[t]);const
                        a = r.get(i[t]).__webglTexture;
                        n.bindFramebuffer(36160, u.__webglFramebuffer), e.framebufferTexture2D(36009, 36064 + t, 3553, a, 0)
                    } n.bindFramebuffer(36009, u.__webglMultisampledFramebuffer)
                }
            },this.setupDepthRenderbuffer = ae, this.setupFrameBufferTexture = re, this.useMultisampledRTT = oe
        } function pa (e, t, n){const r = n.isWebGL2;
            return {convert:function(n, i = null) {
                let a;
                if (n == = x) return 5121; if (1017 == = n) return 32819; if (1018 == = n) return 32820;
                if (1010 == = n) return 5120; if (1011 == = n) return 5122; if (1012 == = n) return 5123;
                if (1013 == = n) return 5124; if (n == = b) return 5125; if (n == = w) return 5126;
                if (n == = S) return r ? 5131 : (a = t.get("OES_texture_half_float"),
                null != = a ? a.HALF_FLOAT_OES : null);
                if (1021 == = n) return 6406; if (n == = E) return 6408; if (1024 == = n) return 6409;
                if (1025 == = n) return 6410; if (n == = T) return 6402; if (n == = C) return 34041;
                if (1028 == = n) return 6403; if (1022 == = n)
                    return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),
                6408;
                if (n == = q) return a = t.get("EXT_sRGB"),null != = a ? a.SRGB_ALPHA_EXT : null;
                if (1029 == = n) return 36244; if (1030 == = n) return 33319; if (1031 == = n) return 33320;
                if (1033 == = n) return 36249; if (n == = A || n == = L || n == = P || n == = R) if (i == = F) {
                    if (a = t.get("WEBGL_compressed_texture_s3tc_srgb"),null == = a)return null;
                    if (n == = A) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (n == = L) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (n == = P) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (n == = R) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else {
                    if (a = t.get("WEBGL_compressed_texture_s3tc"),null == = a)return null;
                    if (n == = A) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (n == = L) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (n == = P) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (n == = R) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
                } if (35840 == = n || 35841 == = n || 35842 == = n || 35843 == = n) {
                    if (a = t.get("WEBGL_compressed_texture_pvrtc"),null == = a)return null;
                    if (35840 == = n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (35841 == = n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (35842 == = n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (35843 == = n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                } if (36196 == = n) return a = t.get("WEBGL_compressed_texture_etc1"),
                null != = a ? a.COMPRESSED_RGB_ETC1_WEBGL : null; if (37492 == = n || 37496 == = n) {
                    if (a = t.get("WEBGL_compressed_texture_etc"),null == = a)return null;
                    if (37492 == = n) return i == = F ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
                    if (37496 == = n) return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC
                }
                if (37808 == = n || 37809 == = n || 37810 == = n || 37811 == = n || 37812 == = n || 37813 == = n || 37814 == = n || 37815 == = n || 37816 == = n || 37817 == = n || 37818 == = n || 37819 == = n || 37820 == = n || 37821 == = n) {
                    if (a = t.get("WEBGL_compressed_texture_astc"),null == = a)return null;
                    if (37808 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                    if (37809 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                    if (37810 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                    if (37811 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                    if (37812 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                    if (37813 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                    if (37814 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                    if (37815 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                    if (37816 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                    if (37817 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                    if (37818 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                    if (37819 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                    if (37820 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                    if (37821 == = n)
                        return i == = F ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
                } if (36492 == = n) {
                    if (a = t.get("EXT_texture_compression_bptc"),null == = a)return null;
                    if (36492 == = n)
                        return i == = F ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT
                } return n == = M ? r ? 34042 : (a = t.get("WEBGL_depth_texture"),
                null != = a ? a.UNSIGNED_INT_24_8_WEBGL : null):void 0 != = e[n] ? e[n] : null
            }}} class ma extends In {
            constructor(e=[]) {
                super(), this.isArrayCamera = !0, this.cameras = e
            }
        } class ga extends kt {
            constructor() {
                super(), this.isGroup = !0, this.type = "Group"
            }
        }const va = {type:"move"};
        class ya {
            constructor() {
                this._targetRay = null, this._grip = null, this._hand = null
            }

            getHandSpace() {
                return null == = this._hand && (this._hand = new ga,
                this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {pinching:
                !1}),this._hand
            }

            getTargetRaySpace() {
                return null == = this._targetRay && (this._targetRay = new ga,
                this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new Re, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new Re),
                this._targetRay
            }

            getGripSpace() {
                return null == = this._grip && (this._grip = new ga,
                this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new Re, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new Re),
                this._grip
            }

            dispatchEvent(e) {
                return null != = this._targetRay && this._targetRay.dispatchEvent(e),
                null != = this._grip && this._grip.dispatchEvent(e), null != = this._hand && this._hand.dispatchEvent(e), this
            }

            disconnect(e) {
                return this.dispatchEvent({type:"disconnected", data:e}),
                null != = this._targetRay && (this._targetRay.visible = !1), null != = this._grip && (this._grip.visible = !1), null != = this._hand && (this._hand.visible = !1), this
            }

            update(e, t, n) {
                let r = null, i = null, a = null;const s = this._targetRay, o = this._grip, l = this._hand;
                if (e && "visible-blurred" != = t.session.visibilityState) {
                    if (l && e.hand) {
                        a = !0;
                        for (const a of e.hand.values()){const e = t.getJointPose(a, n);
                            if ( void 0 == = l.joints[a.jointName]){const e = new ga;
                                e.matrixAutoUpdate = !1, e.visible = !1, l.joints[a.jointName] = e, l.add(e)
                            }const r = l.joints[a.jointName];
                            null != = e && (r.matrix.fromArray(e.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = e.radius),
                            r.visible = null != = e
                        }const
                        r = l.joints["index-finger-tip"], i = l.joints["thumb-tip"], s = r.position.distanceTo(i.position), o = .02, c = .005;
                        l.inputState.pinching && s > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({type:
                        "pinchend", handedness:e.handedness, target:this})):
                        !l.inputState.pinching && s <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({type:
                        "pinchstart", handedness:e.handedness, target:this}))} else
                        null != = o && e.gripSpace && (i = t.getPose(e.gripSpace, n), null != = i && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)):
                    o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)):
                    o.hasAngularVelocity = !1));
                    null != = s && (r = t.getPose(e.targetRaySpace, n), null == = r && null != = i && (r = i), null != = r && (s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), r.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(r.linearVelocity)):
                    s.hasLinearVelocity = !1, r.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(r.angularVelocity)):
                    s.hasAngularVelocity = !1, this.dispatchEvent(va)))} return null != = s && (s.visible = null != = r),
                null != = o && (o.visible = null != = i), null != = l && (l.visible = null != = a), this
            }
        } class _a extends Ee {
            constructor(e, t, n, r, i, a, s, o, l, c) {
                if ((c = void 0 != = c ? c : T)!==T && c != = C)
                throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                void 0 == = n && c == = T && (n = b),void
                0 == = n && c == = C && (n = M), super(null, r, i, a, s, o, c, n, l), this.isDepthTexture = !0, this.image = {width:
                e, height:t},this.magFilter = void 0 != = s ? s : m, this.minFilter = void
                0 != = o ? o : m, this.flipY = !1, this.generateMipmaps = !1
            }
        } class xa extends X {
            constructor(e, t) {
                super();const n = this;
                let r = null, i = 1, a = null, s = "local-floor", o = null, l = null, c = null, u = null, h = null, d = null;const
                f = t.getContextAttributes();
                let p = null, m = null;const g =[],v =[],y = new In; y.layers.enable(1), y.viewport = new Te;const
                _ = new In; _.layers.enable(2), _.viewport = new Te;const w =[y, _],S = new ma;
                S.layers.enable(1), S.layers.enable(2);
                let A = null, L = null;
                function P (e) {const t = v.indexOf(e.inputSource);
                if (-1 == = t) return;const n = g[t];
                void 0 != = n && n.dispatchEvent({type:e.type, data:e.inputSource})}function R () {
                    r.removeEventListener("select", P), r.removeEventListener("selectstart", P), r.removeEventListener("selectend", P), r.removeEventListener("squeeze", P), r.removeEventListener("squeezestart", P), r.removeEventListener("squeezeend", P), r.removeEventListener("end", R), r.removeEventListener("inputsourceschange", D);
                    for (let e = 0; e < g.length; e++) {const t = v[e];
                        null != = t && (v[e] = null, g[e].disconnect(t))}
                    A = null, L = null, e.setRenderTarget(p), h = null, u = null, c = null, r = null, m = null, z.stop(), n.isPresenting = !1, n.dispatchEvent({type:
                    "sessionend"})} function D (e) {
                for (let t = 0; t < e.removed.length; t++) {const n = e.removed[t], r = v.indexOf(n);
                    r >= 0 && (v[r] = null, g[r].dispatchEvent({type:"disconnected", data:n}))}
                for (let t = 0; t < e.added.length; t++) {const n = e.added[t];
                    let r = v.indexOf(n);
                    if (-1 == = r) {
                        for (let e = 0; e < g.length; e++) {
                            if (e >= v.length) {
                                v.push(n), r = e;
                                break
                            } if (null == = v[e]) {
                                v[e] = n, r = e;
                                break
                            }
                        } if (-1 == = r) break
                    }const i = g[r];
                    i && i.dispatchEvent({type:"connected", data:n})}}
                this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e)
                {
                    let t = g[e];
                    return void 0 == = t && (t = new ya, g[e] = t),t.getTargetRaySpace()
                },this.getControllerGrip = function(e) {
                    let t = g[e];
                    return void 0 == = t && (t = new ya, g[e] = t),t.getGripSpace()
                },this.getHand = function(e) {
                    let t = g[e];
                    return void 0 == = t && (t = new ya, g[e] = t),t.getHandSpace()
                },this.setFramebufferScaleFactor = function(e) {
                    i = e, !0 == = n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
                },this.setReferenceSpaceType = function(e) {
                    s = e, !0 == = n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
                },this.getReferenceSpace = function() {
                    return o || a
                },this.setReferenceSpace = function(e) {
                    o = e
                },this.getBaseLayer = function() {
                    return null != = u ? u : h
                },this.getBinding = function() {
                    return c
                },this.getFrame = function() {
                    return d
                },this.getSession = function() {
                    return r
                },this.setSession = async function(l) {
                    if (r = l,null != = r){
                        if (p = e.getRenderTarget(),
                        r.addEventListener("select", P), r.addEventListener("selectstart", P), r.addEventListener("selectend", P), r.addEventListener("squeeze", P), r.addEventListener("squeezestart", P), r.addEventListener("squeezeend", P), r.addEventListener("end", R), r.addEventListener("inputsourceschange", D), !0 != = f.xrCompatible && await
                        t.makeXRCompatible(),void 0 == = r.renderState.layers || !1 == = e.capabilities.isWebGL2)
                        {const n = {antialias:void 0 != = r.renderState.layers || f.antialias, alpha:f.alpha, depth:
                            f.depth, stencil:f.stencil, framebufferScaleFactor:i};
                            h = new XRWebGLLayer(r, t, n), r.updateRenderState({baseLayer:h}),
                            m = new Ce(h.framebufferWidth, h.framebufferHeight, {format:E, type:x, encoding:
                            e.outputEncoding, stencilBuffer:f.stencil})}else{
                            let n = null, a = null, s = null;
                            f.depth && (s = f.stencil ? 35056 : 33190, n = f.stencil ? C : T, a = f.stencil ? M : b);const
                            o = {colorFormat:32856, depthFormat:s, scaleFactor:i};
                            c = new XRWebGLBinding(r, t), u = c.createProjectionLayer(o), r.updateRenderState({layers:[u]}),
                            m = new Ce(u.textureWidth, u.textureHeight, {format:E, type:x, depthTexture:
                            new _a(u.textureWidth, u.textureHeight, a, void 0,void 0,void 0,void 0,void 0,void 0, n),
                            stencilBuffer:
                            f.stencil, encoding:e.outputEncoding, samples:f.antialias ? 4 : 0});
                            e.properties.get(m).__ignoreDepthValues = u.ignoreDepthValues
                        } m.isXRRenderTarget = !0, this.setFoveation(1), o = null, a = await
                        r.requestReferenceSpace(s), z.setContext(r), z.start(), n.isPresenting = !0, n.dispatchEvent({type:
                        "sessionstart"})}
                } ;const k = new Re, I = new Re; function N (e, t){
                    null == = t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert()
                } this.updateCamera = function(e) {
                    if (null == = r) return;
                    S.near = _.near = y.near = e.near, S.far = _.far = y.far = e.far, A == = S.near && L == = S.far || (r.updateRenderState({depthNear:
                    S.near, depthFar:S.far}),A = S.near, L = S.far);const t = e.parent, n = S.cameras;
                    N(S, t);
                    for (let r = 0; r < n.length; r++) N(n[r], t);
                    S.matrixWorld.decompose(S.position, S.quaternion, S.scale), e.matrix.copy(S.matrix), e.matrix.decompose(e.position, e.quaternion, e.scale);const
                    i = e.children;
                    for (let r = 0, a = i.length; r < a; r++) i[r].updateMatrixWorld(!0);
                    2 == = n.length ? function(e, t, n) {
                        k.setFromMatrixPosition(t.matrixWorld), I.setFromMatrixPosition(n.matrixWorld);const
                        r = k.distanceTo(I), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, s = i[14] / (i[10] - 1), o = i[14] / (i[10] + 1), l = (i[9] + 1) / i[5], c = (i[9] - 1) / i[5], u = (i[8] - 1) / i[0], h = (a[8] + 1) / a[0], d = s * u, f = s * h, p = r / (-u + h), m = p * -u;
                        t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(m), e.translateZ(p), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert();const
                        g = s + p, v = o + p, y = d - m, _ = f + (r - m), x = l * o / v * g, b = c * o / v * g;
                        e.projectionMatrix.makePerspective(y, _, x, b, g, v)
                    } (S, y, _):S.projectionMatrix.copy(y.projectionMatrix)
                },this.getCamera = function() {
                    return S
                },this.getFoveation = function() {
                    return null != = u ? u.fixedFoveation : null != = h ? h.fixedFoveation : void 0
                },this.setFoveation = function(e) {
                    null != = u && (u.fixedFoveation = e), null != = h && void
                    0 != = h.fixedFoveation && (h.fixedFoveation = e)
                } ;
                let O = null;const z = new qn; z.setAnimationLoop((function(t, n) {
                    if (l = n.getViewerPose(o || a),d = n, null != = l){const t = l.views;
                        null != = h && (e.setRenderTargetFramebuffer(m, h.framebuffer), e.setRenderTarget(m));
                        let n = !1;
                        t.length != = S.cameras.length && (S.cameras.length = 0, n = !0);
                        for (let r = 0; r < t.length; r++) {const i = t[r];
                            let a = null;
                            if (null != = h) a = h.getViewport(i);
                            else {const t = c.getViewSubImage(u, i);
                                a = t.viewport, 0 == = r && (e.setRenderTargetTextures(m, t.colorTexture, u.ignoreDepthValues ?
                                void 0:t.depthStencilTexture),e.setRenderTarget(m))} let s = w[r];
                            void 0 == = s && (s = new In, s.layers.enable(r), s.viewport = new Te, w[r] = s),
                            s.matrix.fromArray(i.transform.matrix), s.projectionMatrix.fromArray(i.projectionMatrix), s.viewport.set(a.x, a.y, a.width, a.height), 0 == = r && S.matrix.copy(s.matrix), !0 == = n && S.cameras.push(s)
                        }
                    } for (let e = 0; e < g.length; e++) {const t = v[e], r = g[e];
                        null != = t && void 0 != = r && r.update(t, n, o || a)
                    } O && O(t, n), d = null
                })),this.setAnimationLoop = function(e) {
                    O = e
                },this.dispose = function() {
                }
            }
        } function ba (e, t){
            function n (n, r){
                n.opacity.value = r.opacity, r.color && n.diffuse.value.copy(r.color), r.emissive && n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (n.map.value = r.map), r.alphaMap && (n.alphaMap.value = r.alphaMap), r.bumpMap && (n.bumpMap.value = r.bumpMap, n.bumpScale.value = r.bumpScale, 1 == = r.side && (n.bumpScale.value *= -1)),
                r.displacementMap && (n.displacementMap.value = r.displacementMap, n.displacementScale.value = r.displacementScale, n.displacementBias.value = r.displacementBias),
                r.emissiveMap && (n.emissiveMap.value = r.emissiveMap), r.normalMap && (n.normalMap.value = r.normalMap, n.normalScale.value.copy(r.normalScale), 1 == = r.side && n.normalScale.value.negate()),
                r.specularMap && (n.specularMap.value = r.specularMap), r.alphaTest > 0 && (n.alphaTest.value = r.alphaTest);const
                i = t.get(r).envMap;
                if (i && (n.envMap.value = i,
                n.flipEnvMap.value = i.isCubeTexture && !1 == = i.isRenderTargetTexture ? -1 : 1, n.reflectivity.value = r.reflectivity, n.ior.value = r.ior, n.refractionRatio.value = r.refractionRatio),
                r.lightMap){
                    n.lightMap.value = r.lightMap;const t = !0 != = e.physicallyCorrectLights ? Math.PI : 1;
                    n.lightMapIntensity.value = r.lightMapIntensity * t
                } let a, s;
                r.aoMap && (n.aoMap.value = r.aoMap, n.aoMapIntensity.value = r.aoMapIntensity),
                r.map ? a = r.map : r.specularMap ? a = r.specularMap : r.displacementMap ? a = r.displacementMap : r.normalMap ? a = r.normalMap : r.bumpMap ? a = r.bumpMap : r.roughnessMap ? a = r.roughnessMap : r.metalnessMap ? a = r.metalnessMap : r.alphaMap ? a = r.alphaMap : r.emissiveMap ? a = r.emissiveMap : r.clearcoatMap ? a = r.clearcoatMap : r.clearcoatNormalMap ? a = r.clearcoatNormalMap : r.clearcoatRoughnessMap ? a = r.clearcoatRoughnessMap : r.iridescenceMap ? a = r.iridescenceMap : r.iridescenceThicknessMap ? a = r.iridescenceThicknessMap : r.specularIntensityMap ? a = r.specularIntensityMap : r.specularColorMap ? a = r.specularColorMap : r.transmissionMap ? a = r.transmissionMap : r.thicknessMap ? a = r.thicknessMap : r.sheenColorMap ? a = r.sheenColorMap : r.sheenRoughnessMap && (a = r.sheenRoughnessMap),
                void
                0 != = a && (a.isWebGLRenderTarget && (a = a.texture), !0 == = a.matrixAutoUpdate && a.updateMatrix(), n.uvTransform.value.copy(a.matrix)),
                r.aoMap ? s = r.aoMap : r.lightMap && (s = r.lightMap),void
                0 != = s && (s.isWebGLRenderTarget && (s = s.texture), !0 == = s.matrixAutoUpdate && s.updateMatrix(), n.uv2Transform.value.copy(s.matrix))}
            return {refreshFogUniforms:function(e, t) {
                e.fogColor.value.copy(t.color), e.fogNear.value = t.near, e.fogFar.value = t.far, t.isFogExp2 && (e.fogDensity.value = t.density)
            },refreshMaterialUniforms:
            function(e, r, i, a, s) {
                r.isMeshBasicMaterial || r.isMeshLambertMaterial ? n(e, r) : r.isMeshToonMaterial ? (n(e, r), function(e, t)
                {
                    t.gradientMap && (e.gradientMap.value = t.gradientMap)
                } (e, r)):r.isMeshPhongMaterial ? (n(e, r), function(e, t) {
                    e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4)
                } (e, r)):r.isMeshStandardMaterial ? (n(e, r), function(e, n) {
                    e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap);
                    n.metalnessMap && (e.metalnessMap.value = n.metalnessMap);
                    t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
                } (e, r),r.isMeshPhysicalMaterial && function(e, t, n) {
                    e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap))
                    ;
                    t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap), t.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), e.clearcoatNormalMap.value = t.clearcoatNormalMap, 1 == = t.side && e.clearcoatNormalScale.value.negate()))
                    ;
                    t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap))
                    ;
                    t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = n.texture, e.transmissionSamplerSize.value.set(n.width, n.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor))
                    ;
                    e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap);
                    t.specularColorMap && (e.specularColorMap.value = t.specularColorMap)
                } (e, r, s)):r.isMeshMatcapMaterial ? (n(e, r), function(e, t) {
                    t.matcap && (e.matcap.value = t.matcap)
                } (e, r)):r.isMeshDepthMaterial ? n(e, r) : r.isMeshDistanceMaterial ? (n(e, r), function(e, t) {
                    e.referencePosition.value.copy(t.referencePosition), e.nearDistance.value = t.nearDistance, e.farDistance.value = t.farDistance
                } (e, r)):r.isMeshNormalMaterial ? n(e, r) : r.isLineBasicMaterial ? (function(e, t) {
                    e.diffuse.value.copy(t.color), e.opacity.value = t.opacity
                } (e, r),r.isLineDashedMaterial && function(e, t) {
                    e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
                } (e, r)):r.isPointsMaterial ? function(e, t, n, r) {
                    e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * n, e.scale.value = .5 * r, t.map && (e.map.value = t.map);
                    t.alphaMap && (e.alphaMap.value = t.alphaMap);
                    t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
                    let i;
                    t.map ? i = t.map : t.alphaMap && (i = t.alphaMap);
                    void
                    0 != = i && (!0 == = i.matrixAutoUpdate && i.updateMatrix(), e.uvTransform.value.copy(i.matrix))}
                (
e, r, i, a):r.isSpriteMaterial ? function(e, t) {
                    e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map);
                    t.alphaMap && (e.alphaMap.value = t.alphaMap);
                    t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
                    let n;
                    t.map ? n = t.map : t.alphaMap && (n = t.alphaMap);
                    void
                    0 != = n && (!0 == = n.matrixAutoUpdate && n.updateMatrix(), e.uvTransform.value.copy(n.matrix))}
                (e, r):r.isShadowMaterial ? (e.color.value.copy(r.color), e.opacity.value = r.opacity):
                r.isShaderMaterial && (r.uniformsNeedUpdate = !1)
            }}} function wa (e, t, n, r){
            let i = {}, a = {}, s =[];const o = n.isWebGL2 ? e.getParameter(35375) : 0;
            function l (e, t, n){const r = e.value;
                if ( void 0 == = n[t])return n[t] = "number" == = typeof r ? r : r.clone(), !0;
                if ("number" == = typeof r){
                    if (n[t] != = r) return n[t] = r,!0
                }else{const e = n[t];
                    if (!1 == = e.equals(r)) return e.copy(r),!0
                } return !1
            } function c (e) {const t = e.value, n = {boundary:0, storage:0};
            return "number" == = typeof t ? (n.boundary = 4, n.storage = 4):t.isVector2 ? (n.boundary = 8, n.storage = 8):
            t.isVector3 || t.isColor ? (n.boundary = 16, n.storage = 12):t.isVector4 ? (n.boundary = 16, n.storage = 16):
            t.isMatrix3 ? (n.boundary = 48, n.storage = 48):t.isMatrix4 ? (n.boundary = 64, n.storage = 64):
            t.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t), n}
            function u (t) {const n = t.target;
            n.removeEventListener("dispose", u);const r = s.indexOf(n.__bindingPointIndex);
            s.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id]}return {bind:function(e, t)
            {const n = t.program;
                r.uniformBlockBinding(e, n)
            },update:
            function(n, h) {
                let d = i[n.id];
                void 0 == = d && (!function(e) {const t = e.uniforms;
                    let n = 0;const r = 16;
                    let i = 0;
                    for (let a = 0, s = t.length; a < s; a++) {const e = t[a], s = c(e);
                        if (e.__data = new Float32Array(s.storage / Float32Array.BYTES_PER_ELEMENT),
                        e.__offset = n, a > 0){
                            i = n % r;const t = r - i;
                            0 != = i && t - s.boundary < 0 && (n += r - i, e.__offset = n)} n += s.storage
                    } i = n % r, i > 0 && (n += r - i);
                    e.__size = n, e.__cache = {}
                } (n), d = function(t) {const n = function() {
                    for (let e = 0; e < o; e++) if (-1 == = s.indexOf(e)) return s.push(e),e;
                    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
                    0
                } (); t.__bindingPointIndex = n;const r = e.createBuffer(), i = t.__size, a = t.usage;
                    return e.bindBuffer(35345, r),
                    e.bufferData(35345, i, a), e.bindBuffer(35345, null), e.bindBufferBase(35345, n, r), r
                } (n), i[n.id] = d, n.addEventListener("dispose", u));const f = h.program;
                r.updateUBOMapping(n, f);const p = t.render.frame;
                a[n.id] != = p && (!function(t) {const n = i[t.id], r = t.uniforms, a = t.__cache;
                    e.bindBuffer(35345, n);
                    for (let i = 0, s = r.length; i < s; i++) {const t = r[i];
                        if (!0 == = l(t, i, a)) {const n = t.value, r = t.__offset;
                            "number" == = typeof n ? (t.__data[0] = n, e.bufferSubData(35345, r, t.__data)):
                            (t.value.isMatrix3 ? (t.__data[0] = t.value.elements[0], t.__data[1] = t.value.elements[1], t.__data[2] = t.value.elements[2], t.__data[3] = t.value.elements[0], t.__data[4] = t.value.elements[3], t.__data[5] = t.value.elements[4], t.__data[6] = t.value.elements[5], t.__data[7] = t.value.elements[0], t.__data[8] = t.value.elements[6], t.__data[9] = t.value.elements[7], t.__data[10] = t.value.elements[8], t.__data[11] = t.value.elements[0]):
                            n.toArray(t.__data), e.bufferSubData(35345, r, t.__data))}
                    } e.bindBuffer(35345, null)
                } (n), a[n.id] = p)},dispose:
            function() {
                for (const t in i)e.deleteBuffer(i[t]);
                s =[],i = {}, a = {}
            }}} function Sa (e = {}) {
            this.isWebGLRenderer = !0;const t = void 0 != = e.canvas ? e.canvas : function() {const e = le("canvas");
                return e.style.display = "block",e
            } (), n = void 0 != = e.context ? e.context : null, r = void 0 == = e.depth || e.depth, i = void
            0 == = e.stencil || e.stencil, s = void 0 != = e.antialias && e.antialias, o = void
            0 == = e.premultipliedAlpha || e.premultipliedAlpha, l = void
            0 != = e.preserveDrawingBuffer && e.preserveDrawingBuffer, c = void
            0 != = e.powerPreference ? e.powerPreference : "default", u = void
            0 != = e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat; let h;
            h = null != = n ? n.getContextAttributes().alpha : void 0 != = e.alpha && e.alpha; let d = null, f = null;const
            p =[],m =[];
            this.domElement = t, this.debug = {checkShaderErrors:!0},
            this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes =[],
            this.localClippingEnabled = !1, this.outputEncoding = U, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, Object.defineProperties(this, {gammaFactor:
            {
                get:
                function() {
                return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2
            },set:
            function() {
                console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")
            }
            }});const g = this;
            let v = !1, y = 0, b = 0, M = null, T = -1, C = null;const A = new Te, L = new Te;
            let P = null, R = t.width, D = t.height, k = 1, I = null, N = null;const
            O = new Te(0, 0, R, D), z = new Te(0, 0, R, D);
            let F = !1;const B = new jn; let V = !1, H = !1, W = null;const
            G = new lt, j = new ae, q = new Re, X = {background:null, fog:null, environment:null, overrideMaterial:
            null, isScene:!0};
            function Y () {
                return null == = M ? k : 1
            } let K, Z, J, $, Q, ee, te, re, ie, se, oe, ce, ue, he, de, fe, pe, me, ge, ve, ye, _e, xe, be, we = n;
            function Se (e, n){
                for (let r = 0; r < e.length; r++) {const i = e[r], a = t.getContext(i, n);
                    if (null != = a) return a
                } return null
            } try {const e = {alpha:!0, depth:r, stencil:i, antialias:s, premultipliedAlpha:o, preserveDrawingBuffer:
                l, powerPreference:c, failIfMajorPerformanceCaveat:u};
                if ("setAttribute" in t&&
                t.setAttribute("data-engine", "three.js r144"), t.addEventListener("webglcontextlost", Ae, !1), t.addEventListener("webglcontextrestored", Le, !1), t.addEventListener("webglcontextcreationerror", Pe, !1), null == = we)
                {const t =["webgl2", "webgl", "experimental-webgl"];
                    if (!0 == = g.isWebGL1Renderer && t.shift(),we = Se(t, e), null == = we)
                    throw Se(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
                } void 0 == = we.getShaderPrecisionFormat && (we.getShaderPrecisionFormat = function() {
                    return {rangeMin:1, rangeMax:1, precision:1}})} catch (We) {
                throw console.error("THREE.WebGLRenderer: " + We.message),We
            } function Me () {
                K = new xr(we), Z = new tr(we, K, e), K.init(Z), _e = new pa(we, K, Z), J = new da(we, K, Z), $ = new Sr, Q = new $i, ee = new fa(we, K, J, Q, Z, _e, $), te = new rr(g), re = new _r(g), ie = new Xn(we, Z), xe = new Qn(we, K, ie, Z), se = new br(we, ie, $, xe), oe = new Cr(we, se, ie, $), ge = new Tr(we, Z, ee), fe = new nr(Q), ce = new Ji(g, te, re, K, Z, xe, fe), ue = new ba(g, Q), he = new na, de = new la(K, Z), me = new $n(g, te, J, oe, h, o), pe = new ha(g, oe, Z), be = new wa(we, $, Z, J), ve = new er(we, K, $, Z), ye = new wr(we, K, $, Z), $.programs = ce.programs, g.capabilities = Z, g.extensions = K, g.properties = Q, g.renderLists = he, g.shadowMap = pe, g.state = J, g.info = $
            } Me();const Ee = new xa(g, we);
            function Ae (e) {e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), v = !0} function Le
            () {
                console.log("THREE.WebGLRenderer: Context Restored."), v = !1;const
                e = $.autoReset, t = pe.enabled, n = pe.autoUpdate, r = pe.needsUpdate, i = pe.type;
                Me(), $.autoReset = e, pe.enabled = t, pe.autoUpdate = n, pe.needsUpdate = r, pe.type = i
            } function Pe
            (e) {console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage)}
            function De (e) {const t = e.target;
            t.removeEventListener("dispose", De), function(e) {
                (function(e) {const t = Q.get(e).programs;
                    void 0 != = t && (t.forEach((function(e) {
                        ce.releaseProgram(e)
                    })),e.isShaderMaterial && ce.releaseShaderCache(e))})(e), Q.remove(e)
            } (t)}this.xr = Ee, this.getContext = function() {
                return we
            },this.getContextAttributes = function() {
                return we.getContextAttributes()
            },this.forceContextLoss = function() {const e = K.get("WEBGL_lose_context");
                e && e.loseContext()
            },this.forceContextRestore = function() {const e = K.get("WEBGL_lose_context");
                e && e.restoreContext()
            },this.getPixelRatio = function() {
                return k
            },this.setPixelRatio = function(e) {
                void 0 != = e && (k = e, this.setSize(R, D, !1))},this.getSize = function(e) {
                return e.set(R, D)
            },this.setSize = function(e, n, r) {
                Ee.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (R = e, D = n, t.width = Math.floor(e * k), t.height = Math.floor(n * k), !1 != = r && (t.style.width = e + "px", t.style.height = n + "px"),
                this.setViewport(0, 0, e, n))},this.getDrawingBufferSize = function(e) {
                return e.set(R * k, D * k).floor()
            },this.setDrawingBufferSize = function(e, n, r) {
                R = e, D = n, k = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n)
            },this.getCurrentViewport = function(e) {
                return e.copy(A)
            },this.getViewport = function(e) {
                return e.copy(O)
            },this.setViewport = function(e, t, n, r) {
                e.isVector4 ? O.set(e.x, e.y, e.z, e.w) : O.set(e, t, n, r), J.viewport(A.copy(O).multiplyScalar(k).floor())
            },this.getScissor = function(e) {
                return e.copy(z)
            },this.setScissor = function(e, t, n, r) {
                e.isVector4 ? z.set(e.x, e.y, e.z, e.w) : z.set(e, t, n, r), J.scissor(L.copy(z).multiplyScalar(k).floor())
            },this.getScissorTest = function() {
                return F
            },this.setScissorTest = function(e) {
                J.setScissorTest(F = e)
            },this.setOpaqueSort = function(e) {
                I = e
            },this.setTransparentSort = function(e) {
                N = e
            },this.getClearColor = function(e) {
                return e.copy(me.getClearColor())
            },this.setClearColor = function() {
                me.setClearColor.apply(me, arguments)
            },this.getClearAlpha = function() {
                return me.getClearAlpha()
            },this.setClearAlpha = function() {
                me.setClearAlpha.apply(me, arguments)
            },this.clear = function(e = !0, t = !0, n = !0) {
                let r = 0;
                e && (r |= 16384), t && (r |= 256), n && (r |= 1024), we.clear(r)
            },this.clearColor = function() {
                this.clear(!0, !1, !1)
            },this.clearDepth = function() {
                this.clear(!1, !0, !1)
            },this.clearStencil = function() {
                this.clear(!1, !1, !0)
            },this.dispose = function() {
                t.removeEventListener("webglcontextlost", Ae, !1), t.removeEventListener("webglcontextrestored", Le, !1), t.removeEventListener("webglcontextcreationerror", Pe, !1), he.dispose(), de.dispose(), Q.dispose(), te.dispose(), re.dispose(), oe.dispose(), xe.dispose(), be.dispose(), ce.dispose(), Ee.dispose(), Ee.removeEventListener("sessionstart", Ie), Ee.removeEventListener("sessionend", Ne), W && (W.dispose(), W = null),
                Oe.stop()
            },this.renderBufferDirect = function(e, t, n, r, i, a) {
                null == = t && (t = X);const
                s = i.isMesh && i.matrixWorld.determinant() < 0, o = function(e, t, n, r, i) {
                    !0 != = t.isScene && (t = X); ee.resetTextureUnits();const
                    a = t.fog, s = r.isMeshStandardMaterial ? t.environment : null, o = null == = M ? g.outputEncoding : !0 == = M.isXRRenderTarget ? M.texture.encoding : U, l = (r.isMeshStandardMaterial ? re : te).get(r.envMap || s), c = !0 == = r.vertexColors && !!n.attributes.color && 4 == = n.attributes.color.itemSize, u = !!r.normalMap && !!n.attributes.tangent, h = !!n.morphAttributes.position, d = !!n.morphAttributes.normal, p = !!n.morphAttributes.color, m = r.toneMapped ? g.toneMapping : 0, v = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, y =
                    void 0 != = v ? v.length : 0, _ = Q.get(r), x = f.state.lights;
                    if (!0 == = V && (!0 == = H || e != = C)) {const t = e == = C && r.id == = T; fe.setState(r, e, t)
                    } let b = !1;
                    r.version == = _.__version ? _.needsLights && _.lightsStateVersion != = x.state.version || _.outputEncoding != = o || i.isInstancedMesh && !1 == = _.instancing ? b = !0 : i.isInstancedMesh || !0 != = _.instancing ? i.isSkinnedMesh && !1 == = _.skinning ? b = !0 : i.isSkinnedMesh || !0 != = _.skinning ? _.envMap != = l || !0 == = r.fog && _.fog != = a ? b = !0 :
                    void
                    0 == = _.numClippingPlanes || _.numClippingPlanes == = fe.numPlanes && _.numIntersection == = fe.numIntersection ? (_.vertexAlphas != = c || _.vertexTangents != = u || _.morphTargets != = h || _.morphNormals != = d || _.morphColors != = p || _.toneMapping != = m || !0 == = Z.isWebGL2 && _.morphTargetsCount != = y) && (b = !0) : b = !0:
                    b = !0:b = !0:(b = !0, _.__version = r.version);
                    let w = _.currentProgram;
                    !0 == = b && (w = Ve(r, t, i)); let S = !1, E = !1, A = !1;const
                    L = w.getUniforms(), P = _.uniforms;
                    J.useProgram(w.program) && (S = !0, E = !0, A = !0);
                    r.id != = T && (T = r.id, E = !0);
                    if (S || C != = e) {
                        if (L.setValue(we, "projectionMatrix", e.projectionMatrix),
                        Z.logarithmicDepthBuffer && L.setValue(we, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), C != = e && (C = e, E = !0, A = !0),
                        r.isShaderMaterial || r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshStandardMaterial || r.envMap)
                        {const t = L.map.cameraPosition;
                            void 0 != = t && t.setValue(we, q.setFromMatrixPosition(e.matrixWorld))
                        }
                        (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && L.setValue(we, "isOrthographic", !0 == = e.isOrthographicCamera), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial || r.isShadowMaterial || i.isSkinnedMesh) && L.setValue(we, "viewMatrix", e.matrixWorldInverse)
                    } if (i.isSkinnedMesh) {
                        L.setOptional(we, i, "bindMatrix"), L.setOptional(we, i, "bindMatrixInverse");const
                        e = i.skeleton;
                        e && (Z.floatVertexTextures ? (null == = e.boneTexture && e.computeBoneTexture(), L.setValue(we, "boneTexture", e.boneTexture, ee), L.setValue(we, "boneTextureSize", e.boneTextureSize)):
                        console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const
                    R = n.morphAttributes;
                    ( void 0 != = R.position || void 0 != = R.normal || void 0 != = R.color && !0 == = Z.isWebGL2)&&
                    ge.update(i, n, r, w);
                    (E || _.receiveShadow != = i.receiveShadow) && (_.receiveShadow = i.receiveShadow, L.setValue(we, "receiveShadow", i.receiveShadow))
                    ;
                    r.isMeshGouraudMaterial && null != = r.envMap && (P.envMap.value = l, P.flipEnvMap.value = l.isCubeTexture && !1 == = l.isRenderTargetTexture ? -1 : 1)
                    ;
                    E && (L.setValue(we, "toneMappingExposure", g.toneMappingExposure), _.needsLights && (N = A, (I = P).ambientLightColor.needsUpdate = N, I.lightProbe.needsUpdate = N, I.directionalLights.needsUpdate = N, I.directionalLightShadows.needsUpdate = N, I.pointLights.needsUpdate = N, I.pointLightShadows.needsUpdate = N, I.spotLights.needsUpdate = N, I.spotLightShadows.needsUpdate = N, I.rectAreaLights.needsUpdate = N, I.hemisphereLights.needsUpdate = N),
                    a && !0 == = r.fog && ue.refreshFogUniforms(P, a), ue.refreshMaterialUniforms(P, r, k, D, W), Ri.upload(we, _.uniformsList, P, ee))
                    ;
                    var I, N;
                    r.isShaderMaterial && !0 == = r.uniformsNeedUpdate && (Ri.upload(we, _.uniformsList, P, ee), r.uniformsNeedUpdate = !1)
                    ;
                    r.isSpriteMaterial && L.setValue(we, "center", i.center);
                    if (L.setValue(we, "modelViewMatrix", i.modelViewMatrix),
                    L.setValue(we, "normalMatrix", i.normalMatrix), L.setValue(we, "modelMatrix", i.matrixWorld), r.isShaderMaterial || r.isRawShaderMaterial)
                    {const e = r.uniformsGroups;
                        for (let t = 0, n = e.length; t < n; t++)
                            if (Z.isWebGL2) {const n = e[t];
                                be.update(n, w), be.bind(n, w)
                            } else
                                console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
                    } return w
                } (e, t, n, r, i);
                J.setMaterial(r, s);
                let l = n.index;const c = n.attributes.position;
                if (null == = l) {
                    if ( void 0 == = c || 0 == = c.count)return
                } else if (0 == = l.count) return; let u, h = 1;
                !0 == = r.wireframe && (l = se.getWireframeAttribute(n), h = 2),xe.setup(i, r, o, n, l);
                let d = ve;
                null != = l && (u = ie.get(l), d = ye, d.setIndex(u));const
                p = null != = l ? l.count : c.count, m = n.drawRange.start * h, v = n.drawRange.count * h, y = null != = a ? a.start * h : 0, _ = null != = a ? a.count * h : 1 / 0, x = Math.max(m, y), b = Math.min(p, m + v, y + _) - 1, w = Math.max(0, b - x + 1);
                if (0 != = w) {
                    if (i.isMesh) !0 == = r.wireframe ? (J.setLineWidth(r.wireframeLinewidth * Y()), d.setMode(1)):
                    d.setMode(4);else if (i.isLine) {
                        let e = r.linewidth;
                        void
                        0 == = e && (e = 1), J.setLineWidth(e * Y()), i.isLineSegments ? d.setMode(1) : i.isLineLoop ? d.setMode(2) : d.setMode(3)
                    } else i.isPoints ? d.setMode(0) : i.isSprite && d.setMode(4);
                    if (i.isInstancedMesh) d.renderInstances(x, w, i.count);
                    else if (n.isInstancedBufferGeometry) {const e = Math.min(n.instanceCount, n._maxInstanceCount);
                        d.renderInstances(x, w, e)
                    } else d.render(x, w)
                }
            },this.compile = function(e, t) {
                function n (e, t, n){
                    !0 == = e.transparent && e.side == = a ? (e.side = 1, e.needsUpdate = !0, Ve(e, t, n), e.side = 0, e.needsUpdate = !0, Ve(e, t, n), e.side = a):
                    Ve(e, t, n)
                } f = de.get(e), f.init(), m.push(f), e.traverseVisible((function(e) {
                    e.isLight && e.layers.test(t.layers) && (f.pushLight(e), e.castShadow && f.pushShadow(e))})),
                f.setupLights(g.physicallyCorrectLights), e.traverse((function(t) {const r = t.material;
                    if (r) if (Array.isArray(r)) for (let i = 0; i < r.length; i++) {
                        n(r[i], e, t)
                    }
                    else n(r, e, t)
                })),m.pop(), f = null
            } ;
            let ke = null;
            function Ie () {
                Oe.stop()
            } function Ne () {
                Oe.start()
            }const Oe = new qn; function ze (e, t, n, r){
                if (!1 == = e.visible) return; if (e.layers.test(t.layers)) if (e.isGroup) n = e.renderOrder;
                else if (e.isLOD) !0 == = e.autoUpdate && e.update(t);
                else if (e.isLight) f.pushLight(e), e.castShadow && f.pushShadow(e);
                else if (e.isSprite) {
                    if (!e.frustumCulled || B.intersectsSprite(e)) {
                        r && q.setFromMatrixPosition(e.matrixWorld).applyMatrix4(G);const
                        t = oe.update(e), i = e.material;
                        i.visible && d.push(e, t, i, n, q.z, null)
                    }
                } else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.frame != = $.render.frame && (e.skeleton.update(),
                e.skeleton.frame = $.render.frame),!e.frustumCulled || B.intersectsObject(e))){
                    r && q.setFromMatrixPosition(e.matrixWorld).applyMatrix4(G);const t = oe.update(e), i = e.material;
                    if (Array.isArray(i)) {const r = t.groups;
                        for (let a = 0, s = r.length; a < s; a++) {const s = r[a], o = i[s.materialIndex];
                            o && o.visible && d.push(e, t, o, n, q.z, s)
                        }
                    } else i.visible && d.push(e, t, i, n, q.z, null)
                }const i = e.children;
                for (let a = 0, s = i.length; a < s; a++) ze(i[a], t, n, r)
            } function Ue (e, t, n, r){const i = e.opaque, a = e.transmissive, o = e.transparent;
                f.setupLightsView(n), a.length > 0 && function(e, t, n) {const r = Z.isWebGL2;
                    null == = W && (W = new Ce(1, 1, {generateMipmaps:!0, type:
                    K.has("EXT_color_buffer_half_float") ? S : x, minFilter:_, samples:r && !0 == = s ? 4 : 0}));
                    g.getDrawingBufferSize(j), r ? W.setSize(j.x, j.y) : W.setSize(ne(j.x), ne(j.y));const
                    i = g.getRenderTarget();
                    g.setRenderTarget(W), g.clear();const a = g.toneMapping;
                    g.toneMapping = 0, Fe(e, t, n), g.toneMapping = a, ee.updateMultisampleRenderTarget(W), ee.updateRenderTargetMipmap(W), g.setRenderTarget(i)
                } (i, t, n),
                r && J.viewport(A.copy(r)), i.length > 0 && Fe(i, t, n), a.length > 0 && Fe(a, t, n), o.length > 0 && Fe(o, t, n), J.buffers.depth.setTest(!0), J.buffers.depth.setMask(!0), J.buffers.color.setMask(!0), J.setPolygonOffset(!1)
            } function Fe (e, t, n){const r = !0 == = t.isScene ? t.overrideMaterial : null;
                for (let i = 0, a = e.length; i < a; i++) {const
                    a = e[i], s = a.object, o = a.geometry, l = null == = r ? a.material : r, c = a.group;
                    s.layers.test(n.layers) && Be(s, t, n, o, l, c)
                }
            } function Be (e, t, n, r, i, s){
                e.onBeforeRender(g, t, n, r, i, s), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(g, t, n, r, e, s), !0 == = i.transparent && i.side == = a ? (i.side = 1, i.needsUpdate = !0, g.renderBufferDirect(n, t, r, i, e, s), i.side = 0, i.needsUpdate = !0, g.renderBufferDirect(n, t, r, i, e, s), i.side = a):
                g.renderBufferDirect(n, t, r, i, e, s), e.onAfterRender(g, t, n, r, i, s)
            } function Ve (e, t, n){
                !0 != = t.isScene && (t = X);const
                r = Q.get(e), i = f.state.lights, a = f.state.shadowsArray, s = i.state.version, o = ce.getParameters(e, i.state, a, t, n), l = ce.getProgramCacheKey(o);
                let c = r.programs;
                r.environment = e.isMeshStandardMaterial ? t.environment : null, r.fog = t.fog, r.envMap = (e.isMeshStandardMaterial ? re : te).get(e.envMap || r.environment),
                void 0 == = c && (e.addEventListener("dispose", De), c = new Map, r.programs = c);
                let u = c.get(l);
                if ( void 0 != = u){
                    if (r.currentProgram == = u && r.lightsStateVersion == = s) return He(e, o),u
                }else
                o.uniforms = ce.getUniforms(e), e.onBuild(n, o, g), e.onBeforeCompile(o, g), u = ce.acquireProgram(o, l), c.set(l, u), r.uniforms = o.uniforms;const
                h = r.uniforms;
                (e.isShaderMaterial || e.isRawShaderMaterial) && !0 != = e.clipping || (h.clippingPlanes = fe.uniform), He(e, o), r.needsLights = function(e)
                {
                    return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 == = e.lights
                }
                (e), r.lightsStateVersion = s, r.needsLights && (h.ambientLightColor.value = i.state.ambient, h.lightProbe.value = i.state.probe, h.directionalLights.value = i.state.directional, h.directionalLightShadows.value = i.state.directionalShadow, h.spotLights.value = i.state.spot, h.spotLightShadows.value = i.state.spotShadow, h.rectAreaLights.value = i.state.rectArea, h.ltc_1.value = i.state.rectAreaLTC1, h.ltc_2.value = i.state.rectAreaLTC2, h.pointLights.value = i.state.point, h.pointLightShadows.value = i.state.pointShadow, h.hemisphereLights.value = i.state.hemi, h.directionalShadowMap.value = i.state.directionalShadowMap, h.directionalShadowMatrix.value = i.state.directionalShadowMatrix, h.spotShadowMap.value = i.state.spotShadowMap, h.spotLightMatrix.value = i.state.spotLightMatrix, h.spotLightMap.value = i.state.spotLightMap, h.pointShadowMap.value = i.state.pointShadowMap, h.pointShadowMatrix.value = i.state.pointShadowMatrix)
                ;const d = u.getUniforms(), p = Ri.seqWithValue(d.seq, h);
                return r.currentProgram = u,r.uniformsList = p, u
            } function He (e, t){const n = Q.get(e);
                n.outputEncoding = t.outputEncoding, n.instancing = t.instancing, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping
            } Oe.setAnimationLoop((function(e) {
                ke && ke(e)
            })),"undefined" != = typeof self && Oe.setContext(self), this.setAnimationLoop = function(e) {
                ke = e, Ee.setAnimationLoop(e), null == = e ? Oe.stop() : Oe.start()
            },
            Ee.addEventListener("sessionstart", Ie), Ee.addEventListener("sessionend", Ne), this.render = function(e, t)
            {
                if ( void 0 != = t && !0 != = t.isCamera)return void console.
                error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                if (!0 == = v) return;
                !0 == = e.matrixWorldAutoUpdate && e.updateMatrixWorld(), null == = t.parent && !0 == = t.matrixWorldAutoUpdate && t.updateMatrixWorld(), !0 == = Ee.enabled && !0 == = Ee.isPresenting && (!0 == = Ee.cameraAutoUpdate && Ee.updateCamera(t), t = Ee.getCamera()),
                !0 == = e.isScene && e.onBeforeRender(g, e, t, M), f = de.get(e, m.length), f.init(), m.push(f), G.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), B.setFromProjectionMatrix(G), H = this.localClippingEnabled, V = fe.init(this.clippingPlanes, H, t), d = he.get(e, p.length), d.init(), p.push(d), ze(e, t, 0, g.sortObjects), d.finish(), !0 == = g.sortObjects && d.sort(I, N), !0 == = V && fe.beginShadows();const
                n = f.state.shadowsArray;
                if (pe.render(n, e, t),
                !0 == = V && fe.endShadows(), !0 == = this.info.autoReset && this.info.reset(), me.render(d, e), f.setupLights(g.physicallyCorrectLights), t.isArrayCamera)
                {const n = t.cameras;
                    for (let t = 0, r = n.length; t < r; t++) {const r = n[t];
                        Ue(d, e, r, r.viewport)
                    }
                }else Ue(d, e, t);
                null != = M && (ee.updateMultisampleRenderTarget(M), ee.updateRenderTargetMipmap(M)),
                !0 == = e.isScene && e.onAfterRender(g, e, t), xe.resetDefaultState(), T = -1, C = null, m.pop(), f = m.length > 0 ? m[m.length - 1] : null, p.pop(), d = p.length > 0 ? p[p.length - 1] : null
            },this.getActiveCubeFace = function() {
                return y
            },this.getActiveMipmapLevel = function() {
                return b
            },this.getRenderTarget = function() {
                return M
            },this.setRenderTargetTextures = function(e, t, n) {
                Q.get(e.texture).__webglTexture = t, Q.get(e.depthTexture).__webglTexture = n;const r = Q.get(e);
                r.__hasExternalTextures = !0, r.__hasExternalTextures && (r.__autoAllocateDepthBuffer = void
                0 == = n, r.__autoAllocateDepthBuffer || !0 == = K.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), r.__useRenderToTexture = !1))},
            this.setRenderTargetFramebuffer = function(e, t) {const n = Q.get(e);
                n.__webglFramebuffer = t, n.__useDefaultFramebuffer = void 0 == = t
            },this.setRenderTarget = function(e, t = 0, n = 0) {
                M = e, y = t, b = n;
                let r = !0;
                if (e) {const t = Q.get(e);
                    void 0 != = t.__useDefaultFramebuffer ? (J.bindFramebuffer(36160, null), r = !1):void
                    0 == = t.__webglFramebuffer ? ee.setupRenderTarget(e) : t.__hasExternalTextures && ee.rebindTextures(e, Q.get(e.texture).__webglTexture, Q.get(e.depthTexture).__webglTexture)
                } let i = null, a = !1, s = !1;
                if (e) {const n = e.texture;
                    (n.isData3DTexture || n.isDataArrayTexture) && (s = !0);const r = Q.get(e).__webglFramebuffer;
                    e.isWebGLCubeRenderTarget ? (i = r[t], a = !0):
                    i = Z.isWebGL2 && e.samples > 0 && !1 == = ee.useMultisampledRTT(e) ? Q.get(e).__webglMultisampledFramebuffer : r, A.copy(e.viewport), L.copy(e.scissor), P = e.scissorTest
                } else A.copy(O).multiplyScalar(k).floor(), L.copy(z).multiplyScalar(k).floor(), P = F;
                if (J.bindFramebuffer(36160, i) && Z.drawBuffers && r && J.drawBuffers(e, i),
                J.viewport(A), J.scissor(L), J.setScissorTest(P), a){const r = Q.get(e.texture);
                    we.framebufferTexture2D(36160, 36064, 34069 + t, r.__webglTexture, n)
                }else if (s) {const r = Q.get(e.texture), i = t || 0;
                    we.framebufferTextureLayer(36160, 36064, r.__webglTexture, n || 0, i)
                } T = -1
            },this.readRenderTargetPixels = function(e, t, n, r, i, a, s) {
                if (!e || !e.isWebGLRenderTarget) return void console.
                error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                let o = Q.get(e).__webglFramebuffer;
                if (e.isWebGLCubeRenderTarget && void 0 != = s && (o = o[s]), o){
                    J.bindFramebuffer(36160, o);
                    try {const s = e.texture, o = s.format, l = s.type;
                        if (o != = E && _e.convert(o) != = we.getParameter(35739)) return void console.
                        error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const
                        c = l == = S && (K.has("EXT_color_buffer_half_float") || Z.isWebGL2 && K.has("EXT_color_buffer_float"));
                        if (l != = x && _e.convert(l) != = we.getParameter(35738) && (l != = w || !(Z.isWebGL2 || K.has("OES_texture_float") || K.has("WEBGL_color_buffer_float"))) && !c)
                            return void console.
                        error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && we.readPixels(t, n, r, i, _e.convert(o), _e.convert(l), a)
                    } finally {const e = null != = M ? Q.get(M).__webglFramebuffer : null; J.bindFramebuffer(36160, e)
                    }
                }
            },this.copyFramebufferToTexture = function(e, t, n = 0)
            {const r = Math.pow(2, -n), i = Math.floor(t.image.width * r), a = Math.floor(t.image.height * r);
                ee.setTexture2D(t, 0), we.copyTexSubImage2D(3553, n, 0, 0, e.x, e.y, i, a), J.unbindTexture()
            },this.copyTextureToTexture = function(e, t, n, r = 0)
            {const i = t.image.width, a = t.image.height, s = _e.convert(n.format), o = _e.convert(n.type);
                ee.setTexture2D(n, 0), we.pixelStorei(37440, n.flipY), we.pixelStorei(37441, n.premultiplyAlpha), we.pixelStorei(3317, n.unpackAlignment), t.isDataTexture ? we.texSubImage2D(3553, r, e.x, e.y, i, a, s, o, t.image.data) : t.isCompressedTexture ? we.compressedTexSubImage2D(3553, r, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, s, t.mipmaps[0].data) : we.texSubImage2D(3553, r, e.x, e.y, s, o, t.image), 0 == = r && n.generateMipmaps && we.generateMipmap(3553), J.unbindTexture()
            },this.copyTextureToTexture3D = function(e, t, n, r, i = 0) {
                if (g.isWebGL1Renderer) return void console.
                warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const
                a = e.max.x - e.min.x + 1, s = e.max.y - e.min.y + 1, o = e.max.z - e.min.z + 1, l = _e.convert(r.format), c = _e.convert(r.type);
                let u;
                if (r.isData3DTexture) ee.setTexture3D(r, 0), u = 32879;
                else {
                    if (!r.isDataArrayTexture) return void console.
                    warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                    ee.setTexture2DArray(r, 0), u = 35866
                }
                we.pixelStorei(37440, r.flipY), we.pixelStorei(37441, r.premultiplyAlpha), we.pixelStorei(3317, r.unpackAlignment);const
                h = we.getParameter(3314), d = we.getParameter(32878), f = we.getParameter(3316), p = we.getParameter(3315), m = we.getParameter(32877), v = n.isCompressedTexture ? n.mipmaps[0] : n.image;
                we.pixelStorei(3314, v.width), we.pixelStorei(32878, v.height), we.pixelStorei(3316, e.min.x), we.pixelStorei(3315, e.min.y), we.pixelStorei(32877, e.min.z), n.isDataTexture || n.isData3DTexture ? we.texSubImage3D(u, i, t.x, t.y, t.z, a, s, o, l, c, v.data) : n.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), we.compressedTexSubImage3D(u, i, t.x, t.y, t.z, a, s, o, l, v.data)):
                we.texSubImage3D(u, i, t.x, t.y, t.z, a, s, o, l, c, v), we.pixelStorei(3314, h), we.pixelStorei(32878, d), we.pixelStorei(3316, f), we.pixelStorei(3315, p), we.pixelStorei(32877, m), 0 == = i && r.generateMipmaps && we.generateMipmap(u), J.unbindTexture()
            },this.initTexture = function(e) {
                e.isCubeTexture ? ee.setTextureCube(e, 0) : e.isData3DTexture ? ee.setTexture3D(e, 0) : e.isDataArrayTexture ? ee.setTexture2DArray(e, 0) : ee.setTexture2D(e, 0), J.unbindTexture()
            },this.resetState = function() {
                y = 0, b = 0, M = null, J.reset(), xe.reset()
            },"undefined" != = typeof
            __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {detail:this}))} ( class extends
        Sa {
        }).prototype.isWebGL1Renderer = !0;
        class Ma {
            constructor(e, t=25e-5) {
                this.isFogExp2 = !0, this.name = "", this.color = new _e(e), this.density = t
            }

            clone() {
                return new Ma(this.color, this.density)
            }

            toJSON() {
                return {type:"FogExp2", color:this.color.getHex(), density:this.density}}
        } class Ea {
            constructor(e, t=1, n=1e3) {
                this.isFog = !0, this.name = "", this.color = new _e(e), this.near = t, this.far = n
            }

            clone() {
                return new Ea(this.color, this.near, this.far)
            }

            toJSON() {
                return {type:"Fog", color:this.color.getHex(), near:this.near, far:this.far}}
        } class Ta extends kt {
            constructor() {
                super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, "undefined" != = typeof
                __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {detail:this}))}

            copy(e, t) {
                return super.copy(e, t),
                null != = e.background && (this.background = e.background.clone()), null != = e.environment && (this.environment = e.environment.clone()), null != = e.fog && (this.fog = e.fog.clone()), null != = e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this
            }

            toJSON(e) {const t = super.toJSON(e);
                return null != = this.fog && (t.object.fog = this.fog.toJSON()),t
            }

            get autoUpdate() {
                return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),
                this.matrixWorldAutoUpdate
            }

            set autoUpdate(e) {
                console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e
            }
        } class Ca extends Zt {
            constructor(e, t, n, r=1) {
                super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = r
            }

            copy(e) {
                return super.copy(e),this.meshPerAttribute = e.meshPerAttribute, this
            }

            toJSON() {const e = super.toJSON();
                return e.meshPerAttribute = this.meshPerAttribute,e.isInstancedBufferAttribute = !0, e
            }
        }const Aa = new lt, La = new lt, Pa =[],Ra = new Tn; class Da extends Tn {
            constructor(e, t, n) {
                super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Ca(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1
            }

            copy(e, t) {
                return super.copy(e, t),
                this.instanceMatrix.copy(e.instanceMatrix), null != = e.instanceColor && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this
            }

            getColorAt(e, t) {
                t.fromArray(this.instanceColor.array, 3 * e)
            }

            getMatrixAt(e, t) {
                t.fromArray(this.instanceMatrix.array, 16 * e)
            }

            raycast(e, t) {const n = this.matrixWorld, r = this.count;
                if (Ra.geometry = this.geometry,Ra.material = this.material,void 0 != = Ra.material)
                for (let i = 0; i < r; i++) {
                    this.getMatrixAt(i, Aa), La.multiplyMatrices(n, Aa), Ra.matrixWorld = La, Ra.raycast(e, Pa);
                    for (let e = 0, n = Pa.length; e < n; e++) {const n = Pa[e];
                        n.instanceId = i, n.object = this, t.push(n)
                    } Pa.length = 0
                }
            }

            setColorAt(e, t) {
                null == = this.instanceColor && (this.instanceColor = new Ca(new Float32Array(3 * this.instanceMatrix.count), 3)), t.toArray(this.instanceColor.array, 3 * e)
            }

            setMatrixAt(e, t) {
                t.toArray(this.instanceMatrix.array, 16 * e)
            }

            updateMorphTargets() {
            }

            dispose() {
                this.dispatchEvent({type:"dispose"})}
        } class ka extends qt {
            constructor(e) {
                super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new _e(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e)
            }

            copy(e) {
                return super.copy(e),
                this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this
            }
        }const Ia = new Re, Na = new Re, Oa = new lt, za = new ot, Ua = new Qe; class Fa extends kt {
            constructor(e=new ln, t=new ka) {
                super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets()
            }

            copy(e, t) {
                return super.copy(e, t),this.material = e.material, this.geometry = e.geometry, this
            }

            computeLineDistances() {const e = this.geometry;
                if (null == = e.index) {const t = e.attributes.position, n =[0];
                    for (let e = 1, r = t.count; e < r; e++)
                        Ia.fromBufferAttribute(t, e - 1), Na.fromBufferAttribute(t, e), n[e] = n[e - 1], n[e] += Ia.distanceTo(Na);
                    e.setAttribute("lineDistance", new Qt(n, 1))
                } else
                    console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                return this
            }

            raycast(e, t) {const n = this.geometry, r = this.matrixWorld, i = e.params.Line.threshold, a = n.drawRange;
                if (null == = n.boundingSphere && n.computeBoundingSphere(),
                Ua.copy(n.boundingSphere), Ua.applyMatrix4(r), Ua.radius += i, !1 == = e.ray.intersectsSphere(Ua))
                return;
                Oa.copy(r).invert(), za.copy(e.ray).applyMatrix4(Oa);const
                s = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = s * s, l = new Re, c = new Re, u = new Re, h = new Re, d = this.isLineSegments ? 2 : 1, f = n.index, p = n.attributes.position;
                if (null != = f) {
                    for (let n = Math.max(0, a.start), r = Math.min(f.count, a.start + a.count) - 1; n < r; n += d) {const
                        r = f.getX(n), i = f.getX(n + 1);
                        l.fromBufferAttribute(p, r), c.fromBufferAttribute(p, i);
                        if (za.distanceSqToSegment(l, c, h, u) > o) continue;
                        h.applyMatrix4(this.matrixWorld);const a = e.ray.origin.distanceTo(h);
                        a < e.near || a > e.far || t.push({distance:a, point:
                        u.clone().applyMatrix4(this.matrixWorld), index:n, face:null, faceIndex:null, object:this})}
                } else {
                    for (let n = Math.max(0, a.start), r = Math.min(p.count, a.start + a.count) - 1; n < r; n += d) {
                        l.fromBufferAttribute(p, n), c.fromBufferAttribute(p, n + 1);
                        if (za.distanceSqToSegment(l, c, h, u) > o) continue;
                        h.applyMatrix4(this.matrixWorld);const r = e.ray.origin.distanceTo(h);
                        r < e.near || r > e.far || t.push({distance:r, point:
                        u.clone().applyMatrix4(this.matrixWorld), index:n, face:null, faceIndex:null, object:this})}
                }
            }

            updateMorphTargets() {const e = this.geometry.morphAttributes, t = Object.keys(e);
                if (t.length > 0) {const n = e[t[0]];
                    if ( void 0 != = n){
                        this.morphTargetInfluences =[],this.morphTargetDictionary = {};
                        for (let e = 0, t = n.length; e < t; e++) {const t = n[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e
                        }
                    }
                }
            }
        }const Ba = new Re, Va = new Re; class Ha extends Fa {
            constructor(e, t) {
                super(e, t), this.isLineSegments = !0, this.type = "LineSegments"
            }

            computeLineDistances() {const e = this.geometry;
                if (null == = e.index) {const t = e.attributes.position, n =[];
                    for (let e = 0, r = t.count; e < r; e += 2)
                        Ba.fromBufferAttribute(t, e), Va.fromBufferAttribute(t, e + 1), n[e] = 0 == = e ? 0 : n[e - 1], n[e + 1] = n[e] + Ba.distanceTo(Va);
                    e.setAttribute("lineDistance", new Qt(n, 1))
                } else
                    console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
                return this
            }
        } class Wa extends qt {
            constructor(e) {
                super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new _e(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e)
            }

            copy(e) {
                return super.copy(e),
                this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this
            }
        }const Ga = new lt, ja = new ot, qa = new Qe, Xa = new Re; class Ya extends kt {
            constructor(e=new ln, t=new Wa) {
                super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets()
            }

            copy(e, t) {
                return super.copy(e, t),this.material = e.material, this.geometry = e.geometry, this
            }

            raycast(e, t) {const
                n = this.geometry, r = this.matrixWorld, i = e.params.Points.threshold, a = n.drawRange;
                if (null == = n.boundingSphere && n.computeBoundingSphere(),
                qa.copy(n.boundingSphere), qa.applyMatrix4(r), qa.radius += i, !1 == = e.ray.intersectsSphere(qa))
                return;
                Ga.copy(r).invert(), ja.copy(e.ray).applyMatrix4(Ga);const
                s = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = s * s, l = n.index, c = n.attributes.position;
                if (null != = l) {
                    for (let n = Math.max(0, a.start), i = Math.min(l.count, a.start + a.count); n < i; n++) {const
                        i = l.getX(n);
                        Xa.fromBufferAttribute(c, i), Ka(Xa, i, o, r, e, t, this)
                    }
                } else {
                    for (let n = Math.max(0, a.start), i = Math.min(c.count, a.start + a.count); n < i; n++)
                        Xa.fromBufferAttribute(c, n), Ka(Xa, n, o, r, e, t, this)
                }
            }

            updateMorphTargets() {const e = this.geometry.morphAttributes, t = Object.keys(e);
                if (t.length > 0) {const n = e[t[0]];
                    if ( void 0 != = n){
                        this.morphTargetInfluences =[],this.morphTargetDictionary = {};
                        for (let e = 0, t = n.length; e < t; e++) {const t = n[e].name || String(e);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e
                        }
                    }
                }
            }
        } function Ka (e, t, n, r, i, a, s){const o = ja.distanceSqToPoint(e);
            if (o < n) {const n = new Re; ja.closestPointToPoint(e, n), n.applyMatrix4(r);const
                l = i.ray.origin.distanceTo(n);
                if (l < i.near || l > i.far) return;
                a.push({distance:l, distanceToRay:Math.sqrt(o), point:n, index:t, face:null, object:s})}
        } class Za {
            constructor() {
                this.type = "Curve", this.arcLengthDivisions = 200
            }

            getPoint() {
                return console.warn("THREE.Curve: .getPoint() not implemented."),null
            }

            getPointAt(e, t) {const n = this.getUtoTmapping(e);
                return this.getPoint(n, t)
            }

            getPoints(e=5) {const t =[];
                for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
                return t
            }

            getSpacedPoints(e=5) {const t =[];
                for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
                return t
            }

            getLength() {const e = this.getLengths();
                return e[e.length - 1]
            }

            getLengths(e=this.arcLengthDivisions) {
                if (this.cacheArcLengths && this.cacheArcLengths.length == = e + 1 && !this.needsUpdate)
                    return this.cacheArcLengths; this.needsUpdate = !1;const t =[];
                let n, r = this.getPoint(0), i = 0;
                t.push(0);
                for (let a = 1; a <= e; a++) n = this.getPoint(a / e), i += n.distanceTo(r), t.push(i), r = n;
                return this.cacheArcLengths = t,t
            }

            updateArcLengths() {
                this.needsUpdate = !0, this.getLengths()
            }

            getUtoTmapping(e, t) {const n = this.getLengths();
                let r = 0;const i = n.length;
                let a;
                a = t || e * n[i - 1];
                let s, o = 0, l = i - 1;
                for (; o <= l; ) if (r = Math.floor(o + (l - o) / 2),s = n[r] - a, s < 0)o = r + 1;else{
                    if (!(s > 0)) {
                        l = r;
                        break
                    } l = r - 1
                } if (r = l,n[r] == = a)return r / (i - 1);const c = n[r];
                return (r + (a - c) / (n[r + 1] - c)) / (i - 1)
            }

            getTangent(e, t) {const n = 1e-4;
                let r = e - n, i = e + n;
                r < 0 && (r = 0), i > 1 && (i = 1);const
                a = this.getPoint(r), s = this.getPoint(i), o = t || (a.isVector2 ? new ae : new Re);
                return o.copy(s).sub(a).normalize(),o
            }

            getTangentAt(e, t) {const n = this.getUtoTmapping(e);
                return this.getTangent(n, t)
            }

            computeFrenetFrames(e, t) {const n = new Re, r =[],i =[],a =[],s = new Re, o = new lt;
                for (let d = 0; d <= e; d++) {const t = d / e;
                    r[d] = this.getTangentAt(t, new Re)
                } i[0] = new Re, a[0] = new Re; let l = Number.MAX_VALUE;const
                c = Math.abs(r[0].x), u = Math.abs(r[0].y), h = Math.abs(r[0].z);
                c <= l && (l = c, n.set(1, 0, 0)),u <= l && (l = u, n.set(0, 1, 0)),
                h <= l && n.set(0, 0, 1), s.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], s), a[0].crossVectors(r[0], i[0]);
                for (let d = 1; d <= e; d++) {
                    if (i[d] = i[d - 1].clone(),
                    a[d] = a[d - 1].clone(), s.crossVectors(r[d - 1], r[d]), s.length() > Number.EPSILON){
                        s.normalize();const e = Math.acos($(r[d - 1].dot(r[d]), -1, 1));
                        i[d].applyMatrix4(o.makeRotationAxis(s, e))
                    } a[d].crossVectors(r[d], i[d])
                } if (!0 == = t) {
                    let t = Math.acos($(i[0].dot(i[e]), -1, 1));
                    t /= e, r[0].dot(s.crossVectors(i[0], i[e])) > 0 && (t = -t);
                    for (let n = 1; n <= e; n++)
                        i[n].applyMatrix4(o.makeRotationAxis(r[n], t * n)), a[n].crossVectors(r[n], i[n])
                } return {tangents:r, normals:i, binormals:a}}

            clone() {
                return (new this.constructor).copy(this)
            }

            copy(e) {
                return this.arcLengthDivisions = e.arcLengthDivisions,this
            }

            toJSON() {const e = {metadata:{
                version:
                4.5, type:"Curve", generator:"Curve.toJSON"
            }};
                return e.arcLengthDivisions = this.arcLengthDivisions,e.type = this.type, e
            }

            fromJSON(e) {
                return this.arcLengthDivisions = e.arcLengthDivisions,this
            }
        } function Ja (e, t, n, r){
            return function(e, t) {const n = 1 - e;
                return n * n * t
            } (e, t)+function(e, t) {
                return 2 * (1 - e) * e * t
            } (e, n)+function(e, t) {
                return e * e * t
            } (e, r)} class $a extends Za {
            constructor(e=new Re, t=new Re, n=new Re) {
                super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n
            }

            getPoint(e, t=new Re) {const n = t, r = this.v0, i = this.v1, a = this.v2;
                return n.set(Ja(e, r.x, i.x, a.x), Ja(e, r.y, i.y, a.y), Ja(e, r.z, i.z, a.z)),n
            }

            copy(e) {
                return super.copy(e),this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
            }

            toJSON() {const e = super.toJSON();
                return e.v0 = this.v0.toArray(),e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
            }

            fromJSON(e) {
                return super.fromJSON(e),this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
            }
        } class Qa extends ln {
            constructor(e=1, t=32, n=16, r=0, i=2*Math.PI, a=0, s=Math.PI) {
                super(), this.type = "SphereGeometry", this.parameters = {radius:e, widthSegments:t, heightSegments:
                n, phiStart:r, phiLength:i, thetaStart:a, thetaLength:s},
                t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));const o = Math.min(a + s, Math.PI);
                let l = 0;const c =[],u = new Re, h = new Re, d =[],f =[],p =[],m =[];
                for (let g = 0; g <= n; g++) {const d =[],v = g / n;
                    let y = 0;
                    0 == g && 0 == a ? y = .5 / t : g == n && o == Math.PI && (y = -.5 / t);
                    for (let n = 0; n <= t; n++) {const o = n / t;
                        u.x = -e * Math.cos(r + o * i) * Math.sin(a + v * s), u.y = e * Math.cos(a + v * s), u.z = e * Math.sin(r + o * i) * Math.sin(a + v * s), f.push(u.x, u.y, u.z), h.copy(u).normalize(), p.push(h.x, h.y, h.z), m.push(o + y, 1 - v), d.push(l++)
                    } c.push(d)
                } for (let g = 0; g < n; g++)
                    for (let e = 0; e < t; e++) {const
                        t = c[g][e + 1], r = c[g][e], i = c[g + 1][e], s = c[g + 1][e + 1];
                        (0 != = g || a > 0) && d.push(t, r, s), (g != = n - 1 || o < Math.PI) && d.push(r, i, s)
                    }
                this.setIndex(d), this.setAttribute("position", new Qt(f, 3)), this.setAttribute("normal", new Qt(p, 3)), this.setAttribute("uv", new Qt(m, 2))
            }

            static fromJSON(e) {
                return new Qa(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength)
            }
        } class es extends qt {
            constructor(e) {
                super(), this.isMeshStandardMaterial = !0, this.defines = {STANDARD:""},
                this.type = "MeshStandardMaterial", this.color = new _e(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new _e(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ae(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e)
            }

            copy(e) {
                return super.copy(e),this.defines = {STANDARD:""},
                this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this
            }
        } class ts extends qt {
            constructor(e) {
                super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new _e(16777215), this.specular = new _e(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new _e(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ae(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e)
            }

            copy(e) {
                return super.copy(e),
                this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this
            }
        } class ns extends qt {
            constructor(e) {
                super(), this.isMeshLambertMaterial = !0, this.type = "MeshLambertMaterial", this.color = new _e(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new _e(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ae(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e)
            }

            copy(e) {
                return super.copy(e),
                this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this
            }
        } function rs (e, t, n){
            return as(e) ? new e.constructor(e.subarray(t, void 0 != = n ? n : e.length)):e.slice(t, n)
        } function is (e, t, n){
            return !e || !n && e.constructor == = t ? e : "number" == = typeof
            t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
        } function as (e) { return ArrayBuffer.isView(e) && !(e instanceof DataView)}class ss {
            constructor(e, t, n, r) {
                this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void
                0 != = r ? r : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {}
            }

            evaluate(e) {const t = this.parameterPositions;
                let n = this._cachedIndex, r = t[n], i = t[n - 1];
                e:
                {
                    t:
                    {
                        let a;
                        n:
                        {
                            r:
                            if (!(e < r)) {
                                for (let a = n + 2; ; ) {
                                    if ( void 0 == = r){
                                        if (e < i) break r;
                                        return n = t.length,this._cachedIndex = n, this.copySampleValue_(n - 1)
                                    } if (n == = a) break; if (i = r,r = t[++n], e < r)break t
                                } a = t.length;
                                break n
                            } if (e >= i) break e;
                            {const s = t[1];
                                e < s && (n = 2, i = s);
                                for (let a = n - 2; ; ) {
                                    if ( void 0 == = i)return this._cachedIndex = 0,this.copySampleValue_(0);
                                    if (n == = a) break; if (r = i,i = t[--n - 1], e >= i)break t
                                } a = n, n = 0
                            }
                        } for (; n < a; ) {const r = n + a >>> 1;
                        e < t[r] ? a = r : n = r + 1
                    } if (r = t[n],i = t[n - 1],void 0 == = i)return this._cachedIndex = 0,this.copySampleValue_(0);
                        if ( void 0 == = r)return n = t.length,this._cachedIndex = n, this.copySampleValue_(n - 1)
                    } this._cachedIndex = n, this.intervalChanged_(n, i, r)
                } return this.interpolate_(n, i, e, r)
            }

            getSettings_() {
                return this.settings || this.DefaultSettings_
            }

            copySampleValue_(e) {const t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
                for (let a = 0; a != = r; ++a) t[a] = n[i + a]; return t
            }

            interpolate_() {
                throw new Error("call to abstract method")
            }

            intervalChanged_() {
            }
        } class os extends ss {
            constructor(e, t, n, r) {
                super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {endingStart:
                N, endingEnd:N}}

            intervalChanged_(e, t, n) {const r = this.parameterPositions;
                let i = e - 2, a = e + 1, s = r[i], o = r[a];
                if ( void 0 == = s)switch (this.getSettings_().endingStart) {
                    case O:
                        i = e, s = 2 * t - n;
                        break;
                    case z:
                        i = r.length - 2, s = t + r[i] - r[i + 1];
                        break;
                    default:
                        i = e, s = n
                } if ( void 0 == = o)switch (this.getSettings_().endingEnd) {
                    case O:
                        a = e, o = 2 * n - t;
                        break;
                    case z:
                        a = 1, o = n + r[1] - r[0];
                        break;
                    default:
                        a = e - 1, o = t
                }const l = .5 * (n - t), c = this.valueSize;
                this._weightPrev = l / (t - s), this._weightNext = l / (o - n), this._offsetPrev = i * c, this._offsetNext = a * c
            }

            interpolate_(e, t, n, r) {const
                i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = e * s, l = o - s, c = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, d = this._weightNext, f = (n - t) / (r - t), p = f * f, m = p * f, g = -h * m + 2 * h * p - h * f, v = (1 + h) * m + (-1.5 - 2 * h) * p + (-.5 + h) * f + 1, y = (-1 - d) * m + (1.5 + d) * p + .5 * f, _ = d * m - d * p;
                for (let x = 0; x != = s; ++x) i[x] = g * a[c + x] + v * a[l + x] + y * a[o + x] + _ * a[u + x];
                return i
            }
        } class ls extends ss {
            constructor(e, t, n, r) {
                super(e, t, n, r)
            }

            interpolate_(e, t, n, r) {const
                i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = e * s, l = o - s, c = (n - t) / (r - t), u = 1 - c;
                for (let h = 0; h != = s; ++h) i[h] = a[l + h] * u + a[o + h] * c; return i
            }
        } class cs extends ss {
            constructor(e, t, n, r) {
                super(e, t, n, r)
            }

            interpolate_(e) {
                return this.copySampleValue_(e - 1)
            }
        } class us {
            constructor(e, t, n, r) {
                if ( void 0 == = e)throw new Error("THREE.KeyframeTrack: track name is undefined");
                if ( void 0 == = t || 0 == = t.length)
                throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
                this.name = e, this.times = is(t, this.TimeBufferType), this.values = is(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation)
            }

            static toJSON(e) {const t = e.constructor;
                let n;
                if (t.toJSON != = this.toJSON) n = t.toJSON(e);
                else {
                    n = {name:e.name, times:is(e.times, Array), values:is(e.values, Array)};const
                    t = e.getInterpolation();
                    t != = e.DefaultInterpolation && (n.interpolation = t)
                } return n.type = e.ValueTypeName,n
            }

            InterpolantFactoryMethodDiscrete(e) {
                return new cs(this.times, this.values, this.getValueSize(), e)
            }

            InterpolantFactoryMethodLinear(e) {
                return new ls(this.times, this.values, this.getValueSize(), e)
            }

            InterpolantFactoryMethodSmooth(e) {
                return new os(this.times, this.values, this.getValueSize(), e)
            }

            setInterpolation(e) {
                let t;
                switch (e) {
                    case D:
                        t = this.InterpolantFactoryMethodDiscrete;
                        break;
                    case k:
                        t = this.InterpolantFactoryMethodLinear;
                        break;
                    case I:
                        t = this.InterpolantFactoryMethodSmooth
                } if ( void 0 == = t)
                {const t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                    if ( void 0 == = this.createInterpolant){
                    if (e == = this.DefaultInterpolation) throw new Error(t);
                    this.setInterpolation(this.DefaultInterpolation)
                } return console.warn("THREE.KeyframeTrack:", t),this
                } return this.createInterpolant = t,this
            }

            getInterpolation() {
                switch (this.createInterpolant) {
                    case this.InterpolantFactoryMethodDiscrete:
                        return D;
                    case this.InterpolantFactoryMethodLinear:
                        return k;
                    case this.InterpolantFactoryMethodSmooth:
                        return I
                }
            }

            getValueSize() {
                return this.values.length / this.times.length
            }

            shift(e) {
                if (0 != = e) {const t = this.times;
                    for (let n = 0, r = t.length; n != = r; ++n) t[n] += e
                } return this
            }

            scale(e) {
                if (1 != = e) {const t = this.times;
                    for (let n = 0, r = t.length; n != = r; ++n) t[n] *= e
                } return this
            }

            trim(e, t) {const n = this.times, r = n.length;
                let i = 0, a = r - 1;
                for (; i != = r && n[i] < e; ) ++i; for (; -1 != = a && n[a] > t; ) --a; if (++a,0 != = i || a != = r){
                    i >= a && (a = Math.max(a, 1), i = a - 1);const e = this.getValueSize();
                    this.times = rs(n, i, a), this.values = rs(this.values, i * e, a * e)
                } return this
            }

            validate() {
                let e = !0;const t = this.getValueSize();
                t - Math.floor(t) != = 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1)
                ;const n = this.times, r = this.values, i = n.length;
                0 == = i && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
                let a = null;
                for (let s = 0; s != = i; s++) {const t = n[s];
                    if ("number" == = typeof t && isNaN(t)){
                        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, s, t), e = !1;
                        break
                    } if (null != = a && a > t) {
                        console.error("THREE.KeyframeTrack: Out of order keys.", this, s, t, a), e = !1;
                        break
                    } a = t
                } if ( void 0 != = r && as(r))for (let s = 0, o = r.length; s != = o; ++s) {const t = r[s];
                    if (isNaN(t)) {
                        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, s, t), e = !1;
                        break
                    }
                } return e
            }

            optimize() {const
                e = rs(this.times), t = rs(this.values), n = this.getValueSize(), r = this.getInterpolation() == = I, i = e.length - 1;
                let a = 1;
                for (let s = 1; s < i; ++s) {
                    let i = !1;const o = e[s];
                    if (o != = e[s + 1] && (1 != = s || o != = e[0])) if (r) i = !0;
                    else {const e = s * n, r = e - n, a = e + n;
                        for (let s = 0; s != = n; ++s) {const n = t[e + s];
                            if (n != = t[r + s] || n != = t[a + s]) {
                                i = !0;
                                break
                            }
                        }
                    } if (i) {
                        if (s != = a) {
                            e[a] = e[s];const r = s * n, i = a * n;
                            for (let e = 0; e != = n; ++e) t[i + e] = t[r + e]
                        } ++a
                    }
                } if (i > 0) {
                    e[a] = e[i];
                    for (let e = i * n, r = a * n, s = 0; s != = n; ++s) t[r + s] = t[e + s]; ++a
                } return a != = e.length ? (this.times = rs(e, 0, a),this.values = rs(t, 0, a * n)):
                (this.times = e, this.values = t),this
            }

            clone() {const e = rs(this.times, 0), t = rs(this.values, 0), n = new (0, this.constructor)(this.name, e, t)
                ;
                return n.createInterpolant = this.createInterpolant,n
            }
        }
        us.prototype.TimeBufferType = Float32Array, us.prototype.ValueBufferType = Float32Array, us.prototype.DefaultInterpolation = k;
        class hs extends us {
        }
        hs.prototype.ValueTypeName = "bool", hs.prototype.ValueBufferType = Array, hs.prototype.DefaultInterpolation = D, hs.prototype.InterpolantFactoryMethodLinear =
        void 0, hs.prototype.InterpolantFactoryMethodSmooth = void 0;
        class ds extends us {
        }
        ds.prototype.ValueTypeName = "color";
        class fs extends us {
        }
        fs.prototype.ValueTypeName = "number";
        class ps extends ss {
            constructor(e, t, n, r) {
                super(e, t, n, r)
            }

            interpolate_(e, t, n, r) {const
                i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, o = (n - t) / (r - t);
                let l = e * s;
                for (let c = l + s; l != = c; l += 4) Pe.slerpFlat(i, 0, a, l - s, a, l, o); return i
            }
        } class ms extends us {
            InterpolantFactoryMethodLinear(e) {
                return new ps(this.times, this.values, this.getValueSize(), e)
            }
        }
        ms.prototype.ValueTypeName = "quaternion", ms.prototype.DefaultInterpolation = k, ms.prototype.InterpolantFactoryMethodSmooth =
        void 0;
        class gs extends us {
        }
        gs.prototype.ValueTypeName = "string", gs.prototype.ValueBufferType = Array, gs.prototype.DefaultInterpolation = D, gs.prototype.InterpolantFactoryMethodLinear =
        void 0, gs.prototype.InterpolantFactoryMethodSmooth = void 0;
        class vs extends us {
        }
        vs.prototype.ValueTypeName = "vector";const ys = {enabled:!1, files:{
        },add:
        function(e, t) {
            !1 != = this.enabled && (this.files[e] = t)
        },get:
        function(e) {
            if (!1 != = this.enabled) return this.files[e]
        },remove:
        function(e) {
            delete this.files[e]
        },clear:
        function() {
            this.files = {}
        }};
        class _s {
            constructor(e, t, n) {const r = this;
                let i, a = !1, s = 0, o = 0;const l =[];
                this.onStart = void
                0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(e) {
                    o++, !1 == = a && void 0 != = r.onStart && r.onStart(e, s, o), a = !0
                },this.itemEnd = function(e) {
                    s++,void 0 != = r.onProgress && r.onProgress(e, s, o), s == = o && (a = !1,void
                    0 != = r.onLoad && r.onLoad())},this.itemError = function(e) {
                    void 0 != = r.onError && r.onError(e)
                },this.resolveURL = function(e) {
                    return i ? i(e) : e
                },this.setURLModifier = function(e) {
                    return i = e,this
                },this.addHandler = function(e, t) {
                    return l.push(e, t),this
                },this.removeHandler = function(e) {const t = l.indexOf(e);
                    return -1 != = t && l.splice(t, 2),this
                },this.getHandler = function(e) {
                    for (let t = 0, n = l.length; t < n; t += 2) {const n = l[t], r = l[t + 1];
                        if (n.global && (n.lastIndex = 0),n.test(e))return r
                    } return null
                }
            }
        }const xs = new _s; class bs {
            constructor(e) {
                this.manager = void
                0 != = e ? e : xs, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
            }

            load() {
            }

            loadAsync(e, t) {const n = this;
                return new Promise((function(r, i) {n.load(e,r,t,i)
                }))}

            parse() {
            }

            setCrossOrigin(e) {
                return this.crossOrigin = e,this
            }

            setWithCredentials(e) {
                return this.withCredentials = e,this
            }

            setPath(e) {
                return this.path = e,this
            }

            setResourcePath(e) {
                return this.resourcePath = e,this
            }

            setRequestHeader(e) {
                return this.requestHeader = e,this
            }
        }const ws = {};
        class Ss extends Error {
            constructor(e, t) {
                super(e), this.response = t
            }
        } class Ms extends bs {
            constructor(e) {
                super(e)
            }

            load(e, t, n, r) {
                void 0 == = e && (e = ""),void 0 != = this.path && (e = this.path + e), e = this.manager.resolveURL(e);const
                i = ys.get(e);
                if ( void 0 != = i)return this.manager.itemStart(e),
                setTimeout((() = > {t && t(i), this.manager.itemEnd(e)}), 0),i;
                if ( void 0 != = ws[e])return void ws[ e].push({onLoad:t, onProgress:n, onError:r});
                ws[e] =[],ws[e].push({onLoad:t, onProgress:n, onError:r});const a = new Request(e, {headers:
                new Headers(this.requestHeader), credentials:this.withCredentials ? "include" : "same-origin"}),
                s = this.mimeType, o = this.responseType;
                fetch(a).then((t = > { if (200 == = t.status || 0 == = t.status) {
                    if (0 == = t.status && console.warn("THREE.FileLoader: HTTP Status 0 received."),
                    "undefined" == = typeof ReadableStream || void 0 == = t.body || void 0 == = t.body.getReader)
                    return t;const
                    n = ws[e], r = t.body.getReader(), i = t.headers.get("Content-Length"), a = i ? parseInt(i) : 0, s = 0 != = a;
                    let o = 0;const l = new ReadableStream({start(e){!function t(){r.read().then((({done:r, value:i})=>{
                        if (r) e.close();
                        else {
                            o += i.byteLength;const r = new ProgressEvent("progress", {lengthComputable:s, loaded:
                            o, total:a});
                            for (let e = 0, t = n.length; e < t; e++) {const t = n[e];
                                t.onProgress && t.onProgress(r)
                            } e.enqueue(i), t()
                        }
                    }))}()}});
                    return new Response(l)
                } throw new Ss(`fetch for "${t.url}" responded with $ {
                    t.status
                }:$ {
                    t.statusText
                }`,t)})).then((e = > {switch (o) {
                    case "arraybuffer":
                        return e.arrayBuffer();
                    case "blob":
                        return e.blob();
                    case "document":
                        return e.text().then((e = > (new DOMParser).parseFromString(e, s)));
                    case "json":
                        return e.json();
                    default:
                        if ( void 0 == = s)return e.text();
                    {const t =/charset = "?([^;"\s]*)
                        "?/i.exec(s),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then((e=>r.decode(e)))}}})).then((t=>{ys.add(e,t);const n=ws[e];delete ws[e];for(let e=0,r=n.length;e<r;e++){const r=n[e];r.onLoad&&r.onLoad(t)}})).catch((t=>{const n=ws[e];if(void 0===n)throw this.manager.itemError(e),t;delete ws[e];for(let e=0,r=n.length;e<r;e++){const r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Es extends bs{constructor(e){super(e)}load(e,t,n,r){void 0!==this.path&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=ys.get(e);if(void 0!==a)return i.manager.itemStart(e),setTimeout((function(){t&&t(a),i.manager.itemEnd(e)}),0),a;const s=le("
                        img
                        ");function o(){c(),ys.add(e,this),t&&t(this),i.manager.itemEnd(e)}function l(t){c(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function c(){s.removeEventListener("
                        load ",o,!1),s.removeEventListener(" error ",l,!1)}return s.addEventListener(" load
                        ",o,!1),s.addEventListener(" error ",l,!1)," data:
                    "!==e.slice(0,5)&&void 0!==this.crossOrigin&&(s.crossOrigin=this.crossOrigin),i.manager.itemStart(e),s.src=e,s}}class Ts extends bs{constructor(e){super(e)}load(e,t,n,r){const i=new Ee,a=new Es(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(e){i.image=e,i.needsUpdate=!0,void 0!==t&&t(i)}),n,r),i}}class Cs extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="
                        Light
                        ",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,void 0!==this.groundColor&&(t.object.groundColor=this.groundColor.getHex()),void 0!==this.distance&&(t.object.distance=this.distance),void 0!==this.angle&&(t.object.angle=this.angle),void 0!==this.decay&&(t.object.decay=this.decay),void 0!==this.penumbra&&(t.object.penumbra=this.penumbra),void 0!==this.shadow&&(t.object.shadow=this.shadow.toJSON()),t}}class As extends Cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="
                        HemisphereLight
                        ",this.position.copy(kt.DefaultUp),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ls=new lt,Ps=new Re,Rs=new Re;class Ds{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jn,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ps.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ps),Rs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rs),t.updateMatrixWorld(),Ls.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ls),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){const e={};return 0!==this.bias&&(e.bias=this.bias),0!==this.normalBias&&(e.normalBias=this.normalBias),1!==this.radius&&(e.radius=this.radius),512===this.mapSize.x&&512===this.mapSize.y||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ks extends Ds{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=2*Z*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;n===t.fov&&r===t.aspect&&i===t.far||(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Is extends Cs{constructor(e,t,n=0,r=Math.PI/3,i=0,a=1){super(e,t),this.isSpotLight=!0,this.type="
                        SpotLight
                        ",this.position.copy(kt.DefaultUp),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ks}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ns extends Ds{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Os extends Cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="
                        DirectionalLight
                        ",this.position.copy(kt.DefaultUp),this.updateMatrix(),this.target=new kt,this.shadow=new Ns}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zs extends Cs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="
                        AmbientLight
                        "}}let Us;const Fs=function(){return void 0===Us&&(Us=new(window.AudioContext||window.webkitAudioContext)),Us};class Bs extends bs{constructor(e){super(e)}load(e,t,n,r){const i=this,a=new Ms(this.manager);a.setResponseType("
                        arraybuffer
                        "),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,(function(n){try{const e=n.slice(0);Fs().decodeAudioData(e,(function(e){t(e)}))}catch(a){r?r(a):console.error(a),i.manager.itemError(e)}}),n,r)}}class Vs{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hs(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hs();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hs(){return("
                        undefined
                        "===typeof performance?Date:performance).now()}const Ws=new Re,Gs=new Pe,js=new Re,qs=new Re;class Xs extends kt{constructor(){super(),this.type="
                        AudioListener
                        ",this.context=Fs(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Vs}getInput(){return this.gain}removeFilter(){return null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ws,Gs,js),qs.set(0,0,-1).applyQuaternion(Gs),t.positionX){const e=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ws.x,e),t.positionY.linearRampToValueAtTime(Ws.y,e),t.positionZ.linearRampToValueAtTime(Ws.z,e),t.forwardX.linearRampToValueAtTime(qs.x,e),t.forwardY.linearRampToValueAtTime(qs.y,e),t.forwardZ.linearRampToValueAtTime(qs.z,e),t.upX.linearRampToValueAtTime(n.x,e),t.upY.linearRampToValueAtTime(n.y,e),t.upZ.linearRampToValueAtTime(n.z,e)}else t.setPosition(Ws.x,Ws.y,Ws.z),t.setOrientation(qs.x,qs.y,qs.z,n.x,n.y,n.z)}}class Ys extends kt{constructor(e){super(),this.type="
                        Audio
                        ",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="
                        empty
                        ",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="
                        audioNode
                        ",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="
                        mediaNode
                        ",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="
                        mediaStreamNode
                        ",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="
                        buffer
                        ",this.autoplay&&this.play(),this}play(e=0){if(!0===this.isPlaying)return void console.warn("
                        THREE.Audio:Audio is already playing.
                        ");if(!1===this.hasPlaybackControl)return void console.warn(" THREE.Audio:this Audio has
                        no playback
                        control.");this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn("
                        THREE.Audio:this Audio has no playback
                        control.")}stop(){if(!1!==this.hasPlaybackControl)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn("
                        THREE.Audio:this Audio has no playback
                        control.")}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),!0===this._connected?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(!1!==this.hasPlaybackControl)return this.playbackRate=e,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn("
                        THREE.Audio:this Audio has no playback
                        control.")}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return!1===this.hasPlaybackControl?(console.warn("
                        THREE.Audio:this Audio has no playback
                        control."),!1):this.loop}setLoop(e){if(!1!==this.hasPlaybackControl)return this.loop=e,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn("
                        THREE.Audio:this Audio has no playback
                        control.")}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ks=new Re,Zs=new Pe,Js=new Re,$s=new Re;class Qs extends Ys{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="
                        HRTF
                        ",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),!0===this.hasPlaybackControl&&!1===this.isPlaying)return;this.matrixWorld.decompose(Ks,Zs,Js),$s.set(0,0,1).applyQuaternion(Zs);const t=this.panner;if(t.positionX){const e=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Ks.x,e),t.positionY.linearRampToValueAtTime(Ks.y,e),t.positionZ.linearRampToValueAtTime(Ks.z,e),t.orientationX.linearRampToValueAtTime($s.x,e),t.orientationY.linearRampToValueAtTime($s.y,e),t.orientationZ.linearRampToValueAtTime($s.z,e)}else t.setPosition(Ks.x,Ks.y,Ks.z),t.setOrientation($s.x,$s.y,$s.z)}}const eo="\\[\\]\\.:\\/
                        ",to=new RegExp("[\\[\\]\\.:\\/]"," g "),no="[ ^\\[\\]\\.:\\/]",ro="[ ^ "+eo.replace("\\.","
                        ")+"]",io=new RegExp(" ^ "+/((?:WC+[\/:])*)/.source.replace(" WC
                        ",no)+/(WCOD+)?/.source.replace(" WCOD ",ro)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(" WC
                        ",no)+/\.(WC+)(?:\[(.+)\])?/.source.replace(" WC ",no)+" $ "),ao=[" material "," materials ","
                        bones "," map
                        "];class so{constructor(e,t,n){this.path=t,this.parsedPath=n||so.parseTrackName(t),this.node=so.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new so.Composite(e,t,n):new so(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"
                        _ ").replace(to," ")}static parseTrackName(e){const t=io.exec(e);if(null===t)throw new Error("
                        PropertyBinding:
                        Cannot parse trackName:
                    "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(void 0!==r&&-1!==r){const e=n.nodeName.substring(r+1);-1!==ao.indexOf(e)&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(null===n.propertyName||0===n.propertyName.length)throw new Error("
                        PropertyBinding:
                        can not parse propertyName from trackName:"+e);return n}static findNode(e,t){if(void 0===t||"
                        "===t||"."===t||-1===t||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(void 0!==n)return n}if(e.children){const n=function(e){for(let r=0;r<e.length;r++){const i=e[r];if(i.name===t||i.uuid===t)return i;const a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let i=t.propertyIndex;if(e||(e=so.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.error("
                        THREE.PropertyBinding:Trying to update node for track:
                    "+this.path+" but it wasn
                        't found.");if(n){let r=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let t=0;t<e.length;t++)if(e[t].name===r){r=t;break}break;case"map":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(void 0===e[n])return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(void 0!==r){if(void 0===e[r])return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[r]}}const a=e[r];if(void 0===a){const n=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+n+"."+r+" but it wasn'
                        t found.
                        ",e)}let s=this.Versioning.None;this.targetObject=e,void 0!==e.needsUpdate?s=this.Versioning.NeedsUpdate:void 0!==e.matrixWorldNeedsUpdate&&(s=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(void 0!==i){if("
                        morphTargetInfluences "===r){if(!e.geometry)return void console.error(" THREE.PropertyBinding:
                        Can not bind to morphTargetInfluences because node does not have a geometry.
                        ",this);if(!e.geometry.morphAttributes)return void console.error(" THREE.PropertyBinding:Can not
                        bind to morphTargetInfluences because node does not have a geometry.
                        morphAttributes.",this);void 0!==e.morphTargetDictionary[i]&&(i=e.morphTargetDictionary[i])}o=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=i}else void 0!==a.fromArray&&void 0!==a.toArray?(o=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(o=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}so.Composite=class{constructor(e,t,n){const r=n||so.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];void 0!==r&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},so.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},so.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},so.prototype.GetterByBindingType=[so.prototype._getValue_direct,so.prototype._getValue_array,so.prototype._getValue_arrayElement,so.prototype._getValue_toArray],so.prototype.SetterByBindingTypeAndVersioning=[[so.prototype._setValue_direct,so.prototype._setValue_direct_setNeedsUpdate,so.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[so.prototype._setValue_array,so.prototype._setValue_array_setNeedsUpdate,so.prototype._setValue_array_setMatrixWorldNeedsUpdate],[so.prototype._setValue_arrayElement,so.prototype._setValue_arrayElement_setNeedsUpdate,so.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[so.prototype._setValue_fromArray,so.prototype._setValue_fromArray_setNeedsUpdate,so.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];new Float32Array(1);"
                        undefined "!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("
                        register ",{detail:{revision:r}}))," undefined
                        "!==typeof window&&(window.__THREE__?console.warn(" WARNING:
                    Multiple instances of Three.js being imported."):window.__THREE__=r)},function(e,t,n){" use strict
                        ";e.exports=n(29)},function(e,t,n){" use strict ";n.d(t," a ",(function(){return u})),n.d(t," b
                        ",(function(){return h})),n.d(t," c ",(function(){return d})),n.d(t," d
                        ",(function(){return f})),n.d(t," e ",(function(){return m})),n.d(t," f
                        ",(function(){return g})),n.d(t," g
                        ",(function(){return y}));var r=n(2),i=n(4);function a(e,t){if(!e)throw new Error(t)}const s=Object(r.createContext)(null);const o=Object(r.createContext)(null);const l=Object(r.createContext)({outlet:null,matches:[]});function c(e){return function(e){let t=Object(r.useContext)(l).outlet;if(t)return Object(r.createElement)(v.Provider,{value:e},t);return t}(e.context)}function u(e){a(!1)}function h(e){let{basename:t=" / ",children:n=null,location:l,navigationType:c=i.a.Pop,navigator:u,static:h=!1}=e;p()&&a(!1);let d=P(t),f=Object(r.useMemo)((()=>({basename:d,navigator:u,static:h})),[d,u,h]);"
                        string "===typeof l&&(l=Object(i.f)(l));let{pathname:m=" / ",search:g=" ",hash:v="
                        ",state:y=null,key:_="
                        default
                            "}=l,x=Object(r.useMemo)((()=>{let e=A(m,d);return null==e?null:{pathname:e,search:g,hash:v,state:y,key:_}}),[d,m,g,v,y,_]);return null==x?null:Object(r.createElement)(s.Provider,{value:f},Object(r.createElement)(o.Provider,{children:n,value:{location:x,navigationType:c}}))}function d(e){let{children:t,location:n}=e;return function(e,t){p()||a(!1);let{matches:n}=Object(r.useContext)(l),s=n[n.length-1],o=s?s.params:{},c=(s&&s.pathname,s?s.pathnameBase:" / ");s&&s.route;0;let u,h=m();if(t){var d;let e=" string "===typeof t?Object(i.f)(t):t;" / "===c||(null==(d=e.pathname)?void 0:d.startsWith(c))||a(!1),u=e}else u=h;let f=u.pathname||" / ",g=" / "===c?f:f.slice(c.length)||" / ",v=function(e,t,n){void 0===n&&(n=" / ");let r=A((" string "===typeof t?Object(i.f)(t):t).pathname||" / ",n);if(null==r)return null;let a=x(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let s=null;for(let i=0;null==s&&i<a.length;++i)s=M(a[i],r);return s}(e,{pathname:g});0;return E(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:L([c,e.pathname]),pathnameBase:" / "===e.pathnameBase?c:L([c,e.pathnameBase])}))),n)}(_(t),n)}function f(e){p()||a(!1);let{basename:t,navigator:n}=Object(r.useContext)(s),{hash:o,pathname:l,search:c}=y(e),u=l;if(" / "!==t){let n=function(e){return" "===e||" "===e.pathname?" / ":" string "===typeof e?Object(i.f)(e).pathname:e.pathname}(e),r=null!=n&&n.endsWith(" / ");u=" / "===l?t+(r?" / ":" "):L([t,l])}return n.createHref({pathname:u,search:c,hash:o})}function p(){return null!=Object(r.useContext)(o)}function m(){return p()||a(!1),Object(r.useContext)(o).location}function g(){p()||a(!1);let{basename:e,navigator:t}=Object(r.useContext)(s),{matches:n}=Object(r.useContext)(l),{pathname:i}=m(),o=JSON.stringify(n.map((e=>e.pathnameBase))),c=Object(r.useRef)(!1);return Object(r.useEffect)((()=>{c.current=!0})),Object(r.useCallback)((function(n,r){if(void 0===r&&(r={}),!c.current)return;if(" number "===typeof n)return void t.go(n);let a=C(n,JSON.parse(o),i);" / "!==e&&(a.pathname=L([e,a.pathname])),(r.replace?t.replace:t.push)(a,r.state)}),[e,t,o,i])}const v=Object(r.createContext)(null);function y(e){let{matches:t}=Object(r.useContext)(l),{pathname:n}=m(),i=JSON.stringify(t.map((e=>e.pathnameBase)));return Object(r.useMemo)((()=>C(e,JSON.parse(i),n)),[e,i,n])}function _(e){let t=[];return r.Children.forEach(e,(e=>{if(!Object(r.isValidElement)(e))return;if(e.type===r.Fragment)return void t.push.apply(t,_(e.props.children));e.type!==u&&a(!1);let n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=_(e.props.children)),t.push(n)})),t}function x(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=" "),e.forEach(((e,i)=>{let s={relativePath:e.path||" ",caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith(" / ")&&(s.relativePath.startsWith(r)||a(!1),s.relativePath=s.relativePath.slice(r.length));let o=L([r,s.relativePath]),l=n.concat(s);e.children&&e.children.length>0&&(!0===e.index&&a(!1),x(e.children,t,l,o)),(null!=e.path||e.index)&&t.push({path:o,score:S(o,e.index),routesMeta:l})})),t}const b=/^:\w+$/,w=e=>" * "===e;function S(e,t){let n=e.split(" / "),r=n.length;return n.some(w)&&(r+=-2),t&&(r+=2),n.filter((e=>!w(e))).reduce(((e,t)=>e+(b.test(t)?3:" "===t?1:10)),r)}function M(e,t){let{routesMeta:n}=e,r={},i=" / ",a=[];for(let s=0;s<n.length;++s){let e=n[s],o=s===n.length-1,l=" / "===i?t:t.slice(i.length)||" / ",c=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:o},l);if(!c)return null;Object.assign(r,c.params);let u=e.route;a.push({params:r,pathname:L([i,c.pathname]),pathnameBase:L([i,c.pathnameBase]),route:u})," / "!==c.pathnameBase&&(i=L([i,c.pathnameBase]))}return a}function E(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((n,i,a)=>Object(r.createElement)(l.Provider,{children:void 0!==i.route.element?i.route.element:Object(r.createElement)(c,null),value:{outlet:n,matches:t.concat(e.slice(0,a+1))}})),null)}function T(e,t){" string "===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);let r=[],i=" ^ "+e.replace(/\/*\*?$/," ").replace(/^\/*/," / ").replace(/[\\.*+^$?{}|()[\]]/g,"\\$ & ").replace(/:(\w+)/g,((e,t)=>(r.push(t)," ([ ^\\/]+)")));e.endsWith(" * ")?(r.push(" * "),i+=" * "===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:\\b|\\/|$)";return[new RegExp(i,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce(((e,t,n)=>{if("*"===t){let e=o[n]||"";s=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return e}}(o[n]||""),e}),{}),pathname:a,pathnameBase:s,pattern:e}}function C(e,t,n){let r,a="string"===typeof e?Object(i.f)(e):e,s=""===e||""===a.pathname?"/":a.pathname;if(null==s)r=n;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}r=e>=0?t[e]:"/"}let o=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?Object(i.f)(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t,search:R(r),hash:D(a)}}(a,r);return s&&"/"!==s&&s.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function A(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const L=e=>e.join("/").replace(/\/\/+/g,"/"),P=e=>e.replace(/\/+$/,"").replace(/^\/*/, "/"),R = e =>e && "?" != = e ? e.startsWith("?") ? e : "?" + e : "", D = e =>e && "#" != = e ? e.startsWith("#") ? e : "#" + e : ""
                    },function(e, t, n) {
                        "use strict";
                        function r () {
                            return (r = Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                                } return e
                            }).apply(this, arguments)
                        } n.d(t, "a", (function() {
                            return i
                        })),n.d(t, "b", (function() {
                            return d
                        })),n.d(t, "c", (function() {
                            return f
                        })),n.d(t, "d", (function() {
                            return p
                        })),n.d(t, "e", (function() {
                            return u
                        })),n.d(t, "f", (function() {
                            return h
                        }));
                        var i, a = i || (i = {});
                        a.Pop = "POP", a.Push = "PUSH", a.Replace = "REPLACE";
                        var s = function(e) {
                            return e
                        } ;
                        function o (e) {e.preventDefault(), e.returnValue = ""} function l () {
                            var e =[];
                            return {get length(){ return e.length},push:
                            function(t) {
                                return e.push(t),function() {
                                    e = e.filter((function(e) {
                                        return e != = t
                                    }))}
                            },call:
                            function(t) {
                                e.forEach((function(e) {
                                    return e && e(t)
                                }))}}} function c () {
                            return Math.random().toString(36).substr(2, 8)
                        } function u (e) {var t = e.pathname; t = void 0 == = t ? "/" : t; var n = e.search;
                        return n = void 0 == = n ? "" : n, e = void
                        0 == = (e = e.hash) ? "" : e, n && "?" != = n && (t += "?" == = n.charAt(0) ? n : "?" + n), e && "#" != = e && (t += "#" == = e.charAt(0) ? e : "#" + e), t}
                        function h (e) {var t = {}; if (e) {
                            var n = e.indexOf("#");
                            0 <= n && (t.hash = e.substr(n), e = e.substr(0, n)),
                            0 <= (n = e.indexOf("?")) && (t.search = e.substr(n), e = e.substr(0, n)),
                            e && (t.pathname = e)
                        } return t}function d (e) {function t(){var e = p.location, t = m.state || {}; return[
                        t.idx, s({pathname:e.pathname, search:e.search, hash:e.hash, state:t.usr || null, key:
                        t.key || "default"})]}function n (e) { return "string" == = typeof e ? e : u(e)}function a (e, t)
                        {
                            return void 0 == = t && (t = null), s(r({pathname:_.pathname, hash:"", search:""},
                            "string" == = typeof e ? h(e) : e, {state:t, key:c()}))} function d
                        (e) {v = e, e = t(), y = e[0], _ = e[1], x.call({action:v, location:_})}function f (e) {m.go(e)}
                        void 0 == = e && (e = {}); var p = void
                        0 == = (e = e.window) ? document.defaultView : e, m = p.history, g = null;
                        p.addEventListener("popstate", (function() {
                            if (g) b.call(g), g = null;
                            else {
                                var e = i.Pop, n = t(), r = n[0];
                                if (n = n[1],b.length){
                                    if (null != r) {
                                        var a = y - r;
                                        a && (g = {action:e, location:n, retry:function() {
                                            f(-1 * a)
                                        }},f(a))}
                                }else d(e)
                            }
                        }));
                        var v = i.Pop, y = (e = t())[0], _ = e[1], x = l(), b = l();
                        return null == y && (y = 0,m.replaceState(r({}, m.state, {idx:y}),"")),{
                            get action () {
                                return v
                            },get location () {
                                return _
                            },createHref:
                            n, push:function e (t, r){
                                var s = i.Push, o = a(t, r);
                                if (!b.length || (b.call({action:s, location:o, retry:function() {
                                    e(t, r)
                                }}),0)){
                                    var l =[{
                                        usr:
                                        o.state, key:o.key, idx:y + 1
                                    },n(o)];
                                    o = l[0], l = l[1];
                                    try {
                                        m.pushState(o, "", l)
                                    } catch (c) {
                                        p.location.assign(l)
                                    } d(s)
                                }
                            },replace:
                            function e (t, r){
                                var s = i.Replace, o = a(t, r);
                                b.length && (b.call({action:s, location:o, retry:function() {
                                    e(t, r)
                                }}),1)||(o =[{usr:o.state, key:o.key, idx:y},n(o)],
                                m.replaceState(o[0], "", o[1]), d(s))},go:
                            f, back:function() {
                                f(-1)
                            },forward:
                            function() {
                                f(1)
                            },listen:
                            function(e) {
                                return x.push(e)
                            },block:
                            function(e) {
                                var t = b.push(e);
                                return 1 == = b.length && p.addEventListener("beforeunload", o),function() {
                                    t(), b.length || p.removeEventListener("beforeunload", o)
                                }
                            }
                        }}function f
                        (e) {function t(){var e = h(m.location.hash.substr(1)), t = e.pathname, n = e.search;
                        e = e.hash;
                        var r = g.state || {};
                        return[r.idx, s({pathname:void 0 == = t ? "/" : t, search:void 0 == = n ? "" : n, hash:void
                        0 == = e ? "" : e, state:r.usr || null, key:r.key || "default"})]}function n () {
                            if (v) w.call(v), v = null;
                            else {
                                var e = i.Pop, n = t(), r = n[0];
                                if (n = n[1],w.length){
                                    if (null != r) {
                                        var a = _ - r;
                                        a && (v = {action:e, location:n, retry:function() {
                                            p(-1 * a)
                                        }},p(a))}
                                }else f(e)
                            }
                        } function a (e) {var t = document.querySelector("base"), n = "";
                        return t && t.getAttribute("href") && (n = -1 == = (n = (t = m.location.href).indexOf("#")) ? t : t.slice(0, n)),
                        n + "#" + ("string" == = typeof e ? e : u(e))}function d (e, t){
                            return void 0 == = t && (t = null), s(r({pathname:x.pathname, hash:"", search:""},
                            "string" == = typeof e ? h(e) : e, {state:t, key:c()}))} function f
                        (e) {y = e, e = t(), _ = e[0], x = e[1], b.call({action:y, location:x})}function p (e) {g.go(e)}
                        void 0 == = e && (e = {}); var m = void
                        0 == = (e = e.window) ? document.defaultView : e, g = m.history, v = null;
                        m.addEventListener("popstate", n), m.addEventListener("hashchange", (function() {
                            u(t()[1]) != = u(x) && n()
                        }));
                        var y = i.Pop, _ = (e = t())[0], x = e[1], b = l(), w = l();
                        return null == _ && (_ = 0,g.replaceState(r({}, g.state, {idx:_}),"")),{
                            get action () {
                                return y
                            },get location () {
                                return x
                            },createHref:
                            a, push:function e (t, n){
                                var r = i.Push, s = d(t, n);
                                if (!w.length || (w.call({action:r, location:s, retry:function() {
                                    e(t, n)
                                }}),0)){
                                    var o =[{
                                        usr:
                                        s.state, key:s.key, idx:_ + 1
                                    },a(s)];
                                    s = o[0], o = o[1];
                                    try {
                                        g.pushState(s, "", o)
                                    } catch (l) {
                                        m.location.assign(o)
                                    } f(r)
                                }
                            },replace:
                            function e (t, n){
                                var r = i.Replace, s = d(t, n);
                                w.length && (w.call({action:r, location:s, retry:function() {
                                    e(t, n)
                                }}),1)||(s =[{usr:s.state, key:s.key, idx:_},a(s)],
                                g.replaceState(s[0], "", s[1]), f(r))},go:
                            p, back:function() {
                                p(-1)
                            },forward:
                            function() {
                                p(1)
                            },listen:
                            function(e) {
                                return b.push(e)
                            },block:
                            function(e) {
                                var t = w.push(e);
                                return 1 == = w.length && m.addEventListener("beforeunload", o),function() {
                                    t(), w.length || m.removeEventListener("beforeunload", o)
                                }
                            }
                        }}function p (e) {function t(e, t){ return void 0 == = t && (t = null), s(r({pathname:
                        g.pathname, search:"", hash:""},"string" == = typeof e ? h(e) : e, {state:t, key:c()}))}
                        function n (e, t, n){
                            return !y.length || (y.call({action:e, location:t, retry:n}),!1)} function a (e, t){
                            m = e, g = t, v.call({action:m, location:g})} function o
                        (e) {var t = Math.min(Math.max(p + e, 0), f.length - 1), r = i.Pop, s = f[t];
                        n(r, s, (function() {
                            o(e)
                        }))&&(p = t, a(r, s))}void 0 == = e && (e = {}); var d = e;
                        e = d.initialEntries, d = d.initialIndex;
                        var f = ( void 0 == = e ?["/"]:e).map((function(e) {
                            return s(r({pathname:"/", search:"", hash:"", state:null, key:c()},"string" == = typeof
                            e ? h(e) : e))})),
                        p = Math.min(Math.max(null == d ? f.length - 1 : d, 0), f.length - 1), m = i.Pop, g = f[p], v = l(), y = l();
                        return {get index(){ return p},get action () {
                            return m
                        },get location () {
                            return g
                        },createHref:
                        function(e) {
                            return "string" == = typeof e ? e : u(e)
                        },push:
                        function e (r, s){
                            var o = i.Push, l = t(r, s);
                            n(o, l, (function() {
                                e(r, s)
                            }))&&(p += 1, f.splice(p, f.length, l), a(o, l))},replace:
                        function e (r, s){
                            var o = i.Replace, l = t(r, s);
                            n(o, l, (function() {
                                e(r, s)
                            }))&&(f[p] = l, a(o, l))},go:
                        o, back:function() {
                            o(-1)
                        },forward:
                        function() {
                            o(1)
                        },listen:
                        function(e) {
                            return v.push(e)
                        },block:
                        function(e) {
                            return y.push(e)
                        }}}},function(e, t) {
                        function n (e) { if (e) return function(e) {
                            for (var t in n.prototype)e[t] = n.prototype[t];
                            return e
                        } (e)}t.Emitter = n, n.prototype.on = n.prototype.addEventListener = function(e, t) {
                            return this._callbacks = this._callbacks || {},
                            (this._callbacks["$" + e] = this._callbacks["$" + e] ||[]).push(t), this
                        },n.prototype.once = function(e, t) {
                            function n () {
                                this.off(e, n), t.apply(this, arguments)
                            } return n.fn = t,this.on(e, n), this
                        },
                        n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t)
                        {
                            if (this._callbacks = this._callbacks || {},0 == arguments.length)
                            return this._callbacks = {},this;
                            var n, r = this._callbacks["$" + e];
                            if (!r) return this;
                            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                            for (var i = 0; i < r.length; i++)
                                if ((n = r[i]) == = t || n.fn == = t) {
                                    r.splice(i, 1);
                                    break
                                } return 0 == = r.length && delete this._callbacks["$" + e], this
                        },n.prototype.emit = function(e) {
                            this._callbacks = this._callbacks || {};
                            for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
                                t[r - 1] = arguments[r];
                            if (n) {
                                r = 0;
                                for (var i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t)
                            } return this
                        },n.prototype.emitReserved = n.prototype.emit, n.prototype.listeners = function(e) {
                            return this._callbacks = this._callbacks || {},this._callbacks["$" + e] ||[]},
                        n.prototype.hasListeners = function(e) {
                            return !!this.listeners(e).length
                        }
                    },function(e, t, n) {
                        "use strict";
                        t.a = "undefined" != = typeof self ? self : "undefined" != = typeof
                        window ? window : Function("return this") ()
                    },function(e, t, n) {
                        "use strict";
                        n.d(t, "b", (function() {
                            return i
                        })),n.d(t, "a", (function() {
                            return o
                        }));
                        var r = n(6);
                        function i (e,...t){
                            return t.reduce(((t, n) =>(e.hasOwnProperty(n) && (t[n] = e[n]), t)),{
                            })}const a = setTimeout, s = clearTimeout;
                        function o (e, t){
                            t.useNativeTimers ? (e.setTimeoutFn = a.bind(r.a), e.clearTimeoutFn = s.bind(r.a)):
                            (e.setTimeoutFn = setTimeout.bind(r.a), e.clearTimeoutFn = clearTimeout.bind(r.a))}
                    },function(e, t, n) {
                        "use strict";
                        n.d(t, "c", (function() {
                            return i
                        })),n.d(t, "a", (function() {
                            return a
                        })),n.d(t, "d", (function() {
                            return s
                        })),n.d(t, "b", (function() {
                            return o
                        }));
                        var r = n(6);const i = "function" == = typeof Promise && "function" == = typeof
                        Promise.resolve ? e =>Promise.resolve().then(e):(e, t)=>
                        t(e, 0), a = r.a.WebSocket || r.a.MozWebSocket, s = !0, o = "arraybuffer"
                    },function(e, t, n) {
                        "use strict";
                        n.d(t, "e", (function() {
                            return x
                        })),n.d(t, "c", (function() {
                            return c
                        })),n.d(t, "d", (function() {
                            return y
                        })),n.d(t, "a", (function() {
                            return g
                        })),n.d(t, "b", (function() {
                            return _
                        }));const r = Object.create(null);
                        r.open = "0", r.close = "1", r.ping = "2", r.pong = "3", r.message = "4", r.upgrade = "5", r.noop = "6";const
                        i = Object.create(null);
                        Object.keys(r).forEach((e = > {i[r[e]] = e}));const a = {type:"error", data:"parser error"},
                        s = "function" == = typeof Blob || "undefined" != = typeof
                        Blob && "[object BlobConstructor]" == = Object.prototype.toString.call(Blob), o = "function" == = typeof
                        ArrayBuffer, l = (e, t)=>
                        {const n = new FileReader; return n.onload = function() {const e = n.result.split(",")[1];
                            t("b" + e)
                        },n.readAsDataURL(e)
                        } ;
                        for (var c = ({type:e, data:t},n, i)=>{
                            return s && t instanceof Blob ? n ? i(t) : l(t, i) : o && (t instanceof ArrayBuffer || (a = t,
                            "function" == = typeof
                            ArrayBuffer.isView ? ArrayBuffer.isView(a) : a && a.buffer instanceof ArrayBuffer))?
                            n ? i(t) : l(new Blob([t]), i):i(r[e] + (t || ""));
                            var a
                        },
                        u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = "undefined" == = typeof
                        Uint8Array ?[]:new Uint8Array(256), d = 0;
                        d < u.length;
                        d++)h[u.charCodeAt(d)] = d;const f = "function" == = typeof ArrayBuffer, p = (e, t)=>{
                            if (f) {const n = function(e) {
                                var t, n, r, i, a, s = .75 * e.length, o = e.length, l = 0;
                                "=" == = e[e.length - 1] && (s--, "=" == = e[e.length - 2] && s--);
                                var c = new ArrayBuffer(s), u = new Uint8Array(c);
                                for (t = 0; t < o; t += 4)
                                    n = h[e.charCodeAt(t)], r = h[e.charCodeAt(t + 1)], i = h[e.charCodeAt(t + 2)], a = h[e.charCodeAt(t + 3)], u[l++] = n << 2 | r >> 4, u[l++] = (15 & r) << 4 | i >> 2, u[l++] = (3 & i) << 6 | 63 & a;
                                return c
                            } (e);
                                return m(n, t)
                            } return {base64:!0, data:e}},m = (e, t)=>{
                            switch (t) {
                                case "blob":
                                    return e instanceof ArrayBuffer ? new Blob([e]):e;
                                case "arraybuffer":
                                default:
                                    return e
                            }
                        } ;
                        var g = (e, t)=>{
                            if ("string" != = typeof e)return {type:"message", data:m(e, t)};const n = e.charAt(0);
                            if ("b" == = n) return {type:"message", data:p(e.substring(1), t)};
                            return i[n] ? e.length > 1 ? {type : i[n],data:
                            e.substring(1)}:{
                                type:
                                i[n]
                            }:a
                        } ;const v = String.fromCharCode(30), y = (e, t)=>{const n = e.length, r = new Array(n);
                            let i = 0;
                            e.forEach(((e, a) =>{
                                c(e, !1, (e = > {r[a] = e, ++i == = n && t(r.join(v))}))}))},_ = (e, t)=>
                        {const n = e.split(v), r =[];
                            for (let i = 0; i < n.length; i++) {const e = g(n[i], t);
                                if (r.push(e),"error" == = e.type)break
                            } return r
                        },x = 4
                    },function(e, t, n) {
                        "use strict";
                        n.d(t, "a", (function() {
                            return g
                        }));
                        var r = n(1);const i =/^[og]\s * (. +)?/,a =/^mtllib /, s =/^usemtl /, o =/^usemap /, l =/\s +/,
                        c = new r.W, u = new r.W, h = new r.W, d = new r.W, f = new r.W, p = new r.i; function m ()
                        {const e = {objects:[],object:
                        {
                        },vertices:[],normals:[],colors:[],uvs:[],materials:
                        {
                        },materialLibraries:[],startObject:
                        function(e, t) {
                            if (this.object && !1 == = this.object.fromDeclaration) return this.object.name = e,void
                            (this.object.fromDeclaration = !1 != = t);const n = this.object && "function" == = typeof
                            this.object.currentMaterial ? this.object.currentMaterial() : void 0;
                            if (this.object && "function" == = typeof
                            this.object._finalize && this.object._finalize(!0), this.object = {name:
                            e || "", fromDeclaration:!1 != = t, geometry:{
                                vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:
                                !1
                            },materials:[],smooth:
                            !0, startMaterial:function(e, t) {const n = this._finalize(!1);
                                n && (n.inherited || n.groupCount <= 0) && this.materials.splice(n.index, 1);const
                                r = {index:this.materials.length, name:e || "", mtllib:
                                Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "", smooth:void
                                0 != = n ? n.smooth : this.smooth, groupStart:void 0 != = n ? n.groupEnd : 0, groupEnd:
                                -1, groupCount:-1, inherited:!1, clone:function(e)
                                {const t = {index:"number" == = typeof e ? e : this.index, name:this.name, mtllib:
                                    this.mtllib, smooth:this.smooth, groupStart:0, groupEnd:-1, groupCount:-1, inherited:
                                    !1};
                                    return t.clone = this.clone.bind(t),t
                                }};
                                return this.materials.push(r),r
                            },currentMaterial:
                            function() {
                                if (this.materials.length > 0) return this.materials[this.materials.length - 1]
                            },_finalize:
                            function(e) {const t = this.currentMaterial();
                                if (t && -1 == = t.groupEnd && (t.groupEnd = this.geometry.vertices.length / 3,
                                t.groupCount = t.groupEnd - t.groupStart, t.inherited = !1),
                                e && this.materials.length > 1)for (let n = this.materials.length - 1; n >= 0; n--)
                                    this.materials[n].groupCount <= 0 && this.materials.splice(n, 1);
                                return e && 0 == = this.materials.length && this.materials.push({name:"", smooth:
                                this.smooth}),t
                            }},n && n.name && "function" == = typeof n.clone){const e = n.clone(0);
                                e.inherited = !0, this.object.materials.push(e)
                            } this.objects.push(this.object)
                        },finalize:
                        function() {
                            this.object && "function" == = typeof this.object._finalize && this.object._finalize(!0)
                        },parseVertexIndex:
                        function(e, t) {const n = parseInt(e, 10);
                            return 3 * (n >= 0 ? n - 1 : n + t / 3)
                        },parseNormalIndex:
                        function(e, t) {const n = parseInt(e, 10);
                            return 3 * (n >= 0 ? n - 1 : n + t / 3)
                        },parseUVIndex:
                        function(e, t) {const n = parseInt(e, 10);
                            return 2 * (n >= 0 ? n - 1 : n + t / 2)
                        },addVertex:
                        function(e, t, n) {const r = this.vertices, i = this.object.geometry.vertices;
                            i.push(r[e + 0], r[e + 1], r[e + 2]), i.push(r[t + 0], r[t + 1], r[t + 2]), i.push(r[n + 0], r[n + 1], r[n + 2])
                        },addVertexPoint:
                        function(e) {const t = this.vertices;
                            this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2])
                        },addVertexLine:
                        function(e) {const t = this.vertices;
                            this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2])
                        },addNormal:
                        function(e, t, n) {const r = this.normals, i = this.object.geometry.normals;
                            i.push(r[e + 0], r[e + 1], r[e + 2]), i.push(r[t + 0], r[t + 1], r[t + 2]), i.push(r[n + 0], r[n + 1], r[n + 2])
                        },addFaceNormal:
                        function(e, t, n) {const r = this.vertices, i = this.object.geometry.normals;
                            c.fromArray(r, e), u.fromArray(r, t), h.fromArray(r, n), f.subVectors(h, u), d.subVectors(c, u), f.cross(d), f.normalize(), i.push(f.x, f.y, f.z), i.push(f.x, f.y, f.z), i.push(f.x, f.y, f.z)
                        },addColor:
                        function(e, t, n) {const r = this.colors, i = this.object.geometry.colors;
                            void 0 != = r[e] && i.push(r[e + 0], r[e + 1], r[e + 2]),void
                            0 != = r[t] && i.push(r[t + 0], r[t + 1], r[t + 2]),void
                            0 != = r[n] && i.push(r[n + 0], r[n + 1], r[n + 2])
                        },addUV:
                        function(e, t, n) {const r = this.uvs, i = this.object.geometry.uvs;
                            i.push(r[e + 0], r[e + 1]), i.push(r[t + 0], r[t + 1]), i.push(r[n + 0], r[n + 1])
                        },addDefaultUV:
                        function() {const e = this.object.geometry.uvs;
                            e.push(0, 0), e.push(0, 0), e.push(0, 0)
                        },addUVLine:
                        function(e) {const t = this.uvs;
                            this.object.geometry.uvs.push(t[e + 0], t[e + 1])
                        },addFace:
                        function(e, t, n, r, i, a, s, o, l) {const c = this.vertices.length;
                            let u = this.parseVertexIndex(e, c), h = this.parseVertexIndex(t, c), d = this.parseVertexIndex(n, c);
                            if (this.addVertex(u, h, d),this.addColor(u, h, d),void 0 != = s && "" != = s)
                            {const e = this.normals.length;
                                u = this.parseNormalIndex(s, e), h = this.parseNormalIndex(o, e), d = this.parseNormalIndex(l, e), this.addNormal(u, h, d)
                            }else this.addFaceNormal(u, h, d);
                            if ( void 0 != = r && "" != = r){const e = this.uvs.length;
                                u = this.parseUVIndex(r, e), h = this.parseUVIndex(i, e), d = this.parseUVIndex(a, e), this.addUV(u, h, d), this.object.geometry.hasUVIndices = !0
                            }else this.addDefaultUV()
                        },addPointGeometry:
                        function(e) {
                            this.object.geometry.type = "Points";const t = this.vertices.length;
                            for (let n = 0, r = e.length; n < r; n++) {const r = this.parseVertexIndex(e[n], t);
                                this.addVertexPoint(r), this.addColor(r)
                            }
                        },addLineGeometry:
                        function(e, t) {
                            this.object.geometry.type = "Line";const n = this.vertices.length, r = this.uvs.length;
                            for (let i = 0, a = e.length; i < a; i++)
                                this.addVertexLine(this.parseVertexIndex(e[i], n));
                            for (let i = 0, a = t.length; i < a; i++) this.addUVLine(this.parseUVIndex(t[i], r))
                        }};
                            return e.startObject("", !1),e
                        } class g extends r.y {
                            constructor(e) {
                                super(e), this.materials = null
                            }

                            load(e, t, n, i) {const a = this, s = new r.n(this.manager);
                                s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, (function(n)
                                {
                                    try {
                                        t(a.parse(n))
                                    } catch (r) {
                                        i ? i(r) : console.error(r), a.manager.itemError(e)
                                    }
                                }),n, i)}

                            setMaterials(e) {
                                return this.materials = e,this
                            }

                            parse(e) {const t = new m; -1 != = e.indexOf("\r\n") && (e = e.replace( /\r\n / g, "\n")),
                                -1 != = e.indexOf("\\\n") && (e = e.replace( /\\\n / g, ""));const n = e.split("\n");
                                let c =[];
                                for (let r = 0, h = n.length; r < h; r++) {const e = n[r].trimStart();
                                    if (0 == = e.length) continue;const u = e.charAt(0);
                                    if ("#" != = u) if ("v" == = u) {const n = e.split(l);
                                        switch (n[0]) {
                                            case "v":
                                                t.vertices.push(parseFloat(n[1]), parseFloat(n[2]), parseFloat(n[3])), n.length >= 7 ? (p.setRGB(parseFloat(n[4]), parseFloat(n[5]), parseFloat(n[6])).convertSRGBToLinear(), t.colors.push(p.r, p.g, p.b)):t.colors.push( void 0,void 0,void 0);
                                                break;
                                            case "vn":
                                                t.normals.push(parseFloat(n[1]), parseFloat(n[2]), parseFloat(n[3]));
                                                break;
                                            case "vt":
                                                t.uvs.push(parseFloat(n[1]), parseFloat(n[2]))
                                        }
                                    } else if ("f" == = u) {const n = e.slice(1).trim().split(l), r =[];
                                        for (let e = 0, t = n.length; e < t; e++) {const t = n[e];
                                            if (t.length > 0) {const e = t.split("/");
                                                r.push(e)
                                            }
                                        }const i = r[0];
                                        for (let e = 1, a = r.length - 1; e < a; e++) {const n = r[e], a = r[e + 1];
                                            t.addFace(i[0], n[0], a[0], i[1], n[1], a[1], i[2], n[2], a[2])
                                        }
                                    } else if ("l" == = u) {const n = e.substring(1).trim().split(" ");
                                        let r =[];const i =[];
                                        if (-1 == = e.indexOf("/")) r = n;
                                        else for (let e = 0, t = n.length; e < t; e++) {const t = n[e].split("/");
                                            "" != = t[0] && r.push(t[0]), "" != = t[1] && i.push(t[1])
                                        } t.addLineGeometry(r, i)
                                    } else if ("p" == = u) {const n = e.slice(1).trim().split(" ");
                                        t.addPointGeometry(n)
                                    } else if (null != = (c = i.exec(e))) {const
                                        e = (" " + c[0].slice(1).trim()).slice(1);
                                        t.startObject(e)
                                    } else if (s.test(e))
                                        t.object.startMaterial(e.substring(7).trim(), t.materialLibraries);
                                    else if (a.test(e)) t.materialLibraries.push(e.substring(7).trim());
                                    else if (o.test(e))
                                        console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
                                    else if ("s" == = u) {
                                        if (c = e.split(" "),c.length > 1){const e = c[1].trim().toLowerCase();
                                            t.object.smooth = "0" != = e && "off" != = e
                                        }else t.object.smooth = !0;const n = t.object.currentMaterial();
                                        n && (n.smooth = t.object.smooth)
                                    } else {
                                        if ("\0" == = e) continue;
                                        console.warn('THREE.OBJLoader: Unexpected line: "' + e + '"')
                                    }
                                } t.finalize();const u = new r.r; u.materialLibraries =[].concat(t.materialLibraries);
                                if (!0 == = !(1 == = t.objects.length && 0 == = t.objects[0].geometry.vertices.length))
                                    for (let i = 0, a = t.objects.length; i < a; i++) {const
                                        e = t.objects[i], n = e.geometry, a = e.materials, s = "Line" == = n.type, o = "Points" == = n.type;
                                        let l = !1;
                                        if (0 == = n.vertices.length) continue;const c = new r.g;
                                        c.setAttribute("position", new r.o(n.vertices, 3)), n.normals.length > 0 && c.setAttribute("normal", new r.o(n.normals, 3)), n.colors.length > 0 && (l = !0, c.setAttribute("color", new r.o(n.colors, 3))),
                                        !0 == = n.hasUVIndices && c.setAttribute("uv", new r.o(n.uvs, 2));const h =[];
                                        for (let i = 0, u = a.length; i < u; i++) {const
                                            e = a[i], n = e.name + "_" + e.smooth + "_" + l;
                                            let c = t.materials[n];
                                            if (null != = this.materials) if (c = this.materials.create(e.name),
                                            !s || !c || c instanceof r.w){
                                                if (o && c && !(c instanceof r.L)) {const e = new r.L({size:
                                                    10, sizeAttenuation:!1});
                                                    r.z.prototype.copy.call(e, c), e.color.copy(c.color), e.map = c.map, c = e
                                                }
                                            }else{const e = new r.w;
                                                r.z.prototype.copy.call(e, c), e.color.copy(c.color), c = e
                                            } void 0 == = c && (c = s ? new r.w : o ? new r.L({size : 1, sizeAttenuation:
                                            !1}):
                                            new r.E, c.name = e.name, c.flatShading = !e.smooth, c.vertexColors = l, t.materials[n] = c),
                                            h.push(c)
                                        } let d;
                                        if (h.length > 1) {
                                            for (let e = 0, t = a.length; e < t; e++) {const t = a[e];
                                                c.addGroup(t.groupStart, t.groupCount, e)
                                            } d = s ? new r.x(c, h) : o ? new r.K(c, h) : new r.B(c, h)
                                        } else d = s ? new r.x(c, h[0]) : o ? new r.K(c, h[0]) : new r.B(c, h[0]);
                                        d.name = e.name, u.add(d)
                                    }
                                else if (t.vertices.length > 0) {const e = new r.L({size:1, sizeAttenuation:!1}),
                                    n = new r.g;
                                    n.setAttribute("position", new r.o(t.vertices, 3)), t.colors.length > 0 && void
                                    0 != = t.colors[0] && (n.setAttribute("color", new r.o(t.colors, 3)), e.vertexColors = !0)
                                    ;const i = new r.K(n, e);
                                    u.add(i)
                                } return u
                            }
                        }
                    },function(e, t, n) {
                        "use strict";
                        n.d(t, "a", (function() {
                            return s
                        }));
                        var r = n(9), i = n(5), a = n(7);
                        class s extends i.Emitter {
                            constructor(e) {
                                super(), this.writable = !1, Object(a.a) (this, e),
                                this.opts = e, this.query = e.query, this.readyState = "", this.socket = e.socket
                            }

                            onError(e, t) {const n = new Error(e);
                                return n.type = "TransportError",n.description = t, super.emit("error", n), this
                            }

                            open() {
                                return "closed" != = this.readyState && "" != = this.readyState || (this.readyState = "opening",
                                this.doOpen()),this
                            }

                            close() {
                                return "opening" != = this.readyState && "open" != = this.readyState || (this.doClose(),
                                this.onClose()),this
                            }

                            send(e) {
                                "open" == = this.readyState && this.write(e)
                            }

                            onOpen() {
                                this.readyState = "open", this.writable = !0, super.emit("open")
                            }

                            onData(e) {const t = Object(r.a) (e, this.socket.binaryType);
                                this.onPacket(t)
                            }

                            onPacket(e) {
                                super.emit("packet", e)
                            }

                            onClose() {
                                this.readyState = "closed", super.emit("close")
                            }
                        }
                    },function(e, t) {
                        t.encode = function(e) {
                            var t = "";
                            for (var n in e)
                            e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]))
                            ;
                            return t
                        },t.decode = function(e) {
                            for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
                                var a = n[r].split("=");
                                t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                            } return t
                        }
                    },function(e, t) {
                        var n =/^( ?:( ? ![^:@]+:[^:@\/]*@)(http | https | ws | wss):\/\/)?(( ?:(([ ^:@]*)( ?::([ ^:@]*))?)?
                        @)?(( ?:[a - f0 - 9]{
                            0, 4
                        }:){
                            2, 7
                        }[a - f0 - 9]{
                            0, 4
                        }|[^:\/?#]*)( ?::(\d *))?)(((\/( ?:[^?#]( ? ![^?#\/]*\.[^?#\/.]+( ?:[?#]|$)))*\/?)?([ ^ ?#\/]*))
                        ( ?:\?([ ^#]*))?( ?:#(. *))?)/,r =[
                        "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"]
                        ;
                        e.exports = function(e) {
                            var t = e, i = e.indexOf("["), a = e.indexOf("]");
                            -1 != i && -1 != a && (e = e.substring(0, i) + e.substring(i, a).replace( /:/g, ";")
                            +e.substring(a, e.length));
                            for (var s = n.exec(e || ""), o = {}, l = 14; l--; ) o[r[l]] = s[l] || "";
                            return -1 != i && -1 != a && (o.source = t,
                            o.host = o.host.substring(1, o.host.length - 1).replace( /;/g, ":"),
                            o.authority = o.authority.replace("[", "").replace("]", "").replace( /;/g, ":"),
                            o.ipv6uri = !0),o.pathNames = function(e, t) {
                                var n =/\/{
                                    2, 9
                                }/g, r = t.replace(n, "/").split("/");
                                "/" != t.substr(0, 1) && 0 != = t.length || r.splice(0, 1);
                                "/" == t.substr(t.length - 1, 1) && r.splice(r.length - 1, 1);
                                return r
                            } (0, o.path),o.queryKey = function(e, t) {
                                var n = {};
                                return t.replace( / ( ?:^|&)([ ^ &=]*)=?([ ^&]*)/g, (function(e, t, r) {
                                    t && (n[t] = r)
                                })),n
                            } (0, o.query),o
                        }
                    },function(e, t, n) {
                        "use strict";
                        var r, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = {}, s = 0, o = 0;
                        function l (e) {var t = ""; do {
                            t = i[e % 64] + t, e = Math.floor(e / 64)
                        } while (e > 0); return t}function c () {
                            var e = l(+new Date); return e != = r ? (s = 0,r = e):e + "." + l(s++)
                        } for (; o < 64; o++) a[i[o]] = o;
                        c.encode = l, c.decode = function(e) {
                            var t = 0;
                            for (o = 0; o < e.length; o++) t = 64 * t + a[e.charAt(o)];
                            return t
                        },e.exports = c
                    },function(e, t, n) {
                        "use strict";
                        n.d(t, "a", (function() {
                            return X
                        }));
                        var r = {};
                        n.r(r), n.d(r, "protocol", (function() {
                            return N
                        })),n.d(r, "PacketType", (function() {
                            return O
                        })),n.d(r, "Encoder", (function() {
                            return z
                        })),n.d(r, "Decoder", (function() {
                            return U
                        }));
                        var i = n(13), a = n.n(i);
                        var s = n(24), o = n.n(s), l = n(6), c = function(e) {const t = e.xdomain;
                            try {
                                if ("undefined" != = typeof XMLHttpRequest && (!t || o.a))return new XMLHttpRequest
                            } catch (n) {
                            } if (!t) try {
                                return new (l.a[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                            } catch (n) {
                            }
                        },u = n(7), h = n(5), d = n(11), f = n(14), p = n.n(f), m = n(12), g = n.n(m), v = n(9);
                        class y extends d.a {
                            constructor() {
                                super(...arguments),this.polling = !1
                            }

                            get name() {
                                return "polling"
                            }

                            doOpen() {
                                this.poll()
                            }

                            pause(e) {
                                this.readyState = "pausing";const t = () =>{
                                    this.readyState = "paused", e()
                                } ;
                                if (this.polling || !this.writable) {
                                    let e = 0;
                                    this.polling && (e++, this.once("pollComplete", (function() {
                                        --e || t()
                                    }))),this.writable || (e++, this.once("drain", (function() {
                                        --e || t()
                                    })))} else t()
                            }

                            poll() {
                                this.polling = !0, this.doPoll(), this.emit("poll")
                            }

                            onData(e) {
                                Object(v.b) (e, this.socket.binaryType).forEach((e = > {
                                if ("opening" == = this.readyState && "open" == = e.type && this.onOpen(),
                                "close" == = e.type)return this.onClose(),!1;
                                this.onPacket(e)})),
                                "closed" != = this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" == = this.readyState && this.poll())}

                            doClose() {const e = () =>{
                                this.write([{type:"close"}])} ;
                                "open" == = this.readyState ? e() : this.once("open", e)
                            }

                            write(e) {
                                this.writable = !1, Object(v.d)
                                (e, (e = > {this.doWrite(e, (() = > {this.writable = !0, this.emit("drain")}))}))}

                            uri() {
                                let e = this.query || {};const t = this.opts.secure ? "https" : "http";
                                let n = "";
                                !1 != = this.opts.timestampRequests && (e[this.opts.timestampParam] = p() ()),
                                this.supportsBinary || e.sid || (e.b64 = 1), this.opts.port && ("https" == = t && 443 != = Number(this.opts.port) || "http" == = t && 80 != = Number(this.opts.port)) && (n = ":" + this.opts.port);const
                                r = g.a.encode(e);
                                return t + "://" + (-1 != = this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "")
                            }
                        } function _ () {
                        }const x = null != new c({xdomain:!1}).responseType;
                        class b extends h.Emitter {
                            constructor(e, t) {
                                super(), Object(u.a) (this, t),
                                this.opts = t, this.method = t.method || "GET", this.uri = e, this.async = !1 != = t.async, this.data =
                                void 0 != = t.data ? t.data : null, this.create()
                            }

                            create() {const e = Object(u.b)
                                (this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref")
                                ;
                                e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;const t = this.xhr = new c(e);
                                try {
                                    t.open(this.method, this.uri, this.async);
                                    try {
                                        if (this.opts.extraHeaders) {
                                            t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
                                            for (let e in this.opts.extraHeaders)
                                            this.opts.extraHeaders.hasOwnProperty(e) && t.setRequestHeader(e, this.opts.extraHeaders[e])
                                        }
                                    } catch (n) {
                                    } if ("POST" == = this.method) try {
                                        t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                    } catch (n) {
                                    } try {
                                        t.setRequestHeader("Accept", "*/*")
                                    } catch (n) {
                                    } "withCredentials" in t&&
                                    (t.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (t.timeout = this.opts.requestTimeout), t.onreadystatechange = () =>
                                    {
                                        4 == = t.readyState && (200 == = t.status || 1223 == = t.status ? this.onLoad() : this.setTimeoutFn((() = > {this.onError("number" == = typeof t.status ? t.status : 0)}), 0))},
                                    t.send(this.data)
                                } catch (n) {
                                    return void this.setTimeoutFn((() = > {this.onError(n)}), 0)}
                                "undefined" != = typeof
                                document && (this.index = b.requestsCount++, b.requests[this.index] = this)}

                            onSuccess() {
                                this.emit("success"), this.cleanup()
                            }

                            onData(e) {
                                this.emit("data", e), this.onSuccess()
                            }

                            onError(e) {
                                this.emit("error", e), this.cleanup(!0)
                            }

                            cleanup(e) {
                                if ("undefined" != = typeof this.xhr && null != = this.xhr){
                                    if (this.xhr.onreadystatechange = _,e)try {
                                        this.xhr.abort()
                                    } catch (t) {
                                    } "undefined" != = typeof document && delete b.requests[this.index], this.xhr = null
                                }
                            }

                            onLoad() {const e = this.xhr.responseText;
                                null != = e && this.onData(e)
                            }

                            abort() {
                                this.cleanup()
                            }
                        } if (b.requestsCount = 0,b.requests = {}, "undefined" != = typeof document)
                        if ("function" == = typeof attachEvent)attachEvent("onunload", w);else
                        if ("function" == = typeof addEventListener)
                        {const e = "onpagehide" in l.a ? "pagehide" : "unload";
                            addEventListener(e, w, !1)
                        } function w () {
                            for (let e in b.requests)b.requests.hasOwnProperty(e) && b.requests[e].abort()
                        }const S = {websocket:n(25).a, polling:class extends y {
                            constructor(e) {
                                if (super(e),"undefined" != = typeof location)
                                {const t = "https:" == = location.protocol; let n = location.port;
                                    n || (n = t ? "443" : "80"), this.xd = "undefined" != = typeof
                                    location && e.hostname != = location.hostname || n != = e.port, this.xs = e.secure != = t
                                }const t = e && e.forceBase64;
                                this.supportsBinary = x && !t
                            } request(e = {}) {
                                return Object.assign(e, {xd:this.xd, xs:this.xs},this.opts),new b(this.uri(), e)
                            } doWrite(e, t) {const n = this.request({method:"POST", data:e});
                                n.on("success", t), n.on("error", (e = > {this.onError("xhr post error", e)}))} doPoll()
                            {const e = this.request();
                                e.on("data", this.onData.bind(this)), e.on("error", (e = > {this.onError("xhr poll error", e)})),
                                this.pollXhr = e
                            }
                        }};
                        class M extends h.Emitter {
                            constructor(e, t= {
                            })

                            {
                                super(), e && "object" == = typeof e && (t = e, e = null),e ? (e = a()
                                (e), t.hostname = e.host, t.secure = "https" == = e.protocol || "wss" == = e.protocol, t.port = e.port, e.query && (t.query = e.query)):
                                t.host && (t.hostname = a() (t.host).host),Object(u.a) (this, t),
                                this.secure = null != t.secure ? t.secure : "undefined" != = typeof
                                location && "https:" == = location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.hostname = t.hostname || ("undefined" != = typeof
                                location ? location.hostname : "localhost"),
                                this.port = t.port || ("undefined" != = typeof
                                location && location.port ? location.port : this.secure ? "443" : "80"),
                                this.transports = t.transports ||["polling", "websocket"],
                                this.readyState = "", this.writeBuffer =[],
                                this.prevBufferLen = 0, this.opts = Object.assign({path:"/engine.io", agent:
                                !1, withCredentials:!1, upgrade:!0, timestampParam:"t", rememberUpgrade:
                                !1, rejectUnauthorized:!0, perMessageDeflate:{
                                threshold:
                                1024
                            },transportOptions:
                            {
                            },closeOnBeforeunload:
                            !0},t),this.opts.path = this.opts.path.replace( /\/$ /, "")+"/", "string" == = typeof
                                this.opts.query && (this.opts.query = g.a.decode(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, "function" == = typeof
                                addEventListener && (this.opts.closeOnBeforeunload && addEventListener("beforeunload", (() = > {this.transport && (this.transport.removeAllListeners(), this.transport.close())}),
                                !1),
                                "localhost" != = this.hostname && (this.offlineEventListener = () = > {this.onClose("transport close")}, addEventListener("offline", this.offlineEventListener, !1))),
                                this.open()
                            }

                            createTransport(e) {const t = function(e) {const t = {};
                                for (let n in e)e.hasOwnProperty(n) && (t[n] = e[n]);
                                return t
                            } (this.opts.query);
                                t.EIO = v.e, t.transport = e, this.id && (t.sid = this.id);const
                                n = Object.assign({}, this.opts.transportOptions[e], this.opts, {query:t, socket:
                                this, hostname:this.hostname, secure:this.secure, port:this.port});
                                return new S[e] (n)
                            }

                            open() {
                                let e;
                                if (this.opts.rememberUpgrade && M.priorWebsocketSuccess && -1 != = this.transports.indexOf("websocket"))
                                    e = "websocket";
                                else {
                                    if (0 == = this.transports.length) return void
                                    this.setTimeoutFn((() = > {this.emitReserved("error", "No transports available")}), 0)
                                    ;
                                    e = this.transports[0]
                                } this.readyState = "opening";
                                try {
                                    e = this.createTransport(e)
                                } catch (t) {
                                    return this.transports.shift(),void this.open()
                                } e.open(), this.setTransport(e)
                            }

                            setTransport(e) {
                                this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (() = > {this.onClose("transport close")}))}

                            probe(e) {
                                let t = this.createTransport(e), n = !1;
                                M.priorWebsocketSuccess = !1;const r = () =>{
                                    n || (t.send([{type:"ping", data:"probe"}]),t.once("packet", (e = > {
                                    if (!n) if ("pong" == = e.type && "probe" == = e.data) {
                                        if (this.upgrading = !0,this.emitReserved("upgrading", t), !t)return;
                                        M.priorWebsocketSuccess = "websocket" == = t.name, this.transport.pause((() = > {n || "closed" != = this.readyState && (c(), this.setTransport(t), t.send([{type:
                                        "upgrade"}]),
                                        this.emitReserved("upgrade", t), t = null, this.upgrading = !1, this.flush())}))} else {const
                                        e = new Error("probe error");
                                        e.transport = t.name, this.emitReserved("upgradeError", e)
                                    }})))} ;
                                function i () {
                                    n || (n = !0, c(), t.close(), t = null)}const a = e =>
                                {const n = new Error("probe error: " + e);
                                    n.transport = t.name, i(), this.emitReserved("upgradeError", n)
                                } ;
                                function s () {
                                    a("transport closed")
                                } function o () {
                                    a("socket closed")
                                } function l (e) {t && e.name != = t.name && i()}const c = () =>{
                                    t.removeListener("open", r), t.removeListener("error", a), t.removeListener("close", s), this.off("close", o), this.off("upgrading", l)
                                } ;
                                t.once("open", r), t.once("error", a), t.once("close", s), this.once("close", o), this.once("upgrading", l), t.open()
                            }

                            onOpen() {
                                if (this.readyState = "open",
                                M.priorWebsocketSuccess = "websocket" == = this.transport.name, this.emitReserved("open"), this.flush(), "open" == = this.readyState && this.opts.upgrade && this.transport.pause)
                                {
                                    let e = 0;const t = this.upgrades.length;
                                    for (; e < t; e++) this.probe(this.upgrades[e])
                                }
                            }

                            onPacket(e) {
                                if ("opening" == = this.readyState || "open" == = this.readyState || "closing" == = this.readyState)
                                    switch (this.emitReserved("packet", e),this.emitReserved("heartbeat"), e.type){
                                    case "open":
                                        this.onHandshake(JSON.parse(e.data));
                                        break;
                                    case "ping":
                                        this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                                        break;
                                    case "error":const t = new Error("server error");
                                        t.code = e.data, this.onError(t);
                                        break;
                                    case "message":
                                        this.emitReserved("data", e.data), this.emitReserved("message", e.data)
                                }
                            }

                            onHandshake(e) {
                                this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" != = this.readyState && this.resetPingTimeout()
                            }

                            resetPingTimeout() {
                                this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((() = > {this.onClose("ping timeout")}), this.pingInterval + this.pingTimeout),
                                this.opts.autoUnref && this.pingTimeoutTimer.unref()
                            }

                            onDrain() {
                                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 == = this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
                            }

                            flush() {
                                "closed" != = this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emitReserved("flush"))}

                            write(e, t, n) {
                                return this.sendPacket("message", e, t, n),this
                            }

                            send(e, t, n) {
                                return this.sendPacket("message", e, t, n),this
                            }

                            sendPacket(e, t, n, r) {
                                if ("function" == = typeof t && (r = t, t = void 0),"function" == = typeof
                                n && (r = n, n = null),"closing" == = this.readyState || "closed" == = this.readyState)
                                return;
                                (n = n || {}).compress = !1 != = n.compress;const i = {type:e, data:t, options:n};
                                this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush()
                            }

                            close() {const e = () =>{
                                this.onClose("forced close"), this.transport.close()
                            },t = () =>{
                                this.off("upgrade", t), this.off("upgradeError", t), e()
                            },n = () =>{
                                this.once("upgrade", t), this.once("upgradeError", t)
                            } ;
                                return "opening" != = this.readyState && "open" != = this.readyState || (this.readyState = "closing",
                                this.writeBuffer.length ? this.once("drain", (() = > {this.upgrading ? n() : e()})):
                                this.upgrading ? n() : e()),this
                            }

                            onError(e) {
                                M.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e)
                            }

                            onClose(e, t) {
                                "opening" != = this.readyState && "open" != = this.readyState && "closing" != = this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == = typeof
                                removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer =[],
                                this.prevBufferLen = 0)}

                            filterUpgrades(e) {const t =[];
                                let n = 0;const r = e.length;
                                for (; n < r; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
                                return t
                            }
                        } M.protocol = v.e;
                        M.protocol;const E = "function" == = typeof
                        ArrayBuffer, T = Object.prototype.toString, C = "function" == = typeof
                        Blob || "undefined" != = typeof
                        Blob && "[object BlobConstructor]" == = T.call(Blob), A = "function" == = typeof
                        File || "undefined" != = typeof File && "[object FileConstructor]" == = T.call(File); function L
                        (e) { return E && (e instanceof ArrayBuffer || (e = > "function" == = typeof
                        ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer)(e))||
                        C && e instanceof Blob || A && e instanceof File}function P (e, t){
                            if (!e || "object" != = typeof e)return !1;
                            if (Array.isArray(e)) {
                                for (let t = 0, n = e.length; t < n; t++) if (P(e[t])) return !0;
                                return !1
                            } if (L(e)) return !0;
                            if (e.toJSON && "function" == = typeof e.toJSON && 1 == = arguments.length)
                            return P(e.toJSON(), !0);
                            for (const n in e)if (Object.prototype.hasOwnProperty.call(e, n) && P(e[n])) return !0;
                            return !1
                        } function R (e) {const t =[],n = e.data, r = e;
                        return r.data = D(n, t),r.attachments = t.length, {packet:r, buffers:t}}function D (e, t){
                            if (!e) return e;
                            if (L(e)) {const n = {_placeholder:!0, num:t.length};
                                return t.push(e),n
                            } if (Array.isArray(e)) {const n = new Array(e.length);
                                for (let r = 0; r < e.length; r++) n[r] = D(e[r], t);
                                return n
                            } if ("object" == = typeof e && !(e instanceof Date)){const n = {};
                                for (const r in e)e.hasOwnProperty(r) && (n[r] = D(e[r], t));
                                return n
                            } return e
                        } function k (e, t){
                            return e.data = I(e.data, t),e.attachments = void 0, e
                        } function I (e, t){
                            if (!e) return e;
                            if (e && e._placeholder) return t[e.num];
                            if (Array.isArray(e)) for (let n = 0; n < e.length; n++) e[n] = I(e[n], t);
                            else if ("object" == = typeof e)for (const n in e)
                            e.hasOwnProperty(n) && (e[n] = I(e[n], t));
                            return e
                        }const N = 5;
                        var O;
                        !function(e) {
                            e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
                        } (O || (O = {}));
                        class z {
                            encode(e) {
                                return e.type != = O.EVENT && e.type != = O.ACK || !P(e) ?[this.encodeAsString(e)]:
                                (e.type = e.type == = O.EVENT ? O.BINARY_EVENT : O.BINARY_ACK, this.encodeAsBinary(e))}

                            encodeAsString(e) {
                                let t = "" + e.type;
                                return e.type != = O.BINARY_EVENT && e.type != = O.BINARY_ACK || (t += e.attachments + "-"),
                                e.nsp && "/" != = e.nsp && (t += e.nsp + ","), null != e.id && (t += e.id), null != e.data && (t += JSON.stringify(e.data)), t
                            }

                            encodeAsBinary(e) {const t = R(e), n = this.encodeAsString(t.packet), r = t.buffers;
                                return r.unshift(n),r
                            }
                        } class U extends h.Emitter {
                            constructor() {
                                super()
                            }

                            add(e) {
                                let t;
                                if ("string" == = typeof e)
                                t = this.decodeString(e), t.type == = O.BINARY_EVENT || t.type == = O.BINARY_ACK ? (this.reconstructor = new F(t), 0 == = t.attachments && super.emitReserved("decoded", t)):
                                super.emitReserved("decoded", t);else{
                                    if (!L(e) && !e.base64) throw new Error("Unknown type: " + e);
                                    if (!this.reconstructor)
                                        throw new Error("got binary data when not reconstructing a packet");
                                    t = this.reconstructor.takeBinaryData(e), t && (this.reconstructor = null, super.emitReserved("decoded", t))}
                            }

                            decodeString(e) {
                                let t = 0;const n = {type:Number(e.charAt(0))};
                                if ( void 0 == = O[n.type])throw new Error("unknown packet type " + n.type);
                                if (n.type == = O.BINARY_EVENT || n.type == = O.BINARY_ACK) {const r = t + 1;
                                    for (; "-" != = e.charAt(++t) && t != e.length; ) ;const i = e.substring(r, t);
                                    if (i != Number(i) || "-" != = e.charAt(t)) throw new Error("Illegal attachments");
                                    n.attachments = Number(i)
                                } if ("/" == = e.charAt(t + 1)) {const r = t + 1;
                                    for (; ++t; ) {
                                        if ("," == = e.charAt(t)) break; if (t == = e.length) break
                                    } n.nsp = e.substring(r, t)
                                } else n.nsp = "/";const r = e.charAt(t + 1);
                                if ("" != = r && Number(r) == r) {const r = t + 1;
                                    for (; ++t; ) {const n = e.charAt(t);
                                        if (null == n || Number(n) != n) {
                                            --t;
                                            break
                                        } if (t == = e.length) break
                                    } n.id = Number(e.substring(r, t + 1))
                                } if (e.charAt(++t)) {const r = function(e) {
                                    try {
                                        return JSON.parse(e)
                                    } catch (t) {
                                        return !1
                                    }
                                } (e.substr(t));
                                    if (!U.isPayloadValid(n.type, r)) throw new Error("invalid payload");
                                    n.data = r
                                } return n
                            }

                            static isPayloadValid(e, t) {
                                switch (e) {
                                    case O.CONNECT:
                                        return "object" == = typeof t;
                                    case O.DISCONNECT:
                                        return void 0 == = t;
                                    case O.CONNECT_ERROR:
                                        return "string" == = typeof t || "object" == = typeof t;
                                    case O.EVENT:
                                    case O.BINARY_EVENT:
                                        return Array.isArray(t) && t.length > 0;
                                    case O.ACK:
                                    case O.BINARY_ACK:
                                        return Array.isArray(t)
                                }
                            }

                            destroy() {
                                this.reconstructor && this.reconstructor.finishedReconstruction()
                            }
                        } class F {
                            constructor(e) {
                                this.packet = e, this.buffers =[],this.reconPack = e
                            }

                            takeBinaryData(e) {
                                if (this.buffers.push(e),this.buffers.length == = this.reconPack.attachments)
                                {const e = k(this.reconPack, this.buffers);
                                    return this.finishedReconstruction(),e
                                } return null
                            }

                            finishedReconstruction() {
                                this.reconPack = null, this.buffers =[]}
                        } function B (e, t, n){
                            return e.on(t, n),function() {
                                e.off(t, n)
                            }
                        }const V = Object.freeze({connect:1, connect_error:1, disconnect:1, disconnecting:1, newListener:
                        1, removeListener:1});
                        class H extends h.Emitter {
                            constructor(e, t, n) {
                                super(), this.connected = !1, this.disconnected = !0, this.receiveBuffer =[],
                                this.sendBuffer =[],
                                this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = t, n && n.auth && (this.auth = n.auth), this.io._autoConnect && this.open()
                            }

                            subEvents() {
                                if (this.subs) return;const e = this.io;
                                this.subs =[
                                B(e, "open", this.onopen.bind(this)), B(e, "packet", this.onpacket.bind(this)), B(e, "error", this.onerror.bind(this)), B(e, "close", this.onclose.bind(this))]}

                            get active() {
                                return !!this.subs
                            }

                            connect() {
                                return this.connected || (this.subEvents(),
                                this.io._reconnecting || this.io.open(), "open" == = this.io._readyState && this.onopen()),
                                this
                            }

                            open() {
                                return this.connect()
                            }

                            send(...e) {
                                return e.unshift("message"),this.emit.apply(this, e), this
                            }

                            emit(e,...t) {
                                if (V.hasOwnProperty(e)) throw new Error('"' + e + '" is a reserved event name');
                                t.unshift(e);const n = {type:O.EVENT, data:t, options:{
                                }};
                                if (n.options.compress = !1 != = this.flags.compress,"function" == = typeof
                                t[t.length - 1]){const e = this.ids++, r = t.pop();
                                    this._registerAckCallback(e, r), n.id = e
                                }const
                                r = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                                return this.flags. volatile&&
                                (!r || !this.connected) || (this.connected ? this.packet(n) : this.sendBuffer.push(n)), this.flags = {}, this
                            }

                            _registerAckCallback(e, t) {const n = this.flags.timeout;
                                if ( void 0 == = n)return void(this.acks[e] = t);const
                                r = this.io.setTimeoutFn((() = > {delete this.acks[e];
                                for (let t = 0; t < this.sendBuffer.length; t++)
                                    this.sendBuffer[t].id == = e && this.sendBuffer.splice(t, 1);
                                t.call(this, new Error("operation has timed out"))}),n);
                                this.acks[e] = (...e)=>{
                                    this.io.clearTimeoutFn(r), t.apply(this,[null,...e])}
                            }

                            packet(e) {
                                e.nsp = this.nsp, this.io._packet(e)
                            }

                            onopen() {
                                "function" == typeof this.auth ? this.auth((e = > {this.packet({type : O.CONNECT, data:e})})):
                                this.packet({type:O.CONNECT, data:this.auth})}

                            onerror(e) {
                                this.connected || this.emitReserved("connect_error", e)
                            }

                            onclose(e) {
                                this.connected = !1, this.disconnected = !0, delete
                                this.id, this.emitReserved("disconnect", e)
                            }

                            onpacket(e) {
                                if (e.nsp == = this.nsp) switch (e.type) {
                                    case O.CONNECT:
                                        if (e.data && e.data.sid) {const t = e.data.sid;
                                            this.onconnect(t)
                                        } else
                                            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)")); break;
                                    case O.EVENT:
                                    case O.BINARY_EVENT:
                                        this.onevent(e);
                                        break;
                                    case O.ACK:
                                    case O.BINARY_ACK:
                                        this.onack(e);
                                        break;
                                    case O.DISCONNECT:
                                        this.ondisconnect();
                                        break;
                                    case O.CONNECT_ERROR:
                                        this.destroy();const t = new Error(e.data.message);
                                        t.data = e.data.data, this.emitReserved("connect_error", t)
                                }
                            }

                            onevent(e) {const t = e.data ||[];
                                null != e.id && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
                            }

                            emitEvent(e) {
                                if (this._anyListeners && this._anyListeners.length) {const
                                    t = this._anyListeners.slice();
                                    for (const n of t)n.apply(this, e)
                                } super.emit.apply(this, e)
                            }

                            ack(e) {const t = this;
                                let n = !1;
                                return function(...r){
                                    n || (n = !0, t.packet({type:O.ACK, id:e, data:r}))}
                            }

                            onack(e) {const t = this.acks[e.id];
                                "function" == = typeof t && (t.apply(this, e.data), delete this.acks[e.id])}

                            onconnect(e) {
                                this.id = e, this.connected = !0, this.disconnected = !1, this.emitBuffered(), this.emitReserved("connect")
                            }

                            emitBuffered() {
                                this.receiveBuffer.forEach((e = > this.emitEvent(e))),this.receiveBuffer =[],
                                this.sendBuffer.forEach((e = > this.packet(e))),this.sendBuffer =[]}

                            ondisconnect() {
                                this.destroy(), this.onclose("io server disconnect")
                            }

                            destroy() {
                                this.subs && (this.subs.forEach((e = > e())), this.subs = void 0),this.io._destroy(this)
                            }

                            disconnect() {
                                return this.connected && this.packet({type:O.DISCONNECT}),
                                this.destroy(), this.connected && this.onclose("io client disconnect"), this
                            }

                            close() {
                                return this.disconnect()
                            }

                            compress(e) {
                                return this.flags.compress = e,this
                            }

                            get volatile()

                            {
                                return this.flags. volatile=!0, this
                            }

                            timeout(e) {
                                return this.flags.timeout = e,this
                            }

                            onAny(e) {
                                return this._anyListeners = this._anyListeners ||[],this._anyListeners.push(e), this
                            }

                            prependAny(e) {
                                return this._anyListeners = this._anyListeners ||[],this._anyListeners.unshift(e), this
                            }

                            offAny(e) {
                                if (!this._anyListeners) return this;
                                if (e) {const t = this._anyListeners;
                                    for (let n = 0; n < t.length; n++) if (e == = t[n]) return t.splice(n, 1),this
                                } else this._anyListeners =[];
                                return this
                            }

                            listenersAny() {
                                return this._anyListeners ||[]}
                        } var W = n(26), G = n.n(W);
                        class j extends h.Emitter {
                            constructor(e, t) {
                                var n;
                                super(), this.nsps = {}, this.subs =[],e && "object" == = typeof e && (t = e, e = void 0),
                                (t = t || {}).path = t.path || "/socket.io", this.opts = t, Object(u.a) (this, t),
                                this.reconnection(!1 != = t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(null != = (n = t.randomizationFactor) &&
                                void 0 != = n ? n : .5),this.backoff = new G.a({min:this.reconnectionDelay(), max:
                                this.reconnectionDelayMax(), jitter:this.randomizationFactor()}),
                                this.timeout(null == t.timeout ? 2e4 : t.timeout), this._readyState = "closed", this.uri = e;const
                                i = t.parser || r;
                                this.encoder = new i.Encoder, this.decoder = new i.Decoder, this._autoConnect = !1 != = t.autoConnect, this._autoConnect && this.open()
                            }

                            reconnection(e) {
                                return arguments.length ? (this._reconnection = !!e,this):this._reconnection
                            }

                            reconnectionAttempts(e) {
                                return void
                                0 == = e ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)}

                            reconnectionDelay(e) {
                                var t;
                                return void
                                0 == = e ? this._reconnectionDelay : (this._reconnectionDelay = e, null == = (t = this.backoff) ||
                                void 0 == = t || t.setMin(e), this)}

                            randomizationFactor(e) {
                                var t;
                                return void
                                0 == = e ? this._randomizationFactor : (this._randomizationFactor = e, null == = (t = this.backoff) ||
                                void 0 == = t || t.setJitter(e), this)}

                            reconnectionDelayMax(e) {
                                var t;
                                return void
                                0 == = e ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, null == = (t = this.backoff) ||
                                void 0 == = t || t.setMax(e), this)}

                            timeout(e) {
                                return arguments.length ? (this._timeout = e,this):this._timeout
                            }

                            maybeReconnectOnOpen() {
                                !this._reconnecting && this._reconnection && 0 == = this.backoff.attempts && this.reconnect()
                            }

                            open(e) {
                                if (~this._readyState.indexOf("open")) return this;
                                this.engine = new M(this.uri, this.opts);const t = this.engine, n = this;
                                this._readyState = "opening", this.skipReconnect = !1;const r = B(t, "open", (function()
                                {
                                    n.onopen(), e && e()
                                })),
                                i = B(t, "error", (t = > {n.cleanup(), n._readyState = "closed", this.emitReserved("error", t), e ? e(t) : n.maybeReconnectOnOpen()}))
                                ;
                                if (!1 != = this._timeout) {const e = this._timeout;
                                    0 == = e && r();const
                                    n = this.setTimeoutFn((() = > {r(), t.close(), t.emit("error", new Error("timeout"))}), e)
                                    ;
                                    this.opts.autoUnref && n.unref(), this.subs.push((function() {
                                        clearTimeout(n)
                                    }))} return this.subs.push(r),this.subs.push(i), this
                            }

                            connect(e) {
                                return this.open(e)
                            }

                            onopen() {
                                this.cleanup(), this._readyState = "open", this.emitReserved("open");const
                                e = this.engine;
                                this.subs.push(B(e, "ping", this.onping.bind(this)), B(e, "data", this.ondata.bind(this)), B(e, "error", this.onerror.bind(this)), B(e, "close", this.onclose.bind(this)), B(this.decoder, "decoded", this.ondecoded.bind(this)))
                            }

                            onping() {
                                this.emitReserved("ping")
                            }

                            ondata(e) {
                                this.decoder.add(e)
                            }

                            ondecoded(e) {
                                this.emitReserved("packet", e)
                            }

                            onerror(e) {
                                this.emitReserved("error", e)
                            }

                            socket(e, t) {
                                let n = this.nsps[e];
                                return n || (n = new H(this, e, t),this.nsps[e] = n),n
                            }

                            _destroy(e) {const t = Object.keys(this.nsps);
                                for (const n of t){
                                    if (this.nsps[n].active) return
                                } this._close()
                            }

                            _packet(e) {const t = this.encoder.encode(e);
                                for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options)
                            }

                            cleanup() {
                                this.subs.forEach((e = > e())),this.subs.length = 0, this.decoder.destroy()
                            }

                            _close() {
                                this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
                            }

                            disconnect() {
                                return this._close()
                            }

                            onclose(e) {
                                this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
                            }

                            reconnect() {
                                if (this._reconnecting || this.skipReconnect) return this;const e = this;
                                if (this.backoff.attempts >= this._reconnectionAttempts)
                                    this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
                                else {const t = this.backoff.duration();
                                    this._reconnecting = !0;const
                                    n = this.setTimeoutFn((() = > {e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open((t = > {t ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", t)):
                                    e.onreconnect()})))}),t);
                                    this.opts.autoUnref && n.unref(), this.subs.push((function() {
                                        clearTimeout(n)
                                    }))}
                            }

                            onreconnect() {const e = this.backoff.attempts;
                                this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
                            }
                        }const q = {};
                        function X (e, t){
                            "object" == = typeof e && (t = e, e = void 0);const n = function(e, t = "", n) {
                                let r = e;
                                n = n || "undefined" != = typeof
                                location && location, null == e && (e = n.protocol + "//" + n.host), "string" == = typeof
                                e && ("/" == = e.charAt(0) && (e = "/" == = e.charAt(1) ? n.protocol + e : n.host + e),/^
                                (https ? | wss ?):\/\//.test(e)||(e="undefined"!==typeof n?n.protocol+"//"+e:"https://"+e),r=a()(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+t,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}(e,(t=t||{}).path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=q[i]&&s in q[i].nsps;let l;return t.forceNew||t["force new connection"]||!1===t.multiplex||o?l=new j(r,t):(q[i]||(q[i]=new j(r,t)),l=q[i]),n.query&&!t.query&&(t.query=n.queryKey),l.socket(n.path,t)}Object.assign(X,{Manager:j,Socket:H,io:X,connect:X})},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function s(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var n,o,l=s(e),c=1;c<arguments.length;c++){for(var u in n=Object(arguments[c]))i.call(n,u)&&(l[u]=n[u]);if(r){o=r(n);for(var h=0;h<o.length;h++)a.call(n,o[h])&&(l[o[h]]=n[o[h]])}}return l}},,,,,,,function(e,t,n){"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(30)},function(e,t){try{e.exports="undefined"!==typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){e.exports=!1}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var r=n(11),i=n(12),a=n.n(i),s=n(14),o=n.n(s),l=n(7),c=n(8),u=n(9);const h="undefined"!==typeof navigator&&"string"===typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class d extends r.a{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=h?{}:Object(l.b)(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=c.d&&!h?t?new c.a(e,t):new c.a(e):new c.a(e,t,n)}catch(r){return this.emit("error",r)}this.ws.binaryType=this.socket.binaryType||c.b,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(t){this.writable=!1;for(let n=0;n<t.length;n++){const r=t[n],i=n===t.length-1;Object(u.c)(r,this.supportsBinary,(t=>{const n={};if(!c.d&&(r.options&&(n.compress=r.options.compress),this.opts.perMessageDeflate)){("string"===typeof t?e.byteLength(t):t.length)<this.opts.perMessageDeflate.threshold&&(n.compress=!1)}try{c.d?this.ws.send(t):this.ws.send(t,n)}catch(a){}i&&Object(c.c)((()=>{this.writable=!0,this.emit("drain")}),this.setTimeoutFn)}))}}doClose(){"undefined"!==typeof this.ws&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let n="";this.opts.port&&("wss"===t&&443!==Number(this.opts.port)||"ws"===t&&80!==Number(this.opts.port))&&(n=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=o()()),this.supportsBinary||(e.b64=1);const r=a.a.encode(e);return t+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}check(){return!!c.a&&!("__initialize"in c.a&&this.name===d.prototype.name)}}}).call(this,n(43).Buffer)},function(e,t){function n(e){e=e||{},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}e.exports=n,n.prototype.duration=function(){var e=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=0==(1&Math.floor(10*t))?e-n:e+n}return 0|Math.min(e,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(e){this.ms=e},n.prototype.setMax=function(e){this.max=e},n.prototype.setJitter=function(e){this.jitter=e}},function(e,t,n){"use strict";var r=function(){var e=0,t=document.createElement("div");function n(e){return t.appendChild(e.dom),e}function i(n){for(var r=0;r<t.children.length;r++)t.children[r].style.display=r===n?"block":"none";e=n}t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",(function(n){n.preventDefault(),i(++e%t.children.length)}),!1);var a=(performance||Date).now(),s=a,o=0,l=n(new r.Panel("FPS","#0ff","#002")),c=n(new r.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=n(new r.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(c.update(e-a,200),e>=s+1e3&&(l.update(1e3*o/(e-s),100),s=e,o=0,u)){var t=performance.memory;u.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){a=this.end()},domElement:t,setMode:i}};r.Panel=function(e,t,n){var r=1/0,i=0,a=Math.round,s=a(window.devicePixelRatio||1),o=80*s,l=48*s,c=3*s,u=2*s,h=3*s,d=15*s,f=74*s,p=30*s,m=document.createElement("canvas");m.width=o,m.height=l,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*s+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=n,g.fillRect(0,0,o,l),g.fillStyle=t,g.fillText(e,c,u),g.fillRect(h,d,f,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h,d,f,p),{dom:m,update:function(l,v){r=Math.min(r,l),i=Math.max(i,l),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,o,d),g.fillStyle=t,g.fillText(a(l)+" "+e+" ("+a(r)+"-"+a(i)+")",c,u),g.drawImage(m,h+s,d,f-s,p,h,d,f-s,p),g.fillRect(h+f-s,d,s,p),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(h+f-s,d,s,a((1-l/v)*p))}}},t.a=r},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),i=n(4),a=n(3);function s(e){let{basename:t,children:n,window:s}=e,o=Object(r.useRef)();null==o.current&&(o.current=Object(i.b)({window:s}));let l=o.current,[c,u]=Object(r.useState)({action:l.action,location:l.location});return Object(r.useLayoutEffect)((()=>l.listen(u)),[l]),Object(r.createElement)(a.b,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l})}},function(e,t,n){"use strict";var r=n(16),i=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,o=60110,l=60112;t.Suspense=60113;var c=60115,u=60116;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;i=h("react.element"),a=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),s=h("react.provider"),o=h("react.context"),l=h("react.forward_ref"),t.Suspense=h("react.suspense"),c=h("react.memo"),u=h("react.lazy")}var d="function"===typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var _=y.prototype=new v;_.constructor=y,r(_,g.prototype),_.isPureReactComponent=!0;var x={current:null},b=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,a={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)b.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:i,type:e,key:s,ref:o,props:a,_owner:x.current}}function M(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var E=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,s){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case i:case a:l=!0}}if(l)return s=s(l=e),e=""===r?"."+T(l,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),C(s,t,n,"",(function(e){return e}))):null!=s&&(M(s)&&(s=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+T(o=e[c],c);l+=C(o,t,n,u,s)}else if("function"===typeof(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),c=0;!(o=e.next()).done;)l+=C(o=o.value,t,n,u=r+T(o,c++),s);else if("object"===o)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function A(e,t,n){if(null==e)return e;var r=[],i=0;return C(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function L(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(f(321));return e}var D={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!M(e))throw Error(f(143));return e}},t.Component=g,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(f(267,e));var a=r({},e.props),s=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=x.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)b.call(t,u)&&!w.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];a.children=c}return{$$typeof:i,type:e.type,key:s,ref:o,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=M,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},function(e,t,n){"use strict";var r=n(2),i=n(16),a=n(31);function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(s(227));var o=new Set,l={};function c(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var h=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f=Object.prototype.hasOwnProperty,p={},m={};function g(e,t,n,r,i,a,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){v[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];v[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){v[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){v[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){v[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){v[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){v[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){v[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){v[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var y=/[\-:]([a-z])/g;function _(e){return e[1].toUpperCase()}function x(e,t,n,r){var i=v.hasOwnProperty(t)?v[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!f.call(m,e)||!f.call(p,e)&&(d.test(e)?m[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(y,_);v[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(y,_);v[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(y,_);v[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){v[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),v.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){v[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=60103,S=60106,M=60107,E=60108,T=60114,C=60109,A=60110,L=60112,P=60113,R=60120,D=60115,k=60116,I=60121,N=60128,O=60129,z=60130,U=60131;if("function"===typeof Symbol&&Symbol.for){var F=Symbol.for;w=F("react.element"),S=F("react.portal"),M=F("react.fragment"),E=F("react.strict_mode"),T=F("react.profiler"),C=F("react.provider"),A=F("react.context"),L=F("react.forward_ref"),P=F("react.suspense"),R=F("react.suspense_list"),D=F("react.memo"),k=F("react.lazy"),I=F("react.block"),F("react.scope"),N=F("react.opaque.id"),O=F("react.debug_trace_mode"),z=F("react.offscreen"),U=F("react.legacy_hidden")}var B,V="function"===typeof Symbol&&Symbol.iterator;function H(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=V&&e[V]||e["@@iterator"])?e:null}function W(e){if(void 0===B)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);B=t&&t[1]||""}return"\n"+B+e}var G=!1;function j(e,t){if(!e||G)return"";G=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&"string"===typeof l.stack){for(var i=l.stack.split("\n"),a=r.stack.split("\n"),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(1!==s||1!==o)do{if(s--,0>--o||i[s]!==a[o])return"\n"+i[s].replace(" at new "," at ")}while(1<=s&&0<=o);break}}}finally{G=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?W(e):""}function q(e){switch(e.tag){case 5:return W(e.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return e=j(e.type,!1);case 11:return e=j(e.type.render,!1);case 22:return e=j(e.type._render,!1);case 1:return e=j(e.type,!0);default:return""}}function X(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case M:return"Fragment";case S:return"Portal";case T:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case A:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case L:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case D:return X(e.type);case I:return X(e._render);case k:t=e._payload,e=e._init;try{return X(e(t))}catch(n){}}return null}function Y(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function K(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Z(e){e._valueTracker||(e._valueTracker=function(e){var t=K(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function J(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=K(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function $(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Q(e,t){var n=t.checked;return i({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ee(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Y(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function te(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function ne(e,t){te(e,t);var n=Y(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ie(e,t.type,n):t.hasOwnProperty("defaultValue")&&ie(e,t.type,Y(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function re(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ie(e,t,n){"number"===t&&$(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function ae(e,t){return e=i({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function se(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Y(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function oe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(s(91));return i({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function le(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(s(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(s(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Y(n)}}function ce(e,t){var n=Y(t.value),r=Y(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ue(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var he="http://www.w3.org/1999/xhtml",de="http://www.w3.org/2000/svg";function fe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?fe(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var me,ge,ve=(ge=function(e,t){if(e.namespaceURI!==de||"innerHTML"in e)e.innerHTML=t;else{for((me=me||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=me.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ge(e,t)}))}:ge);function ye(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var _e={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xe=["Webkit","ms","Moz","O"];function be(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||_e.hasOwnProperty(e)&&_e[e]?(""+t).trim():t+"px"}function we(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=be(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(_e).forEach((function(e){xe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_e[t]=_e[e]}))}));var Se=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Me(e,t){if(t){if(Se[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(s(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(s(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(s(62))}}function Ee(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Te(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ce=null,Ae=null,Le=null;function Pe(e){if(e=ei(e)){if("function"!==typeof Ce)throw Error(s(280));var t=e.stateNode;t&&(t=ni(t),Ce(e.stateNode,e.type,t))}}function Re(e){Ae?Le?Le.push(e):Le=[e]:Ae=e}function De(){if(Ae){var e=Ae,t=Le;if(Le=Ae=null,Pe(e),t)for(e=0;e<t.length;e++)Pe(t[e])}}function ke(e,t){return e(t)}function Ie(e,t,n,r,i){return e(t,n,r,i)}function Ne(){}var Oe=ke,ze=!1,Ue=!1;function Fe(){null===Ae&&null===Le||(Ne(),De())}function Be(e,t){var n=e.stateNode;if(null===n)return null;var r=ni(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(s(231,t,typeof n));return n}var Ve=!1;if(h)try{var He={};Object.defineProperty(He,"passive",{get:function(){Ve=!0}}),window.addEventListener("test",He,He),window.removeEventListener("test",He,He)}catch(ge){Ve=!1}function We(e,t,n,r,i,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ge=!1,je=null,qe=!1,Xe=null,Ye={onError:function(e){Ge=!0,je=e}};function Ke(e,t,n,r,i,a,s,o,l){Ge=!1,je=null,We.apply(Ye,arguments)}function Ze(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Je(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function $e(e){if(Ze(e)!==e)throw Error(s(188))}function Qe(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ze(e)))throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return $e(i),e;if(a===r)return $e(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(3!==n.tag)throw Error(s(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function et(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var tt,nt,rt,it,at=!1,st=[],ot=null,lt=null,ct=null,ut=new Map,ht=new Map,dt=[],ft="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pt(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:i,targetContainers:[r]}}function mt(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":ut.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ht.delete(t.pointerId)}}function gt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e=pt(t,n,r,i,a),null!==t&&(null!==(t=ei(t))&&nt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function vt(e){var t=Qr(e.target);if(null!==t){var n=Ze(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Je(n)))return e.blockedOn=t,void it(e.lanePriority,(function(){a.unstable_runWithPriority(e.priority,(function(){rt(n)}))}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function yt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ei(n))&&nt(t),e.blockedOn=n,!1;t.shift()}return!0}function _t(e,t,n){yt(e)&&n.delete(t)}function xt(){for(at=!1;0<st.length;){var e=st[0];if(null!==e.blockedOn){null!==(e=ei(e.blockedOn))&&tt(e);break}for(var t=e.targetContainers;0<t.length;){var n=Qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&st.shift()}null!==ot&&yt(ot)&&(ot=null),null!==lt&&yt(lt)&&(lt=null),null!==ct&&yt(ct)&&(ct=null),ut.forEach(_t),ht.forEach(_t)}function bt(e,t){e.blockedOn===t&&(e.blockedOn=null,at||(at=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,xt)))}function wt(e){function t(t){return bt(t,e)}if(0<st.length){bt(st[0],e);for(var n=1;n<st.length;n++){var r=st[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==ot&&bt(ot,e),null!==lt&&bt(lt,e),null!==ct&&bt(ct,e),ut.forEach(t),ht.forEach(t),n=0;n<dt.length;n++)(r=dt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<dt.length&&null===(n=dt[0]).blockedOn;)vt(n),null===n.blockedOn&&dt.shift()}function St(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mt={animationend:St("Animation","AnimationEnd"),animationiteration:St("Animation","AnimationIteration"),animationstart:St("Animation","AnimationStart"),transitionend:St("Transition","TransitionEnd")},Et={},Tt={};function Ct(e){if(Et[e])return Et[e];if(!Mt[e])return e;var t,n=Mt[e];for(t in n)if(n.hasOwnProperty(t)&&t in Tt)return Et[e]=n[t];return e}h&&(Tt=document.createElement("div").style,"AnimationEvent"in window||(delete Mt.animationend.animation,delete Mt.animationiteration.animation,delete Mt.animationstart.animation),"TransitionEvent"in window||delete Mt.transitionend.transition);var At=Ct("animationend"),Lt=Ct("animationiteration"),Pt=Ct("animationstart"),Rt=Ct("transitionend"),Dt=new Map,kt=new Map,It=["abort","abort",At,"animationEnd",Lt,"animationIteration",Pt,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Rt,"transitionEnd","waiting","waiting"];function Nt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),kt.set(r,t),Dt.set(r,i),c(i,[r])}}(0,a.unstable_now)();var Ot=8;function zt(e){if(0!==(1&e))return Ot=15,1;if(0!==(2&e))return Ot=14,2;if(0!==(4&e))return Ot=13,4;var t=24&e;return 0!==t?(Ot=12,t):0!==(32&e)?(Ot=11,32):0!==(t=192&e)?(Ot=10,t):0!==(256&e)?(Ot=9,256):0!==(t=3584&e)?(Ot=8,t):0!==(4096&e)?(Ot=7,4096):0!==(t=4186112&e)?(Ot=6,t):0!==(t=62914560&e)?(Ot=5,t):67108864&e?(Ot=4,67108864):0!==(134217728&e)?(Ot=3,134217728):0!==(t=805306368&e)?(Ot=2,t):0!==(1073741824&e)?(Ot=1,1073741824):(Ot=8,e)}function Ut(e,t){var n=e.pendingLanes;if(0===n)return Ot=0;var r=0,i=0,a=e.expiredLanes,s=e.suspendedLanes,o=e.pingedLanes;if(0!==a)r=a,i=Ot=15;else if(0!==(a=134217727&n)){var l=a&~s;0!==l?(r=zt(l),i=Ot):0!==(o&=a)&&(r=zt(o),i=Ot)}else 0!==(a=n&~s)?(r=zt(a),i=Ot):0!==o&&(r=zt(o),i=Ot);if(0===r)return 0;if(r=n&((0>(r=31-Gt(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0===(t&s)){if(zt(t),i<=Ot)return t;Ot=i}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-Gt(t)),r|=e[n],t&=~i;return r}function Ft(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Bt(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Vt(24&~t))?Bt(10,t):e;case 10:return 0===(e=Vt(192&~t))?Bt(8,t):e;case 8:return 0===(e=Vt(3584&~t))&&(0===(e=Vt(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Vt(805306368&~t))&&(t=268435456),t}throw Error(s(358,e))}function Vt(e){return e&-e}function Ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wt(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-Gt(t)]=n}var Gt=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(jt(e)/qt|0)|0},jt=Math.log,qt=Math.LN2;var Xt=a.unstable_UserBlockingPriority,Yt=a.unstable_runWithPriority,Kt=!0;function Zt(e,t,n,r){ze||Ne();var i=$t,a=ze;ze=!0;try{Ie(i,e,t,n,r)}finally{(ze=a)||Fe()}}function Jt(e,t,n,r){Yt(Xt,$t.bind(null,e,t,n,r))}function $t(e,t,n,r){var i;if(Kt)if((i=0===(4&t))&&0<st.length&&-1<ft.indexOf(e))e=pt(null,e,t,n,r),st.push(e);else{var a=Qt(e,t,n,r);if(null===a)i&&mt(e,r);else{if(i){if(-1<ft.indexOf(e))return e=pt(a,e,t,n,r),void st.push(e);if(function(e,t,n,r,i){switch(t){case"focusin":return ot=gt(ot,e,t,n,r,i),!0;case"dragenter":return lt=gt(lt,e,t,n,r,i),!0;case"mouseover":return ct=gt(ct,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ut.set(a,gt(ut.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,ht.set(a,gt(ht.get(a)||null,e,t,n,r,i)),!0}return!1}(a,e,t,n,r))return;mt(e,r)}Dr(e,t,r,null,n)}}}function Qt(e,t,n,r){var i=Te(r);if(null!==(i=Qr(i))){var a=Ze(i);if(null===a)i=null;else{var s=a.tag;if(13===s){if(null!==(i=Je(a)))return i;i=null}else if(3===s){if(a.stateNode.hydrate)return 3===a.tag?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return Dr(e,t,r,i,n),null}var en=null,tn=null,nn=null;function rn(){if(nn)return nn;var e,t,n=tn,r=n.length,i="value"in en?en.value:en.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[a-t];t++);return nn=i.slice(e,1<t?1-t:void 0)}function an(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function sn(){return!0}function on(){return!1}function ln(e){function t(t,n,r,i,a){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?sn:on,this.isPropagationStopped=on,this}return i(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=sn)},persist:function(){},isPersistent:sn}),t}var cn,un,hn,dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fn=ln(dn),pn=i({},dn,{view:0,detail:0}),mn=ln(pn),gn=i({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&"mousemove"===e.type?(cn=e.screenX-hn.screenX,un=e.screenY-hn.screenY):un=cn=0,hn=e),cn)},movementY:function(e){return"movementY"in e?e.movementY:un}}),vn=ln(gn),yn=ln(i({},gn,{dataTransfer:0})),_n=ln(i({},pn,{relatedTarget:0})),xn=ln(i({},dn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=ln(i({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),wn=ln(i({},dn,{data:0})),Sn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},En={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=En[e])&&!!t[e]}function Cn(){return Tn}var An=ln(i({},pn,{key:function(e){if(e.key){var t=Sn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=an(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Mn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?an(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?an(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),Ln=ln(i({},gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=ln(i({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Rn=ln(i({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Dn=ln(i({},gn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),kn=[9,13,27,32],In=h&&"CompositionEvent"in window,Nn=null;h&&"documentMode"in document&&(Nn=document.documentMode);var On=h&&"TextEvent"in window&&!Nn,zn=h&&(!In||Nn&&8<Nn&&11>=Nn),Un=String.fromCharCode(32),Fn=!1;function Bn(e,t){switch(e){case"keyup":return-1!==kn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Hn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function jn(e,t,n,r){Re(r),0<(t=Ir(t,"onChange")).length&&(n=new fn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,Xn=null;function Yn(e){Tr(e,0)}function Kn(e){if(J(ti(e)))return e}function Zn(e,t){if("change"===e)return t}var Jn=!1;if(h){var $n;if(h){var Qn="oninput"in document;if(!Qn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Qn="function"===typeof er.oninput}$n=Qn}else $n=!1;Jn=$n&&(!document.documentMode||9<document.documentMode)}function tr(){qn&&(qn.detachEvent("onpropertychange",nr),Xn=qn=null)}function nr(e){if("value"===e.propertyName&&Kn(Xn)){var t=[];if(jn(t,Xn,e,Te(e)),e=Yn,ze)e(t);else{ze=!0;try{ke(e,t)}finally{ze=!1,Fe()}}}}function rr(e,t,n){"focusin"===e?(tr(),Xn=n,(qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Xn)}function ar(e,t){if("click"===e)return Kn(t)}function sr(e,t){if("input"===e||"change"===e)return Kn(t)}var or="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},lr=Object.prototype.hasOwnProperty;function cr(e,t){if(or(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!lr.call(t,n[r])||!or(e[n[r]],t[n[r]]))return!1;return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=$();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=$((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var mr=h&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,_r=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;_r||null==gr||gr!==$(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&cr(yr,r)||(yr=r,0<(r=Ir(vr,"onSelect")).length&&(t=new fn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}Nt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Nt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Nt(It,2);for(var br="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),wr=0;wr<br.length;wr++)kt.set(br[wr],0);u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function Er(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,o,l,c){if(Ke.apply(this,arguments),Ge){if(!Ge)throw Error(s(198));var u=je;Ge=!1,je=null,qe||(qe=!0,Xe=u)}}(r,t,void 0,e),e.currentTarget=null}function Tr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;Er(i,o,c),a=l}else for(s=0;s<r.length;s++){if(l=(o=r[s]).instance,c=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;Er(i,o,c),a=l}}}if(qe)throw e=Xe,qe=!1,Xe=null,e}function Cr(e,t){var n=ri(t),r=e+"__bubble";n.has(r)||(Rr(t,e,2,!1),n.add(r))}var Ar="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){e[Ar]||(e[Ar]=!0,o.forEach((function(t){Mr.has(t)||Pr(t,!1,e,null),Pr(t,!0,e,null)})))}function Pr(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,a=n;if("selectionchange"===e&&9!==n.nodeType&&(a=n.ownerDocument),null!==r&&!t&&Mr.has(e)){if("scroll"!==e)return;i|=2,a=r}var s=ri(a),o=e+"__"+(t?"capture":"bubble");s.has(o)||(t&&(i|=4),Rr(a,e,i,t),s.add(o))}function Rr(e,t,n,r){var i=kt.get(t);
