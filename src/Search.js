import { useState } from "react";
import "./styles.css";
import Button from "./Button";

export default function Search({ action }) {
  return (
    <form>
      <h1>Select a Country:</h1>
      <section class="input">
        <Button />
        <select onChange={(e) => action(e.target.value)}>
          <option value="">---</option>
          <option value="/south-asia/af">Afghanistan</option>
          <option value="/europe/al">Albania</option>
          <option value="/africa/ag">Algeria</option>
          <option value="/europe/an">Andorra</option>
          <option value="/africa/ao">Angola</option>
          <option value="/central-america-n-caribbean/ac">
            Antigua and Barbuda
          </option>
          <option value="/south-america/ar">Argentina</option>
          <option value="/middle-east/am">Armenia</option>
          <option value="/australia-oceania/as">Australia</option>
          <option value="/europe/au">Austria</option>
          <option value="/middle-east/aj">Azerbaijan</option>
          <option value="/central-america-n-caribbean/bf">The Bahamas</option>
          <option value="/middle-east/ba">Bahrain</option>
          <option value="/south-asia/bg">Bangladesh</option>
          <option value="/central-america-n-caribbean/bb">Barbados</option>
          <option value="/europe/bo">Belarus</option>
          <option value="/europe/be">Belgium</option>
          <option value="/central-america-n-caribbean/bh">Belize</option>
          <option value="/africa/bn">Benin</option>
          <option value="/south-asia/bt">Bhutan</option>
          <option value="/south-america/bl">Bolivia</option>
          <option value="/europe/bk">Bosnia and Herzegovina</option>
          <option value="/africa/bc">Botswana</option>
          <option value="/south-america/br">Brazil</option>
          <option value="/east-n-southeast-asia/bx">Brunei</option>
          <option value="/europe/bu">Bulgaria</option>
          <option value="/africa/uv">Burkina Faso</option>
          <option value="/east-n-southeast-asia/bm">Burma</option>
          <option value="/africa/by">Burundi</option>
          <option value="/east-n-southeast-asia/cb">Cambodia</option>
          <option value="/africa/cm">Cameroon</option>
          <option value="/north-america/ca">Canada</option>
          <option value="/africa/cv">Cape Verde</option>
          <option value="/africa/ct">Central African Republic</option>
          <option value="/africa/cd">Chad</option>
          <option value="/south-america/ci">Chile</option>
          <option value="/east-n-southeast-asia/ch">China</option>
          <option value="/south-america/co">Colombia</option>
          <option value="/africa/cn">Comoros</option>
          <option value="/africa/cg">Congo DR</option>
          <option value="/africa/cf">Congo</option>
          <option value="/central-america-n-caribbean/cs">Costa Rica</option>
          <option value="/africa/iv">Cote d'Ivoire</option>
          <option value="/europe/hr">Croatia</option>
          <option value="/central-america-n-caribbean/cu">Cuba</option>
          <option value="/europe/cy">Cyprus</option>
          <option value="/europe/ez">Czechia</option>
          <option value="/europe/da">Denmark</option>
          <option value="/africa/dj">Djibouti</option>
          <option value="/central-america-n-caribbean/do">Dominica</option>
          <option value="/central-america-n-caribbean/dr">
            Dominican Republic
          </option>
          <option value="/south-america/ec">Ecuador</option>
          <option value="/africa/eg">Egypt</option>
          <option value="/central-america-n-caribbean/es">El Salvador</option>
          <option value="/africa/ek">Equatorial Guinea</option>
          <option value="/africa/er">Eritrea</option>
          <option value="/europe/en">Estonia</option>
          <option value="/africa/wz">Eswatini</option>
          <option value="/africa/et">Ethiopia</option>
          <option value="/australia-oceania/fj">Fiji</option>
          <option value="/europe/fi">Finland</option>
          <option value="/europe/fr">France</option>
          <option value="/africa/gb">Gabon</option>
          <option value="/africa/ga">The Gambia</option>
          <option value="/middle-east/gg">Georgia</option>
          <option value="/europe/gm">Germany</option>
          <option value="/africa/gh">Ghana</option>
          <option value="/europe/gr">Greece</option>
          <option value="/central-america-n-caribbean/gj">Grenada</option>
          <option value="/central-america-n-caribbean/gt">Guatemala</option>
          <option value="/africa/gv">Guinea</option>
          <option value="/africa/pu">Guinea-Bissau</option>
          <option value="/south-america/gy">Guyana</option>
          <option value="/central-america-n-caribbean/ha">Haiti</option>
          <option value="/central-america-n-caribbean/ho">Honduras</option>
          <option value="/europe/hu">Hungary</option>
          <option value="/europe/ic">Iceland</option>
          <option value="/south-asia/in">India</option>
          <option value="/east-n-southeast-asia/id">Indonesia</option>
          <option value="/middle-east/ir">Iran</option>
          <option value="/middle-east/iz">Iraq</option>
          <option value="/europe/ei">Ireland</option>
          <option value="/middle-east/is">Israel</option>
          <option value="/europe/it">Italy</option>
          <option value="/central-america-n-caribbean/jm">Jamaica</option>
          <option value="/east-n-southeast-asia/ja">Japan</option>
          <option value="/middle-east/jo">Jordan</option>
          <option value="/central-asia/kz">Kazakhstan</option>
          <option value="/africa/ke">Kenya</option>
          <option value="/australia-oceania/kr">Kiribati</option>
          <option value="/east-n-southeast-asia/kn">North Korea</option>
          <option value="/east-n-southeast-asia/ks">South Korea</option>
          <option value="/europe/kv">Kosovo</option>
          <option value="/middle-east/ku">Kuwait</option>
          <option value="/central-asia/kg">Kyrgyzstan</option>
          <option value="/east-n-southeast-asia/la">Laos</option>
          <option value="/europe/lg">Latvia</option>
          <option value="/middle-east/le">Lebanon</option>
          <option value="/africa/lt">Lesotho</option>
          <option value="/africa/li">Liberia</option>
          <option value="/africa/ly">Libya</option>
          <option value="/europe/ls">Liechtenstein</option>
          <option value="/europe/lh">Lithuania</option>
          <option value="/europe/lu">Luxembourg</option>
          <option value="/africa/ma">Madagascar</option>
          <option value="/africa/mi">Malawi</option>
          <option value="/east-n-southeast-asia/my">Malaysia</option>
          <option value="/south-asia/mv">Maldives</option>
          <option value="/africa/ml">Mali</option>
          <option value="/europe/mt">Malta</option>
          <option value="/australia-oceania/rm">Marshall Islands</option>
          <option value="/africa/mr">Mauritania</option>
          <option value="/africa/mp">Mauritius</option>
          <option value="/north-america/mx">Mexico</option>
          <option value="/australia-oceania/fm">Micronesia</option>
          <option value="/europe/md">Moldova</option>
          <option value="/europe/mn">Monaco</option>
          <option value="/east-n-southeast-asia/mg">Mongolia</option>
          <option value="/europe/mj">Montenegro</option>
          <option value="/africa/mo">Morocco</option>
          <option value="/africa/mz">Mozambique</option>
          <option value="/africa/wa">Namibia</option>
          <option value="/australia-oceania/nr">Nauru</option>
          <option value="/south-asia/np">Nepal</option>
          <option value="/europe/nl">Netherlands</option>
          <option value="/australia-oceania/nz">New Zealand</option>
          <option value="/central-america-n-caribbean/nu">Nicaragua</option>
          <option value="/africa/ng">Niger</option>
          <option value="/africa/ni">Nigeria</option>
          <option value="/europe/no">Norway</option>
          <option value="/europe/mk">North Macedonia</option>
          <option value="/middle-east/mu">Oman</option>
          <option value="/south-asia/pk">Pakistan</option>
          <option value="/australia-oceania/ps">Palau</option>
          <option value="/central-america-n-caribbean/pm">Panama</option>
          <option value="/east-n-southeast-asia/pp">Papua New Guinea</option>
          <option value="/south-america/pa">Paraguay</option>
          <option value="/south-america/pe">Peru</option>
          <option value="/east-n-southeast-asia/rp">Philippines</option>
          <option value="/europe/pl">Poland</option>
          <option value="/europe/po">Portugal</option>
          <option value="/middle-east/qa">Qatar</option>
          <option value="/europe/ro">Romania</option>
          <option value="/central-asia/rs">Russia</option>
          <option value="/africa/rw">Rwanda</option>
          <option value="/central-america-n-caribbean/sc">
            Saint Kitts and Nevis
          </option>
          <option value="/central-america-n-caribbean/st">Saint Lucia</option>
          <option value="/central-america-n-caribbean/vc">
            Saint Vincent and the Grenadines
          </option>
          <option value="/australia-oceania/ws">Samoa</option>
          <option value="/europe/sm">San Marino</option>
          <option value="/africa/tp">Sao Tome and Principe</option>
          <option value="/middle-east/sa">Saudi Arabia</option>
          <option value="/africa/sg">Senegal</option>
          <option value="/europe/ri">Serbia</option>
          <option value="/africa/se">Seychelles</option>
          <option value="/africa/sl">Sierra Leone</option>
          <option value="/east-n-southeast-asia/sn">Singapore</option>
          <option value="/europe/lo">Slovakia</option>
          <option value="/europe/si">Slovenia</option>
          <option value="/australia-oceania/bp">Solomon Islands</option>
          <option value="/africa/so">Somalia</option>
          <option value="/africa/sf">South Africa</option>
          <option value="/africa/od">South Sudan</option>
          <option value="/europe/sp">Spain</option>
          <option value="/south-asia/ce">Sri Lanka</option>
          <option value="/africa/su">Sudan</option>
          <option value="/south-america/ns">Suriname</option>
          <option value="/europe/sw">Sweden</option>
          <option value="/europe/sz">Switzerland</option>
          <option value="/middle-east/sy">Syria</option>
          <option value="/central-asia/ti">Tajikistan</option>
          <option value="/africa/tz">Tanzania</option>
          <option value="/east-n-southeast-asia/tw">Taiwan</option>
          <option value="/east-n-southeast-asia/th">Thailand</option>
          <option value="/east-n-southeast-asia/tt">Timor-Leste</option>
          <option value="/africa/to">Togo</option>
          <option value="/australia-oceania/tn">Tonga</option>
          <option value="/central-america-n-caribbean/td">
            Trinidad and Tobago
          </option>
          <option value="/africa/ts">Tunisia</option>
          <option value="/middle-east/tu">Turkey</option>
          <option value="/central-asia/tx">Turkmenistan</option>
          <option value="/australia-oceania/tv">Tuvalu</option>
          <option value="/africa/ug">Uganda</option>
          <option value="/europe/up">Ukraine</option>
          <option value="/middle-east/ae">United Arab Emirates</option>
          <option value="/europe/uk">United Kingdom</option>
          <option value="/north-america/us">United States</option>
          <option value="/south-america/uy">Uruguay</option>
          <option value="/central-asia/uz">Uzbekistan</option>
          <option value="/australia-oceania/nh">Vanuatu</option>
          <option value="/europe/vt">Vatican City (Holy See)</option>
          <option value="/south-america/ve">Venezuela</option>
          <option value="/east-n-southeast-asia/vm">Vietnam</option>
          <option value="/middle-east/ym">Yemen</option>
          <option value="/africa/za">Zambia</option>
          <option value="/africa/zi">Zimbabwe</option>
        </select>
      </section>
    </form>
  );
}
